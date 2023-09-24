import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/21843-christy-ramkisoen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Christy Ramkisoen
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/christy761/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://illustrious-parfait-1c2cb1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
