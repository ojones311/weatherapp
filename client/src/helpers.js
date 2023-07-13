
//takes in a function and returns an array of parameter names
function getParameterNames(fn){
    let stringifiedFunct = fn.toString()
    let parameterNames = stringifiedFunct.replace(/[/] [/].*$/mg,'')
         .replace(/\s+/g, '')
         .replace(/[/][*][^/*]*[*][/]/g, '')
         .split('){', 1)[0]
         .replace(/^[^(]*[(]/, '')
         .replace(/=[^,]+/g, '')
         .split(',').filter(Boolean); 
    
    return parameterNames
}

//takes in temperature in Kelvin and returns it in Fahrenheit
function kelvinToFahrenheit(temperature){
    //Fahrenheit equation (K − 273.15) × 9/5 + 32 = °F
    temperature = Math.round((temperature - 273.15) * 9/5 + 32)
    return temperature
}

//takes in temperature in Kelvin and returns it in Celsius
function kelvinToCelsius(temperature){
    // Celsius equation C = K – 273.15
    temperature = Math.round(temperature - 273.15)
    return temperature
}

function metersPerSecondToMilesPerHour(speed){
    // speed = speed * 2.237
    speed = speed * 2.237
    return speed
}


function getTime(time, timeZone){
    let unixTimeStamp = time + timeZone
    let date = new Date(unixTimeStamp * 1000)
    let utcString = date.toUTCString()
    return utcString.slice(0, utcString.length - 4)
}

//grabbed this from online ggs
function calculateDirectionFromDegrees (i) {
    if(i >= 348.75 || i < 11.25){
            return +i + " ° N";
    } else if (i >= 11.25 && i < 33.75) {
            return +i + " ° NNE";
    } else if (i >= 33.75 && i < 56.25) {
            return +i + " ° NE";
    } else if (i >= 56.25 && i < 78.75) {
            return +i + " ° ENE";
    } else if (i >= 78.25 && i < 101.25) {
            return +i + " ° E";
    } else if (i >= 101.25 && i < 123.75){ 
            return +i + " ° ESE";
    } else if (i >= 123.75 && i < 146.25) {
            return +i + " ° SE";
    } else if (i >= 146.25 && i < 168.75) {
            return +i + " ° SSE";
    } else if (i >= 168.75 && i < 191.25) {
            return +i + " ° S";
    } else if (i >= 191.25 && i < 213.75) {
            return +i + " ° SSW";
    } else if (i >= 213.75 && i < 236.25) {
            return +i + " ° SW";
    } else if (i >= 236.25 && i < 258.75) {
            return +i + " ° WSW";
    } else if (i >= 258.75 && i < 281.25) {
            return +i + " ° W";
    } else if (i >= 281.25 && i < 303.75) {
            return +i + " ° WNW";
    } else if (i >= 303.75 && i < 326.25) {
            return +i + " ° NW";
    } else if (i >= 326.25 && i < 348.75) {
            return +i + " ° NNW";
    }
}

export {
    getParameterNames,
    getTime,
    kelvinToFahrenheit,
    kelvinToCelsius,
    metersPerSecondToMilesPerHour,
    calculateDirectionFromDegrees,
}