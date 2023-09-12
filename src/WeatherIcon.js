import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log(props.code);
  const codeMapping = {};

  return <ReactAnimatedWeather icon={codeMapping[props.code]} size={52} />;
}
