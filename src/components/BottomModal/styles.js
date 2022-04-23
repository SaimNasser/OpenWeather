import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  modalContainer: {
    minHeight: height(15),
    overflow: 'hidden',
  },
  mainContainer: {
    width: width(100),
    paddingHorizontal: width(4),
    paddingVertical: height(1.5)
  },
  header: {
    backgroundColor: AppColors.darkGrey,
    width: width(100),
    // height: height(7)
  },
  title: {
    color: AppColors.white,
    alignSelf: 'center',
    paddingVertical: height(1.5),
    fontWeight: 'bold',
    fontSize: width(4)
  },
  itemContainer: {
    paddingHorizontal: width(4)
  },
  selectedItem: {
    backgroundColor: AppColors.darkGrey,
    paddingHorizontal: width(4),
    borderRadius: width(1.7)
  },
  itemName: {
    fontSize: width(4),
    paddingVertical: height(1.5),
    color: AppColors.black
  },
  itemNameSelected: {
    fontSize: width(4),
    paddingVertical: height(1.5),
    color: AppColors.white

  },
  line: {
    width: width(95),
    height: 0.1,
    backgroundColor: AppColors.gray
  }
});
export default styles;
