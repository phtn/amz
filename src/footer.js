import React from 'react'
import { Icon } from 'semantic-ui-react'
import chalk from './chalkboard.jpg'
const container = {
  width: window.innerWidth,
  alignItems: 'center',
  position: 'fixed',
  bottom: 0,
  // backgroundColor: '#efefef',
  height: 20,
  textAlign: 'center',
  color: '#61DAFB',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 100,
  fontSize: 11,
  background: `url(${chalk})`,
  // borderTop: '1px solid #666'
}
export default props => (
  <div style={container}>
  Made with <Icon color='red' name='empty heart'/>by <strong>(AMZ)</strong> ThereforeIAm
  </div>
)