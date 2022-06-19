import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';
export const WeatherLoader = ({

}) => {
    return (
        <SkeletonPlaceholder >
            <View style={styles.container}>
                <View style={styles.card} />
                <View style={styles.card} />
                <View style={styles.card} />
            </View>
        </SkeletonPlaceholder>
    );
}
export const ChartLoader = ({

}) => {
    return (
        <SkeletonPlaceholder>
            <View style={styles.chartContainer} />
        </SkeletonPlaceholder>
    );
}
export const ButtonLoader = ({

}) => {
    return (
        <SkeletonPlaceholder>
            <View style={styles.btnContainer} />
        </SkeletonPlaceholder>
    );
}

