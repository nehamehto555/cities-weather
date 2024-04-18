 import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeaterApp(){
    const [weatherInfo,setWeatherInfo]= useState({
        city:"Mumbai",
        feels_like: 305.37,
        humidity: 23,
        temp: 307.1,
        tempMax: 307.2,
        tempMin: 120.1,
        weather: 'haze' 

    });
let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
}

    return(
        <div style={{textAlign:'center'}}>
            <h3 style={{color:'peru'}}>
             Search your city for <i> WEATHER INFORMATION</i> 
            </h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}