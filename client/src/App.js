import './App.css';
import { Header } from './Components/Header';
import { InputCity } from './Components/InputCity';
import { ShowWeather } from './Components/ShowWeather';

function App() {
  return (
    <div className="App">
      <Header /> 
      <InputCity />
      <ShowWeather />
    </div>
  );
}

export default App;
