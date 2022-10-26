import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return(
      <div className="App">
               <div className="container">
                <Weather  defaultCity="Tokyo"/>
  
    <footer>
This project was coded by Tiffany Walker and is {" "}
    <a 
    href="https://github.com/4theloveoflife/react-weather-app.git"
    target= "_blank"
    rel="noopener noreferrer">
 open sourced on GitHub
    </a>
        </footer>
    </div>
    </div>
    ) ;
}