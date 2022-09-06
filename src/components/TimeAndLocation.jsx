import React from 'react'
import { formatToLocalTime } from '../services/weather';

function TimeAndLocation({weather: {dt, timezone, name, country}}) {
  return (
    <div>
    <div className="flex items-center justify-center my-6">
        <p className="text-white text-2xl font-light">
        {formatToLocalTime(dt, timezone)}
        </p>
    </div>

    <div className="flex items-center justify-center my-3">
        <p className="text-white text-5xl font-medium">
            {`${name}, ${country}`}
        </p>
    </div>
    </div>
  )
}

export default TimeAndLocation;