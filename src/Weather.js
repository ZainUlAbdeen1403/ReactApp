import React, { useEffect, useState } from 'react';
import Apple from './Apple';
import WeatherDisplay from './WeatherDisplay';
const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://weatherapi-com.p.rapidapi.com/current.json?q=33.56,73.016914',
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '1d2b9c5acemsh9c3b5edb88f812dp1bf7c8jsncac75a936c1a',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    
      {weatherData && (
        <div>
            <WeatherDisplay weatherData={weatherData}/>
             
          
          
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
