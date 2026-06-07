import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = "b6b4b82dea69d0d2f9ed26088b14df5b";

  const getWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      setWeather(response.data);
    } catch (error) {
      alert("City not found");
    }
  };

  return (
    <div className="app">
      <h1>Weather Forecast Dashboard</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>
          Search
        </button>
      </div>

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;