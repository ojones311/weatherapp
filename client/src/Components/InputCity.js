
export const InputCity = ({onSubmitHandler, city, onInputHandler, }) => {
    //Need a search box input to write the name of the city I want to get weather data from 
    // Need a search button to initialize the API call


    return (
        <div className='input'>
           <input 
            type='text' 
            placeholder='Enter a city'
            value={city}
            onChange= {onInputHandler}
           />
           <button 
           type='submit' 
           onClick={onSubmitHandler}>
            Search
           </button>
        </div>
    )
}