import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Details from './components/Details';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weather';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({q: ''})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async() => {
          await getFormattedWeatherData({...query, units }).then(data =>
           {
            setWeather(data);
           } );
          
        };
      
      fetchWeather();
  }, [query, units])

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 25 : 77;
    const freeze = units === "metric" ? 5 : 40;
    if (weather.temp >= threshold) return "from-yellow-700 to-red-700";

    else if(weather.temp <= freeze) return "from-purple-700 to-blue-700";

    return "from-cyan-700 to-blue-700";
  };

  // const fetchWeather = async() => {
  //   const data = await getFormattedWeatherData({q: 'london'});
  //   console.log(data);
  // };

// fetchWeather();

  return (
    <div className= {`mx-auto max-w-screen-xl py-5 px-20 bg-gradient-to-br ${formatBackground()} h-fit shadow-xl-700`} >
      <h1 className="flex items-center justify-center py-1 text-3xl
        text-white font-md">Eye To The Sky</h1>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

    {weather && (
      <div>
      <TimeAndLocation weather={weather}/>
      <Details weather={weather}/>
      <Forecast title="Hourly Forecast" items={weather.hourly}/>
      <Forecast title="Daily Forecast" items={weather.daily}/>
      </div>
  )}
  <div className="flex items-center justify-center py-6 text-white">&copy; 2022</div>
    </div>
  );
}

export default App;
