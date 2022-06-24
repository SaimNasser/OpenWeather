import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseUrl } from './Config'
import { API_KEY } from 'react-native-dotenv'

// Define a service using a base URL and expected endpoints
export const openWeatherApi = createApi({
    reducerPath: 'openWeatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
    endpoints: (builder) => ({
        getCityWeather: builder.query({
            query: (args) => {
                const { lat, lon } = args
                return {
                    url: 'forecast/',
                    params: { lat, lon, appid: API_KEY },
                    method: 'POST'
                }
            }
        }),
    }),
})

export const { useGetCityWeatherQuery } = openWeatherApi 