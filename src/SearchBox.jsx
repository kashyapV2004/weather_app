import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");

    const api_url = "https://api.openweathermap.org/data/2.5/weather";
    const api_key = "100a9a57e6d73639a8f628ca2809e833";

    let getWeatherInfo = async () =>{
        let res = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
        let resJson = await res.json();
        console.log(resJson);
        let result = {
            city : city,
            temp : resJson.main.temp,
            temp_max : resJson.main.temp_max,
            temp_min : resJson.main.temp_min,
            feels_like : resJson.main.feels_like,
            grnd_level : resJson.main.grnd_level,
            humidity : resJson.main.humidity,
            pressure : resJson.main.pressure,
            sea_level : resJson.main.sea_level,
            weather_description : resJson.weather[0].description
        }
        console.log(result);
        return result;
    }

    let handleChange = (event) =>{
        setCity(event.target.value);
    };
    let handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }
    return (
        <>
        <form onSubmit={handleSubmit} action="">
             <TextField id="city" label="City Name" 
             variant="outlined" value={city}required
             onChange={handleChange}/>
             <br></br>
             <br></br>
             <Button variant="contained" type='sumbmit' 
             size='large'>
                Search
            </Button>
        </form>
        </>
    )
}