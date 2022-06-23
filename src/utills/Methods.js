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
export const getRefinedWeatherList = (rawList, day) => {
    let list = []
    let dayArray = []
    let timeAxis = []
    let temperatureAxis = []
    rawList?.forEach((weatherObj) => {
        const desc = weatherObj?.weather[0]?.description
        let dayFormat = moment(weatherObj?.dt_txt, 'YYYY-MM-DD hh:mm').format('dddd')
        const item = {
            temperature: (Number(weatherObj?.main?.temp) - 273.15).toFixed(1),
            feelsLike: (Number(weatherObj?.main?.feels_like) - 273.15).toFixed(1),
            description: desc && desc != '' ? desc : '-',
            date: moment(weatherObj?.dt_txt, 'YYYY-MM-DD hh:mm').format('DD-MM-YYYY'),
            time: moment(weatherObj?.dt_txt, 'YYYY-MM-DD hh:mm').format('hh:mm'),
            imgUrl: `https://openweathermap.org/img/wn/${weatherObj?.weather[0]?.icon}@2x.png`,
            day: dayFormat
        }
        if (item?.day == day?.name) {
            dayArray.push(item)
            timeAxis.push(item?.time)
            temperatureAxis.push(Number(item?.temperature))
        }
    })
    const chartData = {
        labels: timeAxis,
        datasets: [
            {
                data: temperatureAxis,
                strokeWidth: 2
            }
        ],
    };
    return { chartData, dayArray }
}

export const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
