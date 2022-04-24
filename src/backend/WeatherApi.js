import { showMessage } from "react-native-flash-message";
import { getRefinedWeatherList } from "../utills/Methods";
import { ApiManager } from "./ApiManager";
import { API_KEY } from '@env'
import axios from 'axios';
import { BaseUrl } from './Config';
axios.defaults.baseURL = BaseUrl;

export const getCityWeather = async (lat, lon) => {
    try {
        const response = await axios.get('forecast/', {
            params: {
                lat,
                lon,
                appid: API_KEY
            }
        })
        if (response?.data?.cod == '200') {
            let rawList = response?.data?.list
            return getRefinedWeatherList(rawList)
        } else {
            showMessage({
                message: 'Something went wrong!',
                type: 'danger'
            })
            return false
        }
    } catch (error) {
        console.log(error);
    }
}