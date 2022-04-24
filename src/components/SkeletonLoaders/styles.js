import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { height, width } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: height(2),
        paddingHorizontal: width(4),
    },
    card: {
        height: height(35),
        width: width(54),
        borderRadius: width(3),
        marginRight: width(2),
    },
    chartContainer: {
        height: height(32),
        width: width(90),
        borderRadius: width(2),
        alignSelf: 'center'
    },
    btnContainer: {

    }
});
export default styles;
