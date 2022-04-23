import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {height, width} from 'react-native-dimension';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: AppColors.green,
  },
  map: {
    flex: 1,
  },
  myLocationBtn: {
    elevation: 5,
    position: 'absolute',
    right: width(6),
    top: height(6),
  },
  backBtn: {
    elevation: 5,
    position: 'absolute',
    left: width(6),
    top: height(6),
  },
});
export default styles;
