import React, { useState } from "react";
import "../DisplayWeatherArea/styles.css";

const CurrentWeatherCard = ({ userLocationWeather }) => {
  return (
    <div className='weather-card'>
      <div className='details'>
        <h4>{userLocationWeather.name}</h4>
        <h3>{userLocationWeather.main.temp}&deg;C</h3>
      </div>
      <div className='clouds'>
        <p>{userLocationWeather.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/w/${userLocationWeather.weather[0].icon}.png`}
          alt='clouds'
        />
        <div className='humidity'>
          <p>humidity: {userLocationWeather.main.humidity}%</p>
          <p>wind speed: {userLocationWeather.wind.speed}m/sec</p>
        </div>
      </div>
      <div className='date-section'>
        <p>{new Date(userLocationWeather.dt * 1000).toDateString()}</p>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
