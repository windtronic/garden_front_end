import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=639cf580b57b4d7da1300306231404&q=Arvada_Colorado&days=5`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div className="weather-container">
      {error ? (
        <p>Failed to retrieve weather data</p>
      ) : weatherData ? (
        <div>
          <h2>4 Day Forecast For {weatherData.location.name}, CO</h2>
          {weatherData.forecast && weatherData.forecast.forecastday ? (
            weatherData.forecast.forecastday

              .filter((day) => day.date !== currentDate)

              .slice(0, 5)
              .map((day) => (
                <div key={day.date} className="weather-card">
                <h3>{formatDate(day.date)}</h3>
                <p><span className="high">High:</span> {day.day.maxtemp_f}°F</p>
                <p><span className="low">Low:</span> {day.day.mintemp_f}°F</p>
                <p><span className="condition">Condition:</span> {day.day.condition.text}</p>
              </div>
              
              ))
          ) : (
            <p>No forecast data available</p>
          )}
           <div className="current-weather">
        <h2>Current Weather For {weatherData.location.name}, CO</h2>
        <p>Temperature: {weatherData.current.temp_f}°F</p>
        <p>Condition: {weatherData.current.condition.text}</p>
      </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
