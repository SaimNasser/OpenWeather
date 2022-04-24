import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width, height} from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(1.8),
    width: width(80),
    backgroundColor: AppColors.darkGrey,
    alignSelf: 'center',
  },
  text: {
    color: AppColors.white,
    fontSize: width(4),
    paddingVertical: height(1.5),
  },
});
export default styles;
