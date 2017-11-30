import { action, computed, extendObservable } from 'mobx'
import React from 'react'
// components
import General from '../components/General'
import Hero from '../components/Hero'
import Guild from '../components/Guild'

class NavObservables {
  constructor(){
    extendObservable(this, {
      active: 'Hero',
      setActive: action(a=> {
        this.active = a
      }),
      renderComponent: computed(c=> {
        switch(this.active){
          case 'General': return <General/>
          case 'Hero': return <Hero name='Hero'/>
          case 'Guild': return <Guild name='Guild'/>
          default: return <General/>
        }
      })
    })
  }
}
export default NavObservables
