import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseUrl } from './Config'
import Config from 'react-native-config'
import type { Coords } from '../utills/Types'
const { API_KEY } = Config
// Define a service using a base URL and expected endpoints
export const openWeatherApi = createApi({
    reducerPath: 'openWeatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
    endpoints: (builder) => ({
        getCityWeather: builder.query<any, Coords>({
            query: (args: Coords) => {
                const { lat, lon } = args
                return {
                    url: 'forecast/',
                    params: { lat, lon, appid: API_KEY },
                    method: 'POST'
                }
            },
            // transformResponse: (response, meta, arg) => response.list
        }),
    }),
})

export const { useGetCityWeatherQuery } = openWeatherApi 