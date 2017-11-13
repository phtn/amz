import React, { Component } from 'react';
import crown from './crown2.svg';
import './App.css';
import mojs from 'mo-js'

const burst = ()=> {
  new mojs.Shape({
    shape:'circle',
    points:6,
    scale:1.8,
    top:'100px',
    left:'50%',
    fill:'none',
    stroke:{'#61DAFB': '#eee', easing: 'cubic.out'},
    strokeWidth:{ 1 : 0 },
    strokeDasharray:'100%',
    strokeDashoffset:{ '-100%' : '100%' },
    duration:3000,
    angle:{ 0: 180 },
    easing:'cubic.out',
    repeat:5
  }).play()
  new mojs.Shape({
    shape:        'polygon',
    points: 12,
    scale:         { 2 : 1.5 },
    top: 					 '100px',
    left: 				 '50%',
    fill: 				 'none',
    stroke: 			 {'#F0B400': '#eee', easing: 'cubic.out'},
    strokeWidth:   { 1: 0 },
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    duration:      2500,
    angle:        { 0: 180 },
    easing:        'cubic.out',
    repeat: 			5
  }).play()
} 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={crown} className="App-logo" alt="logo" />
          <h1 className="App-title">AMZ</h1>
        </header>
        <p className="App-intro">
          {burst()}
        </p>
      </div>
    );
  }
}

export default App;
