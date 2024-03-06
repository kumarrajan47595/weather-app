import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';


export default function Weather({ updateinfo }) {
    let [city, setcity] = useState("");
    let [error,seterror]=useState(false);
    const api = "https://api.openweathermap.org/data/2.5/weather";
    const apikey = "0e8c4976107e411336417ff8f3f42b3c";

    let getinfo = async () => {
        try{
        let res = await fetch(`${api}?q=${city}&appid=${apikey}`);
        let jsonres = await res.json();
        let result = {
            city: city,
            temp: jsonres.main.temp,
            tempMin: jsonres.main.temp_min,
            tempMax: jsonres.main.temp_max,
            humi: jsonres.main.humidity,
            pressure: jsonres.main.pressure,
            feelslike: jsonres.main.feels_like,
            weather: jsonres.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(error){
        throw error;
    }
    };

    let handlechange = (event) => {
        setcity(event.target.value);
    }

    let handlesubmit = async (event) => {
        try{
        event.preventDefault();
        // console.log(city);
        setcity("");
        let newinfo = await getinfo();
        updateinfo(newinfo);
        }catch{
            seterror(true);
        }
    }
    return (
        <form onSubmit={handlesubmit}>
            <TextField
                required
                id="city"
                label="City Name"
                defaultValue=""
                variant='outlined'
                value={city}
                onChange={handlechange}
            />
            <br />
            <Button variant="contained" type='submit'>search</Button>
            <br /><br />
           {error && <p style={{color:"red"}}>No such place in API </p>}
        </form>
    );
}