import { action, computed, extendObservable } from 'mobx'
import React from 'react'
// components
import General from '../components/General'
import Defense from '../components/Defense'
import Guild from '../components/Guild'

class NavObservables {
  constructor(){
    extendObservable(this, {
      active: 'Guild',
      setActive: action(a=> {
        this.active = a
      }),
      renderComponent: computed(c=> {
        switch(this.active){
          case 'General': return <General/>
          case 'Hero': return <Defense name='Hero'/>
          case 'Guild': return <Guild name='Guild'/>
          default: return <General/>
        }
      })
    })
  }
}
export default NavObservables
