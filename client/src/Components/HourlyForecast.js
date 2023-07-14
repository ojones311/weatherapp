import {useState, useEffect} from 'react'
import { LineChart, Line } from 'recharts';

export const HourlyForecast = ({data}) => {

    const longitude = data.coord ? data.coord.lon : null;
    const latitude = data.coord ? data.coord.lat : null;

    const [hourlyForecast, setHourlyForecast] = useState([])
    const [ error, setError ] = useState(false)

    //data.dt_text
    useEffect(()=> {
        if(latitude && longitude){
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=8&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then((response) => response.json())
            .then((data)=> {
                console.log(data)
                setHourlyForecast(data)
            })
            .catch((error)=> {
                setError(true)
                console.log(error.message)
            })
        }
    }, [latitude,longitude])

    
    return (
        <div>
            <div>
                <h3>Hourly Forecast</h3>
                {hourlyForecast.length > 0 && 
                    <LineChart
                        width={400}
                        height={400}
                        data={''}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}> 


                    </LineChart>
                }
                
            </div>
        </div>
    )
}