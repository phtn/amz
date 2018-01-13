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
      active: 'Hero',
      setActive: action(a=> {
        this.active = a
      }),
      renderComponent: computed(c=> {
        switch(this.active){
          case 'General': return <General footer={<Footer/>}/>
          case 'Hero': return <Hero name='Hero' footer={<GearLevel/>}/>
          case 'Guild': return <Guild name='Guild' council={this.council} r3={this.r3} footer={<Footer/>}/>
          default: return <General/>
        }
      }),
      council: computed(c=> {
        return [
          {name: 'Lyandra', desc: 'IV - VP'},
          {name: 'ThereforeIAm', desc: 'IV - War Chief'},
          {name: 'Whos Juicy', desc: 'IV'},
          {name: 'Lord Organic', desc: 'IV'},
          {name: 'MrShucknJive', desc: 'IV'},
          {name: 'RulingSaturn', desc: 'IV'},
          {name: 'TheProcess76', desc: 'IV'},
        ]
      }),
      r3: computed(c=> {
        return [
          {name: 'Dragon Fight', desc: 'III'},
          {name: 'Diggity', desc: 'III'},
          {name: 'saisugoi', desc: 'III'},
          {name: 'VebnaGrom', desc: 'III'},
          {name: 'Ridghaveeyes', desc: 'III'},
          {name: 'vienas', desc: 'III'},
          {name: 'Petrificonn', desc: 'III'},
          {name: 'La Esfinge', desc: 'III'},
          {name: 'Cinni', desc: 'III'},
          {name: 'Third Rock', desc: 'III'},
          {name: 'JoseCZ', desc: 'III'},
          {name: 'KrowKnows110', desc: 'III'},
          {name: 'Game of T', desc: 'III'},
          {name: 'Caratess', desc: 'III'},
          {name: '40575', desc: 'III'},
          {name: 'Abagadix', desc: 'III'},
          {name: 'Age Pet', desc: 'III'},
          {name: 'Aurian', desc: 'III'},
          {name: 'Blissity', desc: 'III'},
          {name: 'DR3WFU55', desc: 'III'},
          {name: 'Ghihiro', desc: 'III'},
          {name: 'hon92', desc: 'III'},
          {name: 'Kronos1100', desc: 'III'},
          {name: 'Lizzzo', desc: 'III'},
          {name: 'sherry690610', desc: 'III'},
          {name: 'Slimford', desc: 'III'},
          {name: 'willow wolf', desc: 'III'},
        ]
      })
    })
  }
}
export default NavObservables
