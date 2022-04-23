import { showMessage } from "react-native-flash-message";
import { getRefinedWeatherList } from "../utills/Methods";
import { ApiManager } from "./ApiManager";

export const getCityWeather = async (lat, lon) => {
    try {
        const response = await ApiManager.get('http://api.openweathermap.org/data/2.5/forecast/', {
            lat,
            lon,
            appid: '1082014753ca969ee676e1d5004b42b0'
        })
        if (response?.data?.cod == '200') {
            let rawList = response?.data?.list
            return getRefinedWeatherList(rawList)
        } else {
    return false
            showMessage({
                message: 'Something went wrong!',
                type: 'danger'
            })
        }
    } catch (error) {
        console.log(error);
    }
}