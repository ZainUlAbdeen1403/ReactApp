import React from 'react';
import './WeatherDisplay.css'; // Import your CSS file for styling

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="weather-container">
      <div className="location">
        <h2>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h2>
        <p>Timezone: {weatherData.location.tz_id}</p>
        <p>Local Time: {weatherData.location.localtime}</p>
      </div>
      <div className="current-weather">
        <h3>Current Weather</h3>
        <div className="weather-icon">
          <img src={`https:${weatherData.current.condition.icon}`} alt={weatherData.current.condition.text} />
        </div>
        <div className="weather-details">
          <p>Temperature: {weatherData.current.temp_c}°C ({weatherData.current.temp_f}°F)</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <p>Wind: {weatherData.current.wind_kph} km/h, {weatherData.current.wind_dir}</p>
          <p>Pressure: {weatherData.current.pressure_mb} mb ({weatherData.current.pressure_in} in)</p>
          <p>Precipitation: {weatherData.current.precip_mm} mm ({weatherData.current.precip_in} in)</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
          <p>Cloud Cover: {weatherData.current.cloud}%</p>
          <p>Feels Like: {weatherData.current.feelslike_c}°C ({weatherData.current.feelslike_f}°F)</p>
          <p>Visibility: {weatherData.current.vis_km} km ({weatherData.current.vis_miles} miles)</p>
          <p>UV Index: {weatherData.current.uv}</p>
          <p>Gust: {weatherData.current.gust_kph} km/h ({weatherData.current.gust_mph} mph)</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
