import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState(
        { 
        city : "Delhi",
        feels_like : 40.04,
        grnd_level : 974,
        humidity : 65,
        pressure : 999,
        sea_level : 999,
        temp : 33.04,
        temp_max : 33.04,
        temp_min : 33.04,
        weather_description : "overcast clouds"
      }
    );

    let updateInfo = (res)=>{
        setWeatherInfo(res);
    }
    return (
        <div>
            <h2>Weather Information</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}