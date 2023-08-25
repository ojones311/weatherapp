import {useState, useEffect} from 'react'
import { LineChart, Line } from 'recharts';

export const HourlyForecast = ({data}) => {

    const longitude = data.coord ? data.coord.lon : null;
    const latitude = data.coord ? data.coord.lat : null;

    const [hourlyForecast, setHourlyForecast] = useState([])
    const [hourlyTempsForLineChart, setHourlyTempsForLineChart] = useState([])
    const [ error, setError ] = useState(false)

    //data.dt_text
    useEffect(()=> {
        if(latitude && longitude){
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=8&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then((response) => response.json())
            .then((data)=> {
                console.log(data)
                setHourlyForecast(data.list)
                console.log(data.list[0].main.temp)
            })
            .catch((error)=> {
                setError(true)
                console.log(error.message)
            })
        }
    }, [latitude,longitude])

    useEffect(() => {
        function extractHourlyForecastWeatherTemps(hourlyForecast){
            const weatherTemps = []
    
            hourlyForecast.forEach(tempData => weatherTemps.push(tempData.main.temp))
            console.log(weatherTemps)
            setHourlyTempsForLineChart(weatherTemps)
    
            //need to make sure the function is called when the page is loaded but after the request is made to openweather api       //maybe a useeffect 
        }
        extractHourlyForecastWeatherTemps(hourlyForecast)
    },[hourlyForecast])
    
    
    return (
        <div>
            <div>
                <h3>Hourly Forecast</h3>
                {hourlyForecast.length > 0 && 
                    <LineChart
                        width={400}
                        height={400}
                        data={hourlyForecast}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}> 
                        <Line type="monotone" dataKey="main" stroke="#8884d8" />
                    </LineChart>
                }
                
            </div>
        </div>
    )
}