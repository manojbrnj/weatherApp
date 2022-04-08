import React, { useEffect, useState } from "react";
import "../components/style.css";
import WeatherDetails from "./WeatherDetails";
function SearchMain(props) {
  const [searchTerm, setSearchTerm] = useState("mumbai");
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=4906290faa199eeb9990217f1abe7753`;
      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myWeatherInfo = {
        temp,
        humidity,
        pressure,
        name,
        speed,
        country,
        sunset,
        weatherType,
      };
      setTempInfo(myWeatherInfo)    
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
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
           <button
          className="searchButton"
          onClick={() => {
            getWeatherInfo();
          }}
        >
          Search
        </button>
        </div>
       
      </div>
      <WeatherDetails {...tempInfo}></WeatherDetails>
    </>
  );
}
export default SearchMain;
