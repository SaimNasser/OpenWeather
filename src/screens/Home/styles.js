import { Platform, StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension'
const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingVertical: height(1.5)
  },
  flatlist: {
    flexGrow: 0
  },
  emptyContainer: {
    height: height(27),
    width: width(100),
    marginTop: height(3),
  },
  emptyInner: {
    backgroundColor: AppColors.white,
    elevation: 2,
    alignSelf: 'center',
    paddingHorizontal: width(4),
    paddingVertical: height(1.5),
    borderRadius: width(2),
    marginRight: width(6)
  },
  emptyImage: {
    width: width(20),
    alignSelf: 'center',
  },
  emptyText: {
    color: AppColors.darkGrey,
    fontSize: width(4),
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width(100),
    padding: width(3)
  },
  chart: {
    marginRight: width(2),
    alignSelf: 'center',
    marginTop: height(3)
  },
  flatlistContent: {
    paddingVertical: height(2),
    paddingHorizontal: width(4),
  },
  mapBtn: {
    backgroundColor: AppColors.darkGrey,
    alignSelf: 'center',
    borderRadius: width(2),
  }
});
export default styles;
