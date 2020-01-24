import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [beers, setBeers] = useState([])
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then(response => response.json()
      .then(setBeers))
  }, [])

  return (
    <div className="App">
      <ul>
        {beers.map(beer => (
            <li key={beer.id}>
              {beer.name}
              <img src={beer.image_url}/>
            </li>
            
        ))}
      </ul>
    </div>
  );
}

export default App;
