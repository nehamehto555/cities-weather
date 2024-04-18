import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { ThemeProvider } from '@emotion/react';

export default function SearchBox({updateInfo}){
let[city, setCity]=useState('');
let[error, setError]=useState(false)

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY="bd9216b8d85e8c5889e81c03fb061bbe";

let getWeatherInfo= async()=>{
  try{  
 let response =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`
);
  let jsonResponse=await response.json();
  
  let result={
    city: city,
temp: jsonResponse.main.temp,
tempMin: jsonResponse.main.temp_min,
tempMax: jsonResponse.main.temp_max,
humidity: jsonResponse.main.humidity,
feels_like: jsonResponse.main.feels_like,
weather: jsonResponse.weather[0].description,

  };
  console.log(result);
  return result;
}catch(err){
 throw err;  
}
};
 let handleChange=(evt)=>{
    setCity(evt.target.value);
};
  let handleSubmit = async(evt)=>{
    try{
        evt.preventDefault();
    console.log(city);
    setCity('');
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }catch(err){
        setError(true)
    }
 };
    return(
        <div className='SearchBox'>
            {/* <h2><b>Search For Weather</b></h2> */}

           <form  onSubmit={handleSubmit}>
           <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange}  value={city} />
          &nbsp; &nbsp;
          <br /><br />
           <Button  size='medium'variant="contained"  type='submit' >
           Search
          </Button>
          {error&& <p style={{color:'red'}}> No such place exists</p>}
            </form> 
        </div>
    )
}