import React, { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { height, width } from 'react-native-dimension';
import { showMessage } from 'react-native-flash-message';
import { useSelector } from 'react-redux';
import sadCloud from '../../assets/images/sadCloud.png';
import { useGetCityWeatherQuery } from '../../backend/Services';
import BottomModal from '../../components/BottomModal';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import ScreenWrapper from '../../components/ScreenWrapper';
import { ButtonLoader, ChartLoader, WeatherLoader } from '../../components/SkeletonLoaders';
import WeatherCard from '../../components/WeatherCard';
import { selectCity, selectWeekday } from '../../Redux/features/citySlice';
import AppColors from '../../utills/AppColors';
import { ModalTypes } from '../../utills/Enums';
import { getRefinedWeatherList } from '../../utills/Methods';
import styles from './styles';
const chartConfig = {
  backgroundGradientFrom: AppColors.white,
  backgroundGradientTo: AppColors.white,
  color: (opacity = 1) => AppColors.darkGrey,
  labelColor: () => AppColors.darkGrey,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false
};
const fallBackData = { labels: ["06:00", "09:00"], datasets: [{ data: [24, 24], "strokeWidth": 2 }] }
export default function Dashboard({ navigation, route }) {
  const selectedCity = useSelector(selectCity)
  const day = useSelector(selectWeekday)
  const [modal, setModal] = useState({ isVisible: false, type: ModalTypes.CITY })

  const { data: cityData,error: getCityError, isLoading } = useGetCityWeatherQuery({ lat: selectedCity?.coords[1], lon: selectedCity?.coords[0] })
  console.log(JSON.stringify(cityData));
  
  if (getCityError) {
    showMessage({
      type: 'danger',
      message: getCityError?.data?.message
    })
  }
  // console.log(cityData?.city?.name, 'called', isLoading)
  if (!isLoading && !getCityError) {
    var { chartData, dayArray } = getRefinedWeatherList(cityData?.list, day)
  }

  //Used to filter weather data by day selected and also structure data to be used by line chart
  const openMap = () => navigation.navigate('Map')
  const renderHeader = () => (
    <Header
      title={'Open Weather'}
    />)
  const renderWeatherCard = ({ item }) => (
    <WeatherCard item={item} />
  )
  const RenderEmptyWeather = ({ }) => {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyInner}>
          <Image
            source={sadCloud}
            resizeMode={'contain'}
            style={styles.emptyImage} />
          <Text style={styles.emptyText}>No data available</Text>
        </View>
      </View>
    )
  }
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle='dark-content'
      headerUnScrollable={renderHeader}>
      <View style={styles.mainViewContainer}>
        <View style={styles.row}>
          <Menu
            text={selectedCity?.name}
            placeholder={'Select City'}
            onPress={() => setModal({ isVisible: true, type: ModalTypes.CITY })} />
          <Menu
            text={day?.name}
            iconType='calendar'
            placeholder={'Select Day'}
            onPress={() => setModal({ isVisible: true, type: ModalTypes.WEEKDAY })} />
        </View>
        {isLoading ?
          <WeatherLoader />
          : <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dayArray}
            contentContainerStyle={styles.flatlistContent}
            ListEmptyComponent={!isLoading && <RenderEmptyWeather />}
            renderItem={renderWeatherCard}
            style={styles.flatlist}
            keyExtractor={(item, index) => item?.date + String(index)}
          />}
        {isLoading ?
          <ChartLoader />
          : <View>
            {chartData?.datasets[0]?.data?.length > 0 &&
              chartData?.labels?.length > 0 &&
              <LineChart
                data={chartData}
                width={width(95)}
                height={height(30)}
                yAxisSuffix="C°"
                style={styles.chart}
                chartConfig={chartConfig}
                bezier
              />}
          </View>}
        {isLoading ?
          <ButtonLoader />
          : <Button
            title={'Show Map'}
            containerStyle={styles.mapBtn}
            onPress={openMap}
          />}
      </View>
      <BottomModal
        type={modal?.type}
        isVisible={modal?.isVisible}
        onClose={() => setModal({ ...modal, isVisible: false })} />
    </ScreenWrapper >
  );
}
