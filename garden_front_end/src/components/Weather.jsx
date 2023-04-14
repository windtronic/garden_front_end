import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=639cf580b57b4d7da1300306231404&q=Arvada_Colorado`
      );
      setWeatherData(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
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
