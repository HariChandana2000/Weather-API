import React, { useState, useEffect } from "react";
import "./styles.css";
import { Spinner } from "react-bootstrap";
import CurrentWeatherCard from "../Cards/CurrentWeatherCard";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

const API_KEY = process.env.API_KEY;

const DisplayWeatherArea = () => {
  const [userLocationWeather, setUserLocationWeather] = useState({});
  const [currentLocationForecast, setCurrentLocationForecast] = useState({});
  useEffect(() => {
    const getCurrentWeatherData = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&cnt=3`
          );
          const weatherdata = await weatherResponse.json();
          const forecastData = await forecastResponse.json();

          setUserLocationWeather(weatherdata);
          setCurrentLocationForecast(forecastData);
        });
      }
    };

    getCurrentWeatherData();
  }, []);

  console.log(currentLocationForecast);
  return (
    <div className='display-weather-container'>
      <div className='today-date'>
        <h2>Today</h2>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
      {Object.keys(userLocationWeather).length !== 0 ? (
        <CurrentWeatherCard userLocationWeather={userLocationWeather} />
      ) : (
        <Spinner animation='border' variant='primary' />
      )}
      {Object.keys(currentLocationForecast).length !== 0 ? (
        <WeatherForecast currentLocationForecast={currentLocationForecast} />
      ) : (
        <Spinner animation='border' variant='success' />
      )}
    </div>
  );
};

export default DisplayWeatherArea;
