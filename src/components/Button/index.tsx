import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import AppColors from '../../utills/AppColors';
import CommonStyles from '../../utills/CommonStyles';
import styles from './styles';
import {width, height} from 'react-native-dimension';
type Props = {
  title: string;
  onPress: any;
  disabled: Boolean;
  isLoading: Boolean;
  loaderColor: string;
  activeOpacity: number;
  containerStyle: any;
  textStyle: any;
};
const Button: React.FC<Props> = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  textStyle = {},
  icon = null,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="large" />
      ) : (
        <View style={CommonStyles.rowAlignItemCenter}>
          <Text
            style={[
              styles.text,
              textStyle,
              // {marginRight: icon ? width(1.5) : 0},
            ]}>
            {title}
          </Text>
          {icon && icon()}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
