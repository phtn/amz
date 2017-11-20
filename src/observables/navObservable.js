import { action, computed, extendObservable } from 'mobx'
import React from 'react'
// components
import Hero from '../components/hero'
import General from '../components/General'

class NavObservables {
  constructor(){
    extendObservable(this, {
      active: 'General',
      setActive: action(a=> {
        this.active = a
      }),
      renderComponent: computed(c=> {
        switch(this.active){
          case 'General': {
            return <General/>
          }
          case 'Attack': {
            return 'Attack'
          }
          case 'Defense': {
            return 'Defense'
          }
          case 'Hero': {
            return <Hero/>
          }
          default: return <Hero/>
          
        }
      })
    })
  }
}
export default NavObservables
