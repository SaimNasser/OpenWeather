import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
    container: {
        // width: width(45),
        elevation: 3,
        backgroundColor: AppColors.white,
        borderRadius: width(3),
        marginRight: width(2),
        paddingHorizontal: width(4),
        paddingBottom: height(3),
        paddingTop: height(1)
    },
    icon: {
        height: height(10),
        width: height(10),
        alignSelf: 'center'
    },
    time: {
        color: AppColors.darkGrey,
        alignSelf: 'center',
        fontSize: width(3.7),
        textAlign: 'center',
        marginBottom: height(0.25)
    },
    description: {
        color: AppColors.darkGrey,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: width(4),
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: width(50),
    },
    tempContainer: {
    },
    feelsLikeVal: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: width(5.5)
    },
    feelsLikeLabel: {
        marginTop: height(0.5),
        textAlign: 'center'
    },
    linearGradient: {
        height: height(0.2),
        width: '90%',
        alignSelf: 'center',
        marginVertical: height(1.9)
    },

});
export default styles;
