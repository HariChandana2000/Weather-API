import { useState } from "react";
import "./App.css";
import DisplayWeatherArea from "./components/DisplayWeatherArea/DisplayWeatherArea";
import WeatherInputArea from "./components/WeatherInputArea/WeatherInputArea";
import HistoricData from "./components/HistoricData/HistoricData";

function App() {
  const [locationWeatherDetails, setLocationWeatherDetails] = useState({});
  const [forecastLocationDetails, setForecastLocationDetails] = useState({});

  function handleLoctionWeathreDetails(locationWeatherData) {
    setLocationWeatherDetails(locationWeatherData);
    if (locationWeatherData.cod !== 200) {
      alert(locationWeatherData.message);
    }
  }

  function handleForecastLocationDetails(forecastLocationData) {
    setForecastLocationDetails(forecastLocationData);
    if (forecastLocationData.cod !== "200") {
      alert(forecastLocationData.message);
    }
  }

  return (
    <>
      <WeatherInputArea
        handleLoctionWeathreDetails={handleLoctionWeathreDetails}
        handleForecastLocationDetails={handleForecastLocationDetails}
      />
      <DisplayWeatherArea
        locationWeatherDetails={locationWeatherDetails}
        forecastLocationDetails={forecastLocationDetails}
      />
      <HistoricData />
    </>
  );
}

export default App;
