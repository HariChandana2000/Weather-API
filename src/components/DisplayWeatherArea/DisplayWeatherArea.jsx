import React, { useState, useEffect } from "react";
import "./styles.css";
import { Spinner } from "react-bootstrap";
import CurrentWeatherCard from "../Cards/CurrentWeatherCard";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

const API_KEY = process.env.API_KEY;

const DisplayWeatherArea = ({
  locationWeatherDetails,
  forecastLocationDetails,
}) => {
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
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const weatherdata = await weatherResponse.json();
          const forecastData = await forecastResponse.json();
          const updatedForecastData = {
            ...forecastData,
            list: forecastData.list
              .filter((item, index) => {
                if (index >= 1) {
                  const dt = item.dt_txt.split(" ")[0];
                  const pdt = forecastData.list[index - 1].dt_txt.split(" ")[0];
                  if (pdt !== dt) {
                    return forecastData.list[index - 1];
                  }
                }
              })
              .slice(0, 3),
          };

          setUserLocationWeather(weatherdata);
          setCurrentLocationForecast(updatedForecastData);
        });
      }
    };

    getCurrentWeatherData();
  }, []);

  return (
    <div className='display-weather-container'>
      <div className='today-date'>
        <h2>Today</h2>

        <p>{new Date().toLocaleTimeString()}</p>
      </div>
      {Object.keys(locationWeatherDetails).length !== 0 &&
      locationWeatherDetails.cod === 200 ? (
        <CurrentWeatherCard userLocationWeather={locationWeatherDetails} />
      ) : Object.keys(userLocationWeather).length !== 0 ? (
        <CurrentWeatherCard userLocationWeather={userLocationWeather} />
      ) : (
        <Spinner animation='border' variant='primary' />
      )}
      {Object.keys(forecastLocationDetails).length !== 0 &&
      forecastLocationDetails.cod === "200" ? (
        <WeatherForecast currentLocationForecast={forecastLocationDetails} />
      ) : Object.keys(currentLocationForecast).length !== 0 ? (
        <WeatherForecast currentLocationForecast={currentLocationForecast} />
      ) : (
        <Spinner animation='border' variant='success' />
      )}
    </div>
  );
};

export default DisplayWeatherArea;
