import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Spinner } from "react-bootstrap";

const API_KEY = process.env.HISTORIC_API_KEY;

const HistoricData = () => {
  const [historicData, setHistoricData] = useState({});
  const dateRef = useRef("");
  const locationRef = useRef("");

  const handleHistoricData = async () => {
    if (dateRef.current.value !== "" && locationRef.current.value !== "") {
      const response = await fetch(
        `http://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${locationRef.current.value}&dt=${dateRef.current.value}`
      );

      const data = await response.json();
      setHistoricData(data);
    } else {
      alert("Please enter the required fields!");
    }
  };

  return (
    <div className='historic-data'>
      <h3>Get Weather Data On Specific Date (upto past 7 days)</h3>
      <div className='date-area'>
        <div className='label-input-container'>
          <label htmlFor='from'>On:</label>
          <input type='date' name='on' id='on' ref={dateRef} required />
          <input
            type='text'
            name='location-name'
            placeholder='Enter Location..'
            ref={locationRef}
            required
          />
          <button onClick={handleHistoricData}>Search</button>
        </div>
      </div>
      {Object.keys(historicData).length !== 0 && !historicData.error ? (
        <div className='historic-data-card'>
          <h3>{historicData.forecast.forecastday[0].day.avgtemp_c}&deg;C</h3>
          <div className='sky-details'>
            <p>{historicData.forecast.forecastday[0].day.condition.text}</p>
            <img
              src={historicData.forecast.forecastday[0].day.condition.icon}
              alt='clouds'
            />
          </div>
          <div className='humidity-speed-details'>
            <p>
              Humidity: {historicData.forecast.forecastday[0].day.avghumidity}%
            </p>
            <p>
              Max Wind Speed:{" "}
              {historicData.forecast.forecastday[0].day.maxwind_mph}meters/hr
            </p>
          </div>
          <p className='prec'>
            Average Precipitation:{" "}
            {historicData.forecast.forecastday[0].day.totalprecip_in}inch
          </p>
        </div>
      ) : historicData.error ? (
        <p className='error'>
          {historicData.error.code === 1006
            ? historicData.error.message
            : "Can only select upto past 7 days"}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HistoricData;
