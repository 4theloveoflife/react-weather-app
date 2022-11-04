import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }

    let apiKey="b1ad2579aaffa4376d245595812d15f0";
    let longitude=props.coordineates.lon;
    let latitude=props.coordinates.lat;
    let apiUrl='https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric';
    axios.get(apiUrl).then(handleResponse);

return(
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">
                     Thur
                </div>
                <WeatherIcon code="01d"  size={ 28}/>
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">19°</span>
                    <span className="WeatherForecast-temperature-min">10°</span>
                </div>
            </div>
        </div>
    </div>
);
}