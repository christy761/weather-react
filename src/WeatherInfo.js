import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
        <div className="col-7">
          <div className="d-flex current-temp">
            <WeatherIcon code={props.data.icon} />
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul className="condition-information">
            <li>Humidity: {props.data.humidity}%</li>
            <br />
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
