import { action, computed, extendObservable } from 'mobx'
import React from 'react'
// components
import General from '../components/General'
import Defense from '../components/Defense'

class NavObservables {
  constructor(){
    extendObservable(this, {
      active: 'General',
      setActive: action(a=> {
        this.active = a
      }),
      renderComponent: computed(c=> {
        switch(this.active){
          case 'General': return <General/>
          case 'Attack': return <Defense name='Attack'/>
          case 'Defense': return <Defense name='Defense'/>
          case 'Hero': return <Defense name='Hero'/>
          default: return <General/>
        }
      })
    })
  }
}
export default NavObservables
