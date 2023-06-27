import './App.css';
import {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'

import { Header } from './Components/Header';
import { InputCity } from './Components/InputCity';
import { ShowWeather } from './Components/ShowWeather';

function App() {

  const [inputCity, setInputCity] = useState('')
  const [cityName, setCityName] = useState('')
  const { setError } = useForm()
  useEffect(()=> {
    //make api call to get weather data
  }, [])
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
      <ShowWeather />
    </div>
  );
}

export default App;
