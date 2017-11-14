import { action, computed, extendObservable } from 'mobx'
import React from 'react'

class NavObservables {
  constructor(){
    extendObservable(this, {
      active: 'Hero',
      setActive: action(a=> {
        this.active = a
      }),
      renderComponent: computed(c=> {
        switch(this.active){
          case 'General': {
            return 'General'
          }
          case 'Attack': {
            return 'Attack'
          }
          case 'Defense': {
            return 'Defense'
          }
          case 'Hero': {
            return 'Hero'
          }
        }
      })
    })
  }
}
export default NavObservables
