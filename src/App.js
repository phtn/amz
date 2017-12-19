import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Swords from './assets/swordswoman.svg'
import './App.css'
// import mojs from 'mo-js'
import 'semantic-ui-css/semantic.min.css'
import chalk from './chalkboard.jpg'
import Nav from './components/nav'
// import Particles from 'react-particles-js'

// import Footer from './footer'
// const burst = ()=> {
//   new mojs.Shape({
//     shape:'circle',
//     points:6,
//     scale:1,
//     top:'60px',
//     left:'50%',
//     fill:'none',
//     stroke:{'#F0B400': '#000000', easing: 'cubic.out'},
//     strokeWidth:{ 1 : 0 },
//     strokeDasharray:'100%',
//     strokeDashoffset:{ '-100%' : '100%' },
//     duration:2500,
//     angle:{ 0: 180 },
//     easing:'cubic.out',
//     repeat:5
//   }).play()
//   new mojs.Shape({
//     shape:        'polygon',
//     points: 24,
//     scale:         { 0.8 : 1 },
//     top: 					 '60px',
//     left: 				 '50%',
//     fill: 				 'none',
//     stroke: 			 {'tomato': '#eee', easing: 'cubic.out'},
//     strokeWidth:   { 1: 0 },
//     strokeDasharray: '100%',
//     strokeDashoffset: { '-100%' : '100%' },
//     duration:      2500,
//     angle:        { 0: 180 },
//     easing:        'cubic.out',
//     repeat: 			5
//   }).play()
// } 


const container = {
  backgroundImage: `url(${chalk})`,
  backgroundColor: 'black',
  height: 'auto',
  width: 'auto',
}
const header = {
  textAlign: 'center',
}
const logo = {
  marginTop: 20,
  height: 75,
  marginBottom: '-20px',
  // position: 'absolute'
}
const title = {
  fontFamily: 'Spectral SC, serif',
  fontWeight: 100,
  fontSize: '2em',
  color: '#61DAFB',
  // opacity: 0.5,
}

const Main = observer (
  class App extends Component {
    // particles(){
    //   return <Particles
    //     height={'auto'}
        
    //     params={{
    //       particles: {
    //         number: {
    //           value: 100,
    //           density: {
    //             enable: true,
    //             value_area: 800
    //           }
    //         },
    //         color: {
    //           value: '#7289da'
    //         },
    //         shape: {
    //           type: 'triangle',
    //           stroke: {
    //             width: 0,
    //             color: '#fff'
    //           }
    //         },
    //         move: {
    //           speed: 1
    //         },
    //         line_linked: {
    //           distance: 20
    //         },
    //       },
    //       interactivity: {
    //         detect_on: 'window',
    //         events: {
    //           onclick: {
    //             enable: true,
    //             mode: 'repulse'
    //           }
    //         }
    //       }
    //     }}
    //   />
    // }
    render() {
      return (
        <div>
        <div style={container}>
          
          <section style={header}>
            
            <img src={Swords} style={logo} alt="logo" />
            <h1 style={title} >
              AMZ</h1>
          </section>
          <br/>
          <Nav/>
          
        </div>
      </div>
      )
    }
  }
)
export default Main
