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
    backgroundColor: AppColors.gray50,
    paddingHorizontal: width(4),
    borderLeftWidth: width(1),
    borderLeftColor: AppColors.darkGrey
  },
  itemName: {
    fontSize: width(4),
    paddingVertical: height(1.5),
    color: AppColors.black
  },
  itemNameSelected: {
    fontSize: width(4),
    paddingVertical: height(1.5),
    color: AppColors.black

  },
  line: {
    width: width(95),
    height: 0.1,
    backgroundColor: AppColors.gray
  },
  cityImg: {
    height: height(30),
    width: width(85)
  },
  list: {
    marginBottom: height(2)
  }
});
export default styles;
