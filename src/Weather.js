import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>Weather App</h1>
        <h2>Current weather & 5-day forecast</h2>
        <form className="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city name"
                autoFocus="on"
                autoComplete="off"
                className="form-control shadow-sm"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-success shadow-sm w-100 search-city-button"
              />
            </div>
            <div className="col-3">
              <button className="btn btn-success w-100 current-button">
                Current
              </button>
            </div>
          </div>
        </form>
        <div className="col-3">
          <h3>{weatherData.city}</h3>
        </div>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <br />
          <li className="text-capitalize"> {weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex current-temp">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <div>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="condition-information">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6ea2dfaoeac7fte3c92600dba4113151";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
