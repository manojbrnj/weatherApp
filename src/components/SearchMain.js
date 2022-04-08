import React, { useEffect, useState } from "react";
import "../components/style.css";
import WeatherDetails from "./WeatherDetails";
function SearchMain(props) {
  const [searchTerm, setSearchTerm] = useState("mumbai");
 useEffect(()=>{
   //function
 },[])
  return (
    <>     
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search city by name"
          />
        </div>
        <button className="searchButton" onClick={()=>{getWeatherInfo()}}>Search</button>
      </div>
      <WeatherDetails></WeatherDetails>
    </>
  );
}
export default SearchMain;
