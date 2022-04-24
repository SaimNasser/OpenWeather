import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {height, width} from 'react-native-dimension';
const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0,
  },
  shadow: {
    height: height(12),
    width: width(100),
    position: 'absolute',
    top: -height(8),
  },
  modalInnerContainer: {
    backgroundColor: AppColors.white,
    borderTopRightRadius: width(7),
    borderTopLeftRadius: width(7),
    alignItems: 'center',
  },
});
export default styles;
