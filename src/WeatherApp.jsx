import { useState } from "react";
import Weather from "./Weather";
import Weatherinfo from "./Weatherinfo";

export default function WeatherApp(){
    let [Weatherinfos,setweatherinfos]=useState({
        city: "Delhi",
        feelslike: 293.14,
        humi: 30,
        pressure: 1017,
        temp: 294.2,
        tempMax: 294.2,
        tempMin: 294.2,
        weather: "haze"
    });

    let updateinfo=(newinfo)=>{
        setweatherinfos(newinfo);
    }
    return(
        <div>
            <h1>Weather App</h1>
            <Weather updateinfo={updateinfo}/>
            <Weatherinfo info={Weatherinfos}/>
        </div>
    );
}