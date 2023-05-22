import React from 'react';
import { useSelector } from 'react-redux';
import Weather from '../weather/Weather';

function WeatherList() {
  const weatherData = useSelector((state) => state.weather.data);
  const city = useSelector((state) => state.weather.city);

  return (
    <div>
      <h2>Weather List</h2>
      {Array.isArray(weatherData) && weatherData.length > 0 ? (
        weatherData.map((weather) => (
          <Weather key={weather.id} data={weather} city={city} />
        ))
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
}

export default WeatherList;
