import React, { Component } from 'react'
import { observer } from 'mobx-react'
import crown from './crown2.svg'
import './App.css'
import mojs from 'mo-js'
import 'semantic-ui-css/semantic.min.css'
import chalk from './chalkboard.jpg'
import Nav from './components/nav'
import Footer from './footer'
const burst = ()=> {
  new mojs.Shape({
    shape:'circle',
    points:6,
    scale:1.2,
    top:'70px',
    left:'50%',
    fill:'none',
    stroke:{'#61DAFB': '#eee', easing: 'cubic.out'},
    strokeWidth:{ 1 : 0 },
    strokeDasharray:'100%',
    strokeDashoffset:{ '-100%' : '100%' },
    duration:2500,
    angle:{ 0: 180 },
    easing:'cubic.out',
    repeat:5
  }).play()
  new mojs.Shape({
    shape:        'polygon',
    points: 24,
    scale:         { 1.2 : 1.5 },
    top: 					 '70px',
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
const container = {
  background: `url(${chalk})`,
  height: window.innerHeight
}
const header = {
  textAlign: 'center',
}
const logo = {
  marginTop: 20,
  height: 75,
  marginBottom: '-40px',
}
const title = {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: '3em',
  color: '#61DAFB'
}

const Main = observer (
  class App extends Component {
    render() {
      return (
        <div style={container}>
          {burst()}
          <section style={header}>
            <img src={crown} style={logo} alt="logo" />
            <h1 style={title}>XV</h1>
          </section>
          <br/>
          <Nav/>
          <Footer/>
        </div>
      )
    }
  }
)

export default Main
