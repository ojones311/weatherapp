
export const ShowWeather = ({data}) => {

    const city = data.name;
    const country = data.sys ? data.sys.country : null;
    const descriptor = data.weather ? data.weather[0].main : null;
    const temperature = data.main ? data.main.temp : null;
    const pressure = data.main ? data.main.pressure : null;
    const visibility =  data ? data.visibility : null;
    const humidity = data.main ? data.main.humidity : null;
    const clouds =  data.clouds ? data.clouds.all : null;
    const icon = data.weather ? data.weather[0].icon : null;
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

    const temperatureConverter = (temp) => {

    }
    return (
        <div className='card-container'>
            <div className='weather'>
                <h4>Current weather conditions at:</h4>
                <h3>{city}</h3>
                <h3>{country}</h3>
                <p>{coordinateBearingMatcher('latitude',latitude)}</p>
                <p>{coordinateBearingMatcher('longitude',longitude)}</p>
                <h4>{temperature}</h4>
            </div>
            <div className='weather-icon'>
                <table>
                    <tbody>
                        <tr>
                            <td>{descriptor}</td>
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