import React, {useState} from 'react';
import { UilSearch, UilLocationPoint} from '@iconscout/react-unicons';

function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState("");

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if(units !== selectedUnit) setUnits(selectedUnit);
  }

  const handleSearchClick = () => {
    if (city !== '') setQuery({q: city})
  };

  const handleLocationClick = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat, lon
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">

        <input 
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type="text" 
        placeholder="Search for city...."
        className="text-xl font-light p-2 p=2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch 
        size={30} 
        className="text-white cursor-pointer transition ease-out hover:scale-125"
        onClick={handleSearchClick}
        />
        
        <UilLocationPoint 
        size={30} 
        className="text-white cursor-pointer transition ease-out hover:scale-125"
        onClick={handleLocationClick}/>
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button name="metric" className="text-2xl text-white font-md transition ease-out hover:scale-125"
          onClick={handleUnitChange}>&deg;C</button>
          <p className="text-xl text-white mx-1"> | </p>
          <button name="imperial" className="text-2xl text-white font-md transition ease-out hover:scale-125"
          onClick={handleUnitChange}>&deg;F</button>
        </div>
    </div>
  );
}

export default Inputs;