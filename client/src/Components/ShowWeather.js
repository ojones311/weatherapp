import {useState, useEffect} from 'react'
import { calculateDirectionFromDegrees, getParameterNames, getTime, kelvinToFahrenheit, kelvinToCelsius} from '../helpers';

export const ShowWeather = ({data}) => {

    const city = data.name;
    const country = data.sys ? data.sys.country : null;
    const icon = data.weather ? data.weather[0].icon : null;
    const descriptor = data.weather ? data.weather[0].main : null;
    const moreInfoDescription = data.weather ? data.weather[0].description : null

    const temperature = data.main ? data.main.temp : null;
    const temp_min = data.main ? data.main.temp_min : null;
    const temp_max = data.main ? data.main.temp_max : null;

    const pressure = data.main ? data.main.pressure : null;
    const visibility =  data ? data.visibility : null;
    const humidity = data.main ? data.main.humidity : null;
    const clouds =  data.clouds ? data.clouds.all : null;
    const wind = data.wind ? data.wind.speed : null;
    const windDirection = data.wind ? data.wind.deg : null;

    const longitude = data.coord ? data.coord.lon : null;
    const latitude = data.coord ? data.coord.lat : null;
    const time = data.dt ? data.dt : null;
    const timeZone = data.timezone ? data.timezone : null;

    const [temperatureData, setTemperatureData] = useState({})
   
    const coordinateBearingMatcher = (measurement, degrees) => {
    
        let coordinate = ''
        degrees = Math.abs(parseFloat(degrees).toFixed(2))
    
        if(degrees < 0 && measurement === 'longitude'){
            coordinate = degrees.toString() + 'W'
        }else if (degrees > 0 && measurement === 'longitude'){
            coordinate = degrees.toString() + 'E'
        }else if(degrees < 0 && measurement === 'latitude'){
            coordinate = degrees.toString() + 'S'
        }else if(degrees > 0 && measurement === 'latitude'){
            coordinate = degrees.toString() + 'N'
        }else if (degrees === 0){
            coordinate = 0
        }

        return coordinate
    }
 
    useEffect(() => {
        function populateTempsData(temperature, temp_min, temp_max){
        
            let parameterArr = getParameterNames(populateTempsData)
            const tempsData = {}

            //matches parameter name to arguments iteratable; arguments index to parameterArr index
            //potential for bug if you change parameter names from corresponding vars on lines 11-13
            for (const arg in arguments){
                // temperature                       //300
                tempsData[parameterArr[arg]] = arguments[arg]
            }
            
            setTemperatureData(tempsData)
        }
        
        populateTempsData(temperature, temp_min, temp_max)
        
       
    
    },[temperature, temp_min, temp_max])

    return (
        <div className='card-container'>
            {temperature && 
                <div>
                    <div className='weather'>
                        <p>{"Last Updated: "}{getTime(time, timeZone)}</p>
                        <img alt={icon} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                        <h3>{city}{', '}{country}</h3>
                        <h4>{descriptor}{', '}{moreInfoDescription}</h4>
                            <table className='temps'>
                                <tbody>
                                    <tr>
                                        <td>{kelvinToFahrenheit(temperature)}{'°F'}</td>
                                        <td>{kelvinToCelsius(temperature)}{'°C'}</td>
                                    </tr>
                                </tbody>
                            </table>
                    
                        
                    </div>
                    
                    <div className='weather-icon'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{'Humidity: '}{humidity}{' %'}</td>
                                    <td>{'Clouds: '}{clouds}{' %'}</td>  
                                </tr>
                                <tr>
                                    <td>{'Visibility: '}{visibility}{' meters'}</td>
                                    <td>{'Wind: '}{wind}{' mph || '}{calculateDirectionFromDegrees(windDirection)}</td>
                                </tr>
                                <tr>
                                    <td>{'Pressure: '}{pressure}{' hPa'}</td>
                                    <td>
                                        {coordinateBearingMatcher('latitude',latitude)}
                                        {', '}{coordinateBearingMatcher('longitude',longitude)}
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                    <div className='info-table'>
                    
                    </div>
                </div>
        }
        </div>                     
    )
}