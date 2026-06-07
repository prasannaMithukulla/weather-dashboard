import React from "react";
import "./WeatherCard.css";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>

      <h1>{weather.main.temp}°C</h1>

      <p>{weather.weather[0].main}</p>

      <p>
        Humidity: {weather.main.humidity}%
      </p>

      <p>
        Wind Speed: {weather.wind.speed} m/s
      </p>
    </div>
  );
}

export default WeatherCard;