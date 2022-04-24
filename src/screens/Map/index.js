import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { logout } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import MapboxGL from '@rnmapbox/maps';
import { MAPBOX_KEY } from '@env'
MapboxGL.setAccessToken(MAPBOX_KEY);
import { height, width } from 'react-native-dimension';
import IconButton from '../../components/IconButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { selectCity } from '../../Redux/features/citySlice';


export default function Dashboard(props) {
  const selectedCity = useSelector(selectCity);
  const mapRef = useRef(null);
  const cameraRef = useRef(null);
  // const [userLocation, setUserLocation] = useState(null);
  const userLocRef = useRef(null);
  useEffect(() => { }, []);
  const recenter = async (coords) => {
    cameraRef?.current?.setCamera({
      centerCoordinate: coords,
      zoomLevel: 11,
      animationDuration: 2000,
    });
  };
  const renderBackIcon = () => (
    <AntDesign name={'arrowleft'} size={height(3)} color={AppColors.black} />
  );
  const renderCityIcon = () => (
    <MaterialIcons
      name={'location-city'}
      size={height(3)}
      color={AppColors.black}
    />
  );
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      translucent
      barStyle="dark-content">
      <View style={styles.mainViewContainer}>
        <MapboxGL.MapView
          onLayout={() => recenter(selectedCity?.coords)}
          ref={mapRef}
          style={styles.map}>
          <MapboxGL.PointAnnotation coordinate={selectedCity?.coords} />

          <MapboxGL.Camera ref={cameraRef} />
          <MapboxGL.UserLocation visible={true} ref={userLocRef} />
        </MapboxGL.MapView>
        <IconButton
          containerStyle={styles.myLocationBtn}
          onPress={() => recenter(userLocRef.current.state?.coordinates)}
        />
        <IconButton
          icon={renderCityIcon}
          containerStyle={styles.selectedCityBtn}
          onPress={() => recenter(selectedCity?.coords)}
        />
        <IconButton
          icon={renderBackIcon}
          containerStyle={styles.backBtn}
          onPress={() => props.navigation.goBack()}
        />
      </View>
    </ScreenWrapper>
  );
}
