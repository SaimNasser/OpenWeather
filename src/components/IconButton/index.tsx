import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import AppColors from '../../utills/AppColors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {height, width} from 'react-native-dimension';

const IconButton = ({
  onPress = () => {},
  icon = () => (
    <Ionicons
      name={'ios-locate-sharp'}
      size={height(3)}
      color={AppColors.black}
    />
  ),
  disabled = false,
  activeOpacity = 0.7,
  containerStyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}>
      {icon()}
    </TouchableOpacity>
  );
};

export default IconButton;
