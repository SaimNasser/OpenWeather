import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import { login } from '../../Redux/Actions/Auth';
import { setLoaderVisible } from '../../Redux/Actions/Config';
import AppColors from '../../utills/AppColors';
import ModalDropdown from 'react-native-modal-dropdown';
import styles from './styles';
import CityDropMenu from '../../components/CityDropMenu';
import { Cities } from '../../utills/dummydata'
export default function Dashboard(props) {
  const [selectedCity, setSelectedCity] = useState()
  const renderHeader = () =>
    <Header
      title={'Weather App'}
    />
  return (
    <ScreenWrapper
      statusBarColor={AppColors.white}
      barStyle='dark-content'
      headerUnScrollable={renderHeader}>
      <View style={styles.mainViewContainer}>
        <CityDropMenu
          cities={Cities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity} />
        
      </View>
    </ScreenWrapper>
  );
}
