import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, Text, ActivityIndicator } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import Menu from '../../components/Menu';
import BottomModal from '../../components/BottomModal';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import { selectCity } from '../../Redux/features/citySlice';
import AppColors from '../../utills/AppColors';
import { Cities } from '../../utills/dummydata';
import sadCloud from '../../assets/images/sadCloud.png'
import { width, height } from 'react-native-dimension'
import styles from './styles';
import { getCityWeather } from '../../backend/WeatherApi';
import Entypo from 'react-native-vector-icons/Entypo'
import CommonStyles from '../../utills/CommonStyles';
import { selectWeekday } from '../../Redux/features/weekdaySlice';
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
export default function Dashboard({ navigation, route }) {
  const cityInfo = useSelector(selectCity)
  const day = useSelector(selectWeekday)
  const [modal, setModal] = useState({ isVisible: false, type: ModalTypes.CITY })
  const [weeklyWeather, setWeeklyWeather] = useState([])
  const [weekly, setWeekly] = useState([])
  const [chartLoading, setChartLoading] = useState(true)
  const [chartData, setChartdata] = useState(null)
  useEffect(() => {
    loadData()
  }, [day, cityInfo])
  const loadData = async () => {
    setChartLoading(true)
    const weatherData = await getCityWeather(cityInfo?.coords[1], cityInfo?.coords[0])
    if (weatherData)
      setWeeklyWeather(weatherData)
  }
  useEffect(() => {
    getDayArray()
  }, [weeklyWeather])

  const getDayArray = () => {
    let temp = []
    let times = []
    let temperatures = []
    weeklyWeather.forEach(item => {
      if (item?.day == day?.name) {
        temp.push(item)
        times.push(item?.time)
        temperatures.push(Number(item?.temperature).toFixed(0))
      }
    })
    const data = {
      labels: times,
      datasets: [
        {
          data: temperatures,
          strokeWidth: 2
        }
      ],
    };
    setChartdata(data)
    setWeekly(temp)
    setTimeout(() => {
      setChartLoading(false)
    }, 600);
  }
  const openMap = () => {
    if (cityInfo) {
      navigation.navigate('Map')
    } else {
      showMessage({
        message: 'Please select city first',
        type: 'danger'
      })
    }
  }
  const renderHeader = () => (
    <Header
      title={'Open Weather'}
    />)
  const renderWeatherCard = ({ item }) => (
    <WeatherCard item={item} />
  )
  const renderEmptyWeather = () => {
    if (!chartLoading) {
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
    } else return <></>
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
            text={cityInfo?.name}
            placeholder={'Select City'}
            onPress={() => setModal({ isVisible: true, type: ModalTypes.CITY })} />
          <Menu
            text={day?.name}
            iconType='calendar'
            placeholder={'Select Day'}
            onPress={() => setModal({ isVisible: true, type: ModalTypes.WEEKDAY })} />
        </View>
        {chartLoading ?
          <WeatherLoader />
          : <FlatList
            horizontal
            data={weekly}
            contentContainerStyle={styles.flatlistContent}
            ListEmptyComponent={renderEmptyWeather}
            renderItem={renderWeatherCard}
            style={styles.flatlist}
            keyExtractor={item => item.name}
          />}
        {chartLoading ?
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
      <IconButton
        containerStyle={styles.mapBtn}
        onPress={openMap}
        icon={() =>
          <Entypo
            name={'location'}
            color={AppColors.white}
            size={height(2.5)}
          />} />
      <BottomModal
        type={modal?.type}
        isVisible={modal?.isVisible}
        onClose={() => setModal({ ...modal, isVisible: false })} />
    </ScreenWrapper >
  );
}
