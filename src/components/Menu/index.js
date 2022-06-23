import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { height } from 'react-native-dimension';
import ModalDropdown from 'react-native-modal-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import { useSelector } from 'react-redux';
import { selectCity } from '../../Redux/features/citySlice';
import AppColors from '../../utills/AppColors';
import CommonStyles from '../../utills/CommonStyles';
import styles from './styles';
export default function Menu({
  onPress = () => { },
  iconType = 'location',
  text = null,
  placeholder = '? ? ?'
}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Entypo
          name={iconType}
          color={AppColors.black}
          size={height(2.5)}
          style={CommonStyles.marginRight_3}
        />
        <Text style={styles.text} numberOfLines={1}>{text ?? placeholder}</Text>
        <Entypo
          name={'chevron-down'}
          color={AppColors.black}
          size={height(2.5)} />
      </View>
    </TouchableOpacity>
  );
}
