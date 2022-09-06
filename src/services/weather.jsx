import {DateTime} from "luxon"

const API_KEY = ''
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData=(infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:
        API_KEY});
    
    return fetch(url)
        .then((res) => res.json())

};

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity, pressure},
        name,
        dt,
        sys: {country, sunrise, sunset},
        clouds: {all},
        weather,
        wind: {speed}
    } = data

    const {main: details, description, icon} = weather[0]

    return {lat, lon, temp, feels_like,
        temp_min, temp_max, humidity, pressure, 
        name, dt, country, sunrise,
        sunset, all, details, description, icon, weather, speed}
}

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc LLL d'),
            temp: d.temp.day,
            icon: d.weather[0].icon,
            text: d.weather[0].description,
            pop: d.pop
        }
    });

    hourly = hourly.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon,
            text: d.weather[0].description,
            pop: d.pop
        }
    });

    // alert = alert.slice(1,6).map(d => {
    //     return {
    //         name: d.sender_name,
    //         event: d.event
    //     }
    // });
    return {timezone, daily, hourly};
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        'weather', 
        searchParams
        ).then(formatCurrentWeather);

        const {lat, lon} = formattedCurrentWeather

        const formattedForecastWeather = await getWeatherData('onecall', {
            lat,
            lon, 
            exlude: 'current,minutely', 
            units: searchParams.units,
        }).then(formatForecastWeather)

        return {...formattedCurrentWeather, ...formattedForecastWeather};
};

const formatToLocalTime = (
    secs, 
    zone, 
    format = `ccc LLLL d, yyyy' | ${zone} Time: 'hh:mm a`
    ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export {formatToLocalTime, iconUrlFromCode};