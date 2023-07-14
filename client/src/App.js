import './App.css';
import {useState, useEffect} from 'react'
// import { useForm } from 'react-hook-form'

import { Header } from './Components/Header';
import { InputCity } from './Components/InputCity';
import { ShowWeather } from './Components/ShowWeather';
import { HourlyForecast } from './Components/HourlyForecast';
import { WeatherMap } from './Components/WeatherMap'

function App() {

  const [inputCity, setInputCity] = useState('')
  const [cityName, setCityName] = useState('')
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false)

 
  useEffect(()=> {
    //make api call to get weather data
    if (cityName !== '') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setWeatherData(data)
      })
      .catch((error)=> {
        setError(true)
        console.log(error.message)
      })
    }
    
  }, [cityName])

  const onInputHandler = (event) => {
    setInputCity(event.target.value)
    console.log(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError(false)
    setCityName(inputCity)
    setInputCity('')
    console.log('Button pressed')
  }
  return (
    <div className="App">
      <Header /> 
      <InputCity
        city={inputCity}
        onInputHandler={onInputHandler}
        onSubmitHandler={onSubmitHandler}
      />
      <ShowWeather 
        data={weatherData}
      />
      <HourlyForecast 
        data={weatherData}
      />
      <WeatherMap />
    </div>
  );
}

export default App;
