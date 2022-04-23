import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { height, width } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        elevation: 2,
        flexDirection: 'row',
        width: width(85),
        paddingVertical: height(1.5),
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: width(4),
        paddingLeft: width(5),
        borderRadius: width(2)
    },
    text: {
        flex: 1,
        fontSize: width(3.9),
        fontWeight: 'bold'
    },
    dropDownContainer: {
        backgroundColor: AppColors.white,
        elevation: 2,
        marginLeft: width(4),
        maxHeight: height(25),
        borderBottomRightRadius: width(2),
        borderBottomLeftRadius: width(2),
        backgroundColor: AppColors.white,
        overflow: 'hidden'

    },
    dropText: {
        fontSize: width(3.5),
        paddingHorizontal: width(4)
    },
    cityRow: {
        width: width(80),
        paddingLeft: width(3),
        maxHeight: height(25),

        backgroundColor: AppColors.white
    },
    cityText: {
        paddingVertical: height(1.5)
    },
    searchContainer: {
        height: height(5),
        width: width(80),
    },
    searchInput: {
        height: height(5),
        width: width(80),
        backgroundColor: 'red'
    }
});
export default styles;
