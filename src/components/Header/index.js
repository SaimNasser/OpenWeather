import React from 'react';
import {
  ActivityIndicator,
  Text,
  Image,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { height } from 'react-native-dimension';
import { useSelector } from 'react-redux';
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
export const SecondaryHeader = ({
  title = '',
  onRightPress = () => { },
  rightIcon = null,
  shadow = true,
}) => {
  const notificationCount = useSelector(state => state.Config.notificationCount)
  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: Platform.OS == 'ios' ? (shadow ? 3.5 : 0) : 0,
        },
      ]}>
      <View style={styles.textCorner}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onRightPress} style={styles.cornerContainer}>
        {rightIcon ? (
          rightIcon()
        ) : (
          <>
            {notificationCount != 0 &&
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{notificationCount}</Text>
              </View>}
            <MaterialIcons
              name={'notifications-none'}
              color={AppColors.black}
              size={height(3.5)}
            />
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Header;
