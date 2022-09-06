import React from 'react'
import { iconUrlFromCode } from '../services/weather';

function Forecast({title, items}) {
  return (
    <div>
    <div className="flex items-center justify-start mt-5">
        <p className="text-white font-large text-xl uppercase">
            {title}
        </p>
    </div>
    <hr className="my-1"/>
    <div className="flex flex-row items-center justify-between text-white">
    {items.map((item) => (
           <div className="flex flex-col items-center justify-center">
            <p className="font-md text-lg">
               {item.event}
           </p>
           <p className="font-md text-lg">
               {item.title}
           </p>
           <img src={iconUrlFromCode(item.icon)}
           alt="" className="w-13 my-1"
           />
           <p className="font-md text-lg">{`${item.temp.toFixed()}`}&deg;</p>
           <p className="font-md text-lg capitalize">{`${item.text}`}</p>
           <p>P.O.P.</p>
           <p className="font-md text-lg">{`${item.pop.toFixed(1) * 100}`}%</p> 
           
           
   </div>  
    ))}
    {/* <div className="flex flex-col items-center justify-center">
        
            <p className="font-light text-sm">
                01:00 PM
            </p>
            <img src="http://openweathermap.org/img/wn/09d@2x.png"
            alt="" className="w-12 my-1"/>
            <p className="font-medium">13 &deg;</p>
            
    </div>
    <div className="flex flex-col items-center justify-center">

<p className="font-light text-sm">
    02:00 PM
</p>
<img src="http://openweathermap.org/img/wn/09d@2x.png"
alt="" className="w-12 my-1"/>
<p className="font-medium">13 &deg;</p>

</div>
<div className="flex flex-col items-center justify-center">

            <p className="font-light text-sm">
                03:00 PM
            </p>
            <img src="http://openweathermap.org/img/wn/09d@2x.png"
            alt="" className="w-12 my-1"/>
            <p className="font-medium">12 &deg;</p>
            
    </div>
    <div className="flex flex-col items-center justify-center">

            <p className="font-light text-sm">
                04:00 PM
            </p>
            <img src="http://openweathermap.org/img/wn/09d@2x.png"
            alt="" className="w-12 my-1"/>
            <p className="font-medium">13 &deg;</p>
            
    </div>
    <div className="flex flex-col items-center justify-center">

            <p className="font-light text-sm">
                05:00 PM
            </p>
            <img src="http://openweathermap.org/img/wn/09d@2x.png"
            alt="" className="w-12 my-1"/>
            <p className="font-medium">13 &deg;</p>
            
    </div> */}
    </div>
    </div>
  )
}

export default Forecast;