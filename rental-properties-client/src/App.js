import logo from './logo.svg';
import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
import Header from './components/Header'
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
