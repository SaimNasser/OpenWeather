import moment from "moment";

export function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//Filter and manipulte data from api
export const getRefinedWeatherList = (rawList) => {
    return rawList?.map((weatherObj) => {
        const desc = weatherObj?.weather[0]?.description
        let day = moment(weatherObj?.dt_txt, 'YYYY-MM-DD hh:mm').format('dddd')
        return {
            temperature: (Number(weatherObj?.main?.temp) - 273.15).toFixed(1),
            feelsLike: (Number(weatherObj?.main?.feels_like) - 273.15).toFixed(1),
            description: desc && desc != '' ? desc : '-',
            date: moment(weatherObj?.dt_txt, 'YYYY-MM-DD hh:mm').format('DD-MM-YYYY'),
            time: moment(weatherObj?.dt_txt, 'YYYY-MM-DD hh:mm').format('hh:mm'),
            imgUrl: `https://openweathermap.org/img/wn/${weatherObj?.weather[0]?.icon}@2x.png`,
            day
        }
    })
}

export const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}