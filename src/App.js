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
      <header>Punk API</header>
        <ul>
          {beers.map(beer => (
              <li className="beer" key={beer.id}>
                <div className="beer-image">
                  <img src={beer.image_url}/>
                </div>
                <ul className="beer-info">
                  <li className="beer-name">
                    {beer.name}
                  </li>
                  <li>
                    {beer.tagline}
                  </li>
                </ul>
              </li>
              
          ))}
        </ul>
    </div>
  );
}

export default App;
