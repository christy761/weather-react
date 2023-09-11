import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="col-3">
        <h3>{props.data.city}</h3>
      </div>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <br />
        <li className="text-capitalize"> {props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex current-temp">
            <img src={props.data.iconUrl} alt={props.data.description} />
            <div>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="condition-information">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
