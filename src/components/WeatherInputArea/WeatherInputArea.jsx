import "./styles.css";

const WeatherInputArea = () => {
  return (
    <div className='weather-input'>
      <div className='input-area'>
        <h2>Weather Forecast Made Easy!</h2>
        <div className='horizontal-bar'></div>
        <input type='text' name='location' placeholder='Search Location...' />
      </div>
      <div className='date-picker'>
        <div className='sub-date-input'>
          <label htmlFor='from'>From:</label>
          <input type='date' name='from' id='from' placeholder='From' />
        </div>
        <div className='sub-date-input'>
          <label htmlFor='to'>To:</label>
          <input type='date' name='to' id='to' placeholder='To' />
        </div>
      </div>
    </div>
  );
};

export default WeatherInputArea;
