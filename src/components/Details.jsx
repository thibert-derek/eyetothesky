import React from 'react'
import {
    UilCloud,
    UilDashboard,
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
import "@fortawesome/fontawesome-free";
import { formatToLocalTime, iconUrlFromCode } from '../services/weather';

function Details({weather: {
   description, icon, temp, temp_min, temp_max, sunrise, sunset,
   speed, humidity, feels_like, timezone, unit, pressure, all
}}) {

    const windUnit = unit === 'metric' ? 'mph' : 'km/h';
  return (
    <div>
        <div className="flex items-center justify-center py-3 text-3xl
        text-white capitalize">
            <p>{description}</p>
            
        </div>
        <div className="flex flex-row items-center
        justify-between text-white py-3">
            <img 
            src={iconUrlFromCode(icon)}
            alt="" className="w-35"/>
            <p className="text-8xl">
                {`${temp.toFixed()}`}&deg;
            </p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-xl
                items-center justify-center">
                    <UilTemperature size={20} className="mr-1"/>
                    Feels Like:
                <span className="font-medium ml-1">{`${feels_like.toFixed()}`}&deg;</span>
                </div>
                <div className="flex font-light text-xl
                items-center justify-center">
                    <UilDashboard size={20} className="mr-1"/>
                    Pressure:
                <span className="font-medium ml-1">{`${pressure.toFixed()}`} hPa</span>
                </div>
                <div className="flex font-light text-xl
                items-center justify-center">
                    <UilTear size={20} className="mr-1"/>
                    Humidity:
                <span className="font-medium ml-1">{`${humidity.toFixed()}`}%</span>
                </div>
                <div className="flex font-light text-xl
                items-center justify-center">
                    <UilWind size={20} className="mr-1"/>
                    Wind:
                <span className="font-medium ml-1">{`${speed.toFixed()} ${windUnit}`}</span>
                </div>
                <div className="flex font-light text-xl
                items-center justify-center">
                    <UilCloud size={20} className="mr-1"/>
                    Cloud Cover:
                <span className="font-medium ml-1">{`${all}`}%</span>
                </div>
            </div>
        </div>

        <div className="flex flex-row items-center justify-center
        space-x-2 text-white text-xl py-3">
            <UilSun size={30} className="mr-1"/>
            <p className="font-light">Sunrise: <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}</span></p>
            <p className="font-light">|</p>
            <UilSunset size={30} className="mr-1"/>
            <p className="font-light">Sunset: <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}</span></p>
            <p className="font-light">|</p>
            <UilArrowUp size={30} className="mr-1"/>
            <p className="font-light">High: <span className="font-medium ml-1">{`${temp_max.toFixed()}`}&deg;</span></p>
            <p className="font-light">|</p>
            <UilArrowDown size={30} className="mr-1"/>
            <p className="font-light">Low: <span className="font-medium ml-1">{`${temp_min.toFixed()}`}&deg;</span></p>
        
        </div>

    </div>
  );
}

export default Details;