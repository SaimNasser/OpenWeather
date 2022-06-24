import moment from 'moment';
import React from 'react';
import {
    Image, Text, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '../../utills/AppColors';
import { capitalizeFirst } from '../../utills/Methods';
import styles from './styles';
const WeatherCard = ({
    item
}) => {
    const Seperator = () => (
        <LinearGradient
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            colors={[AppColors.darkGrey, AppColors.darkGrey, AppColors.white]}
            style={styles.linearGradient}
        />
    )
    return (
        <View style={styles.container}>
            <Image source={{ uri: item?.imgUrl }} style={styles.icon} />
            <Text style={styles.time}>{moment(item?.time, 'hh:mm').format('h:mm')}</Text>
            <Text style={styles.time}>{moment(item?.date, 'DD-MM-YYYY').format('Do MMMM YY')}</Text>
            <Text style={styles.description}>{capitalizeFirst(item?.description)}</Text>
            <Seperator />
            <View style={styles.row}>
                <View style={styles.tempContainer}>
                    <Text style={styles.feelsLikeVal}>{item?.temperature} C°</Text>
                    <Text style={styles.feelsLikeLabel}>Temperature</Text>
                </View>
                <View style={styles.tempContainer}>
                    <Text style={styles.feelsLikeVal}>{item?.feelsLike} C°</Text>
                    <Text style={styles.feelsLikeLabel}>Feels Like</Text>
                </View>
            </View>
        </View>
    );
};
export default WeatherCard;
