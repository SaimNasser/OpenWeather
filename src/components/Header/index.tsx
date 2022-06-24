import React from 'react';
import {
  Platform, Text, TouchableOpacity, View
} from 'react-native';
import { height } from 'react-native-dimension';
import Entypo from 'react-native-vector-icons/Entypo';
import AppColors from '../../utills/AppColors';
import styles from './styles';
const Header = ({
  title,
  rightIcon = false,
  leftIcon = false,
  onRightPress = () => { },
  onLeftPress = () => { },
  shadow = true,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: Platform.OS == 'ios' ? (shadow ? 3.5 : 0) : 0,
        },
      ]}>
      <TouchableOpacity
        disabled={!leftIcon}
        style={styles.cornerContainer}
        onPress={onLeftPress}>
        <Entypo
          name={'chevron-left'}
          color={leftIcon ? AppColors.black : AppColors.white}
          size={height(3.5)}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity
        disabled={!rightIcon}
        style={styles.cornerContainer}
        onPress={onRightPress}>
        <Entypo
          name={'cross'}
          color={rightIcon ? AppColors.black : AppColors.white}
          size={height(3.5)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
