export const InputCity = ({onInputHandler, onSubmitHandler, city}) => {
    //Need a search box input to write the name of the city I want to get weather data from 
   
    return (
        <div className='input'>
           <input 
            type='text' 
            placeholder='Enter a city'
            value={city}
            onChange= {onInputHandler}
           />
           <button 
            className= 'input_btn'
            type='submit' 
            onClick={onSubmitHandler}>
            Search
           </button>
        </div>
    )
}