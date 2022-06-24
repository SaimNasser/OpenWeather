import { MAPBOX_KEY } from 'react-native-dotenv';
import MapboxGL from '@rnmapbox/maps';
import React, { useRef } from 'react';
import { View } from 'react-native';
import { height, width } from 'react-native-dimension';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import IconButton from '../../components/IconButton';
import { selectCity } from '../../Redux/features/citySlice';
import AppColors from '../../utills/AppColors';
import styles from './styles';
MapboxGL.setAccessToken(MAPBOX_KEY);


export default function Dashboard(props) {
  const selectedCity = useSelector(selectCity);
  const mapRef = useRef(null);
  const cameraRef = useRef(null);
  const userLocRef = useRef(null);
  const recenter = async (coords) => {
    cameraRef?.current?.setCamera({
      centerCoordinate: coords,
      zoomLevel: 10,
      animationDuration: 1200,
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
          scaleBarPosition={{ bottom: 4, left: 20 }}
          onLayout={() => recenter(selectedCity?.coords)}
          ref={mapRef}
          style={styles.map}
          styleURL={MapboxGL.StyleURL.Dark}
          compassEnabled={false}
          logoEnabled={false}>

          <MapboxGL.Camera ref={cameraRef} />
          <MapboxGL.PointAnnotation id='cityMarker' coordinate={selectedCity?.coords} />
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
