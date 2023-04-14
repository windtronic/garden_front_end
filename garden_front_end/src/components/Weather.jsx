import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=639cf580b57b4d7da1300306231404&q=Arvada_Colorado&days=3`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getData();
  }, []);

  // Format the date string to "day of week name, month name day year"
  const formatDate = dateString => {
    const date = new Date(dateString);
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Get the current date and format it as YYYY-MM-DD
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div>
      {error ? (
        <p>Failed to retrieve weather data</p>
      ) : weatherData ? (
        <div>
          <h2>2-day forecast for {weatherData.location.name}</h2>
          {weatherData.forecast && weatherData.forecast.forecastday ? (
            weatherData.forecast.forecastday
              // Filter out the first day in the forecast that matches the current date
              .filter(day => day.date !== currentDate)
              // Take the first three days in the filtered forecast array
              .slice(0, 2)
              .map(day => (
                <div key={day.date}>
                  <h3>{formatDate(day.date)}</h3>
                  <p>High: {day.day.maxtemp_f}°F</p>
                  <p>Low: {day.day.mintemp_f}°F</p>
                  <p>Condition: {day.day.condition.text}</p>
                </div>
              ))
          ) : (
            <p>No forecast data available</p>
          )}
          <h2>Current weather for {weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_f}°F</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
