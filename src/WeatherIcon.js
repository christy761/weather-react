import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {
    "clear-sky-day",
    "clear-sky-night",
    "few-clouds-day",
    "few-clouds-night",
    "scattered-clouds-day",
    "scattered-clouds-night",
    "broken-clouds-day",
    "broken-clouds-night",
    "shower-rain-day",
    "shower-rain-night",
    "rain-day",
    "rain-night",
    "thunderstorm-day",
    "thunderstorm-night",
    "snow-day",
    "snow-night",
    "mist-day",
    "mist-night",
}

  return <ReactAnimatedWeather icon={codeMapping[props.code]} size={52} />;
}
