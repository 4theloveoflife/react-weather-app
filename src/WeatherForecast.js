import React,{useState} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setloaded]=useState(false);
    let [forecast, setForecast]=useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setloaded(true);
    }

    if (loaded) {
return(
    <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function  (dailyForecast,index) {
                if (index< 5) {
                return(
                       <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
                        </div>
                 );
            }
         } )}
            </div>
        </div>
    );
   
}else{
    let apiKey="b1ad2579aaffa4376d245595812d15f0";
    let longitude=props.coordineates.lon;
    let latitude=props.coordinates.lat;
    let apiUrl='https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric';
    axios.get(apiUrl).then(handleResponse);
return null;
}
}