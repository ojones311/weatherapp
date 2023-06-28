
export const ShowWeather = ({data}) => {

    const city = data.name;
    const country = data.sys ? data.sys.country : null;
    const icon = data.weather ? data.weather[0].icon : null;
    const descriptor = data.weather ? data.weather[0].main : null;

    const temperature = data.main ? data.main.temp : null;
    const temp_min = data.main ? data.main.temp_min : null;
    const temp_max = data.main ? data.main.temp_max : null;

    const pressure = data.main ? data.main.pressure : null;
    const visibility =  data ? data.visibility : null;
    const humidity = data.main ? data.main.humidity : null;
    const clouds =  data.clouds ? data.clouds.all : null;
    const wind = data.wind ? data.wind.speed : null;

    const longitude = data.coord ? data.coord.lon : null;
    const latitude = data.coord ? data.coord.lat : null;


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

    const kelvinToFahrenheit = (temp) => {
        //Fahrenheit equation (K − 273.15) × 9/5 + 32 = °F
        if (temp){
            temp = Math.round((temp - 273.15) * 9/5 + 32)
        }
        
        return temp
    }

    const kelvinToCelsius = (temp) => {
        //Celsius equation C = K – 273.15
        temp = Math.round(temp - 273.15)
        return temp
    }

    return (
        <div className='card-container'>
            <div className='weather'>
                <h4>Current weather conditions at:</h4>
                <h3>{city}</h3>
                <h3>{country}</h3>
                <p>{coordinateBearingMatcher('latitude',latitude)}</p>
                <p>{coordinateBearingMatcher('longitude',longitude)}</p>
                <h3>{descriptor}</h3>
                
                {   temperature && 
                    <div>
                        <h4>{kelvinToFahrenheit(temperature)}{'°F'}</h4>
                        <h4>{kelvinToCelsius(temperature)}{'°C'}</h4>
                    </div>
                }
            </div>
            
            <div className='weather-icon'>
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
            <div className='info-table'>
            
            </div>
        </div>
    )
}