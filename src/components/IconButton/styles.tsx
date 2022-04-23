import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width, height} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(5),
    backgroundColor: AppColors.white,
    height: height(6),
    width: height(6),
    // alignSelf: 'center',
  },
  text: {
    color: AppColors.white,
    fontSize: width(4),
  },
});
export default styles;
