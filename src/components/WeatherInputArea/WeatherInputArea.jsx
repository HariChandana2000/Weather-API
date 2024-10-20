import { useRef } from "react";
import "./styles.css";

const API_KEY = process.env.API_KEY;

const WeatherInputArea = ({
  handleLoctionWeathreDetails,
  handleForecastLocationDetails,
}) => {
  const locationRef = useRef("");

  async function handleSearchByLocation() {
    if (locationRef.current.value === "") {
      alert("Please enter the loction!");
    } else {
      //current weather
      const currentWeatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locationRef.current.value}&appid=${API_KEY}&units=metric`
      );
      const currentWeatherData = await currentWeatherResponse.json();
      handleLoctionWeathreDetails(currentWeatherData);

      //forecast weather
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${locationRef.current.value}&appid=${API_KEY}&units=metric`
      );
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
      handleForecastLocationDetails(updatedForecastData);
    }
  }

  return (
    <div className='weather-input'>
      <div className='input-area'>
        <h2>Weather Forecast Made Easy!</h2>
        <div className='horizontal-bar'></div>
        <input
          type='text'
          name='location'
          ref={locationRef}
          placeholder='Search Location...'
        />
        <button className='search-btn' onClick={handleSearchByLocation}>
          Search
        </button>
      </div>
      {/* <div className='date-picker'>
        <div className='sub-date-input'>
          <label htmlFor='from'>From:</label>
          <input type='date' name='from' id='from' placeholder='From' />
        </div>
        <div className='sub-date-input'>
          <label htmlFor='to'>To:</label>
          <input type='date' name='to' id='to' placeholder='To' />
        </div>
      </div> */}
    </div>
  );
};

export default WeatherInputArea;
