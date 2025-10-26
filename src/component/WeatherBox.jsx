import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const WeatherBox = ({ weather }) => {
  console.log(weather);
  if (!weather || !weather.main) return null;
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <div>
      <div className="weather-box">
        <div className="weather-info">
          <div className="weather-icon">
            <img src={iconUrl}></img>
          </div>
        </div>
        <div className="weather-desc">
          <h2>
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
            {weather?.name}
          </h2>
          <h1>{weather?.main.temp.toFixed(0)} ℃</h1>
          <h4>{((weather?.main.temp * 9) / 5 + 32).toFixed(0)} °F</h4>

          <h5>{weather?.weather[0].description}</h5>
          <h6>
            <FontAwesomeIcon icon={faArrowUp} className="location-icon" />{" "}
            {weather?.main.temp_max.toFixed(0)} /{" "}
            <FontAwesomeIcon icon={faArrowDown} className="location-icon" />
            {weather?.main.temp_min.toFixed(0)}
          </h6>
        </div>

        <div className="add-info">
          <div>
            <div>
              <p>습도</p>
              <p>{weather?.main.humidity}</p>
            </div>
            <div>
              <p>바람세기</p>
              <p>{weather?.wind.speed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
