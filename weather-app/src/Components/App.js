import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const apiKey = "198de38fd616ddde62ebac31b6ef6bb6"

  const [weather, setWeather] = useState({})
  const [location, setLocation] = useState("")

  const Search = event => {
    if (event.key === "Enter") {
      fetch (`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`)
        .then (res => res.json())
        .then(result => setWeather(result));
        setLocation('');
    }
  }

  return (
    <div>
      <span className="header">What's it like outside?</span>
      <input
      className="search"
      type="text"
      onChange = {(event) => setLocation(event.target.value)}
      placeholder="Enter a city"
      />

      <div>
        Location Name
      </div>
      <div>
        Temperature info
      </div>
    </div>
    
  

  )

}

export default App;
