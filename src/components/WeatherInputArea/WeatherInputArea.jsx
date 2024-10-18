import React, { useEffect, useState } from "react";
import "./styles.css";
import { Image } from "react-bootstrap";

const API_KEY = process.env.API_KEY;

const WeatherInputArea = () => {
  const [userLocationWeather, setUserLocationWeather] = useState({});

  useEffect(() => {
    const getCurrentWeatherData = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
          const data = await response.json();
          setUserLocationWeather(data);
        });
      }
    };

    getCurrentWeatherData();
  }, []);

  return (
    <div className='weather-input'>
      <div className='input-area'>
        <h2>Weather Forecast Made Easy!</h2>
        <div className='horizontal-bar'></div>
        <input type='text' name='location' placeholder='Search Location...' />
      </div>
      <div className='current-location'>
        {Object.keys(userLocationWeather).length !== 0 && (
          <>
            <div className='user-location'>
              <h2>{userLocationWeather.main.temp}&deg;C</h2>
              <p>{`${userLocationWeather.name}, ${userLocationWeather.sys.country}`}</p>
            </div>
            <div className='weather'>
              <Image
                src={`http://openweathermap.org/img/w/${userLocationWeather.weather[0].icon}.png`}
              />
              <p>{userLocationWeather.weather[0].description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherInputArea;
