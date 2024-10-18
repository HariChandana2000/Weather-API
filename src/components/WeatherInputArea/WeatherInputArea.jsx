import React from "react";
import "./styles.css";

const WeatherInputArea = () => {
  return (
    <div className='weather-input'>
      <h2>Weather Forecast Made Easy!</h2>
      <div className='horizontal-bar'></div>
      <input type='text' name='location' placeholder='Search Location...' />
    </div>
  );
};

export default WeatherInputArea;
