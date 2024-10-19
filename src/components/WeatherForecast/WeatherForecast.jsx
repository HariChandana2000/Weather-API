import React from "react";
import "./styles.css";

const WeatherForecast = ({ currentLocationForecast }) => {
  return (
    <>
      <h4 className='heading'>Next days</h4>
      <div className='forecast-section'>
        {currentLocationForecast.list.map((item) => (
          <div className='forecast-card'>
            <h5>{item.main.temp}&deg;C</h5>
            <div className='sky-details'>
              <p>{item.weather[0].description}</p>
              <img
                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                alt='clouds'
              />
            </div>
            <p className='date'>{item.dt_txt.split(" ")[0]}</p>
          </div>
          // <Card>
          //   <Card.Body>
          //     <Card.Title>{item.main.temp}&deg;C</Card.Title>
          //     <Card.Text>
          //       <span style={{ width: "20%", display: "flex", flexWrap: "wrap" }}>
          //         {item.weather[0].description}
          //       </span>
          //       <img
          //         src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
          //         alt='clouds'
          //       />
          //     </Card.Text>
          //   </Card.Body>
          // </Card>
        ))}
      </div>
    </>
  );
};

export default WeatherForecast;
