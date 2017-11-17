import React from 'react'
import { Divider, Icon } from 'semantic-ui-react'
import chalk from './chalkboard.jpg'
const container = {
  width: window.innerWidth,
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  // backgroundColor: '#efefef',
  height: 80,
  textAlign: 'center',
  color: '#61DAFB',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 11,
  background: `url(${chalk})`
}
export default props => (
  <div style={container}>
  <Divider/>
  Made with <Icon name='empty heart'/>by <strong>(AMZ)</strong> ThereforeIAm
  </div>
)