import React from 'react'
import { action, computed, extendObservable } from 'mobx'
import Sentinel from '../components/sentinel'
import Arbiter from '../components/arbiter'

class HeroObservables {
  constructor(){
    extendObservable(this, {
      left: 'Sentinel',
      leftToggle: action(a=> {
        console.log('test')
        
      }),
      leftComponent: computed(a=>{
        switch(this.left){
          case 'Sentinel': return <Sentinel/>
          case 'Arbiter': {
            return <Arbiter/>
          }
          case 'Winged Assasin': this.left = 'Aranea'
          break
          case 'Aranea': this.left = 'Grim Reaper'
          break
          case 'Grim Reaper': this.left = 'Gunslinger'
          break
          case 'Undertaker': this.left = 'Sentinel'
          break
          default: return this.left = 'Sentinel'
        }
      })
    })
  }
}
export default HeroObservables