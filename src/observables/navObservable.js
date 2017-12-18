import { action, computed, extendObservable } from 'mobx'
import React from 'react'
// components
import General from '../components/General'
import Hero from '../components/Hero'
import Guild from '../components/Guild'
import GearLevel from '../components/GearLevel'
import Footer from '../footer'

class NavObservables {
  constructor(){
    extendObservable(this, {
      active: 'General',
      setActive: action(a=> {
        this.active = a
      }),
      renderComponent: computed(c=> {
        switch(this.active){
          case 'General': return <General footer={<Footer/>}/>
          case 'Hero': return <Hero name='Hero' footer={<GearLevel/>}/>
          case 'Guild': return <Guild name='Guild' footer={<Footer/>}/>
          default: return <General/>
        }
      })
    })
  }
}
export default NavObservables
