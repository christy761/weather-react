import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

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
              value="Search City"
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
        <li>Last updated: {weatherData.date} </li>
        <li>{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex current-temp">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <div>
              <span className="temperature">{weatherData.temperature} </span>
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
}
