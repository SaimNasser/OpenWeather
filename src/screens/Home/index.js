import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, Text, ActivityIndicator } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import Menu from '../../components/Menu';
import BottomModal from '../../components/BottomModal';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import { selectCity, selectWeekday } from '../../Redux/features/citySlice';
import AppColors from '../../utills/AppColors';
import { Cities } from '../../utills/dummydata';
import sadCloud from '../../assets/images/sadCloud.png'
import { width, height } from 'react-native-dimension'
import styles from './styles';
import { getCityWeather } from '../../backend/WeatherApi';
import Entypo from 'react-native-vector-icons/Entypo'
import CommonStyles from '../../utills/CommonStyles';
import { ModalTypes } from '../../utills/Enums';
import { LineChart } from "react-native-chart-kit";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import WeatherCard from '../../components/WeatherCard';
import { ChartLoader, WeatherLoader } from '../../components/SkeletonLoaders';
import IconButton from '../../components/IconButton';

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
  const [weekly, setWeekly] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [chartData, setChartdata] = useState(null)

  useEffect(() => {
    loadData()
  }, [day, selectedCity])

  // Loads weather data into local states
  const loadData = async () => {
    setLoading(true)
    setWeekly([])
    const weatherData = await getCityWeather(selectedCity?.coords[1], selectedCity?.coords[0])
    if (weatherData) {
      getDayArray(weatherData)
    }
  }

  //Used to filter weather data by day selected and also structure data to be used by line chart
  const getDayArray = (list) => {
    let dayArray = []
    let timeAxis = []
    let temperatureAxis = []
    list.forEach(item => {
      if (item?.day == day?.name) {
        dayArray.push(item)
        timeAxis.push(item?.time)
        temperatureAxis.push(Number(item?.temperature))
      }
    })
    const chartdataObj = {
      labels: timeAxis,
      datasets: [
        {
          data: temperatureAxis,
          strokeWidth: 2
        }
      ],
    };
    setChartdata(chartdataObj)
    setWeekly(dayArray)
    setLoading(false)
  }
  const openMap = () => navigation.navigate('Map')
  const renderHeader = () => (
    <Header
      title={'Open Weather'}
    />)
  const renderWeatherCard = ({ item }) => (
    <WeatherCard item={item} />
  )
  const renderEmptyWeather = () => {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyInner}>
          <Image
            source={sadCloud}
            tintColor={AppColors.darkGrey}
            resizeMode={'contain'}
            style={styles.emptyImage} />
          <Text style={styles.emptyText}>No data available</Text>
        </View>
      </View>
    )
  }
  return (
    <ScreenWrapper
      scrollEnabled
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
            data={weekly}
            contentContainerStyle={styles.flatlistContent}
            ListEmptyComponent={!isLoading && renderEmptyWeather()}
            renderItem={renderWeatherCard}
            style={styles.flatlist}
            keyExtractor={item => item?.date + item?.time}
          />}
        {isLoading ?
          <ChartLoader />
          : <View>
            {chartData?.datasets[0]?.data?.length > 0 &&
              chartData?.labels?.length > 0 &&
              <LineChart
                data={chartData}
                width={width(90)}
                height={height(30)}
                yAxisSuffix="C°"
                style={styles.chart}
                chartConfig={chartConfig}
                bezier
              />}
          </View>}
      </View>
      <Button
        title={'Show Map'}
        containerStyle={styles.mapBtn}
        onPress={openMap}
      />
      <BottomModal
        type={modal?.type}
        isVisible={modal?.isVisible}
        onClose={() => setModal({ ...modal, isVisible: false })} />
    </ScreenWrapper >
  );
}
