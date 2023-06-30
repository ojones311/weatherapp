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

export {
    getParameterNames,
    kelvinToFahrenheit,
    kelvinToCelsius
}