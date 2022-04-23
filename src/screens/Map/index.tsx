import React, {useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import {logout} from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import MapboxGL from '@rnmapbox/maps';
MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic2FpbTEyNSIsImEiOiJjbDJhZ2gybnEwNGljM2pwYWhqZW9tc3gxIn0.-k0ZaxVVj9JZTsuZF-FuOQ',
);
export type Props = {
  navigation: any;
  route: any;
};
export default function Dashboard(props: Props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  const cameraRef = useRef(null);
  const logoutMethod = async () => {
    showMessage({
      message: 'Logged Out',
      description: 'Succfully logged out',
      type: 'danger',
    });
    dispatch(logout());
  };
  useEffect(() => {}, []);
  const recenter = async (coords: number[]) => {
    cameraRef?.current?.flyTo(coords, 1200);
  };
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      translucent
      barStyle="dark-content">
      <View style={styles.mainViewContainer}>
        <MapboxGL.MapView
          onLayout={() => recenter([73.0479, 33.6844])}
          ref={mapRef}
          style={styles.map}>
          <MapboxGL.PointAnnotation coordinate={[73.0479, 33.6844]} />
          <MapboxGL.Camera ref={cameraRef} />
        </MapboxGL.MapView>
      </View>
    </ScreenWrapper>
  );
}
