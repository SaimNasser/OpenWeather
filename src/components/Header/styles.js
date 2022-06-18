import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import { Fonts } from '../../utills/Enums';

const styles = StyleSheet.create({
  container: {
    height: height(8),
    backgroundColor: AppColors.white,
    width: width(100),
    shadowColor: AppColors.gray,
    shadowOffset: {width: 0, height: 3.5},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width(3),
  },
  fixedContainer: {
    height: height(6.5),
    backgroundColor: AppColors.transparent,
    width: width(100),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(4),
  },
  titleContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    color: AppColors.black,
    fontSize: width(4.9),
    fontFamily: Fonts.Pacifo,
    fontWeight: 'normal'
  },
  cornerContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCorner: {
    paddingHorizontal: width(1),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  upload: {
    height: height(4.5),
    width: height(4.5),
    borderRadius: height(2.25),
    backgroundColor: AppColors.seaBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: AppColors.red,
    height: height(2),
    width: height(2),
    borderRadius: height(1),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: height(1.5),
    zIndex: 1,
    right: -width(1),
  },
  badgeText: {
    color: AppColors.white,
    fontSize: width(2),
    fontWeight: 'bold',
  },
});
export default styles;
