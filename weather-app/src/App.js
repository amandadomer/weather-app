import React, { useState } from 'react';
import './App.css'

function App() {
  const apiKey= "198de38fd616ddde62ebac31b6ef6bb6"

  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('');

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setLocation(''); 
        });
    }
  }

  return (
    <div className="container">
      <span className="header">Where would you rather be today?</span>
        <div className="bar">
          <input 
            type="text"
            className="search"
            placeholder="Search for a city"
            onChange={event => setLocation(event.target.value)}
            value={location}
            onKeyPress={handleSearch}/>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className="info">
        In {weather.name} the temperature is currently {Math.round(weather.main.temp)}°F with {weather.weather[0].description}. That sounds nice.
        </div>
        ) : ('')}
    </div>
  );
}

export default App;