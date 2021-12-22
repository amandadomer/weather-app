import {React, useState} from 'react';
import './App.css';
import SearchBar from './searchBar';
import axios from 'axios';

const api = {
  key: "b55c4ba2f2msh85e958ceff4c00ap110430jsnec27170bb0c7",
  base: "community-open-weather-map.p.rapidapi.com"
}


function App() {
  return (
    <div> 
      <span className="header">
        what's it like outside?
      </span>
      <SearchBar/>

    </div>
  )
}

export default App;
