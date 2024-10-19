import "./App.css";
import DisplayWeatherArea from "./components/DisplayWeatherArea/DisplayWeatherArea";
import WeatherInputArea from "./components/WeatherInputArea/WeatherInputArea";

function App() {
  return (
    <>
      <WeatherInputArea />
      <DisplayWeatherArea />
    </>
  );
}

export default App;
