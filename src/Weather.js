import React from "react";
import "./Weather.css";
export default function Weather(){
    return (
         <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input 
                        type="search"
                        placeholder="Enter City.."
                        className="form-control"
                        />
                        </div>
                        <div className="col-3">
                            <input 
                            type="submit" value="Search" className="btn btn-primary"/>
                        </div>
                    </div>
                      </form>
               
        <h1>Tokyo</h1>
        <ul>
            <li>Monday 22:00</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img
                src="http://openweathermap.org/img/wn/10n@2x.png"
                alt="light rain"
                />
                18℃
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation:15%</li>
                    <li>Humidity:10%</li>
                    <li>Wind:8km/h</li>
                </ul>
            </div>
        </div>
        </div>

    );
}