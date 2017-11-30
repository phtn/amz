import React from 'react'
import { action, computed, extendObservable } from 'mobx'
import Gear from '../components/Gear'

class HeroObservables {
  constructor(){
    extendObservable(this, {
      left: 'Hunter',
      leftDropdown: action(a=> {
        return this.left = a
      }),
      leftColumn: computed(c=>{
        switch(this.left){
          case 'Hunter': return <Gear name='Hunter'/>
          case 'Gunslinger': return <Gear name='Gunslinger'/>
          default: return <Gear name='Hunter'/>
        }
      })
    })
  }
}
export default HeroObservables