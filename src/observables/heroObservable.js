import React from 'react'
import { action, computed, extendObservable } from 'mobx'
import Gear from '../components/Gear'
import GearStore from './GearStore'

const gearStore = [GearStore.hunter,GearStore.gunslinger,GearStore.sentinel,GearStore.arbiter,GearStore.assasin, GearStore.aranea,GearStore.undertaker, GearStore.reaper]
class HeroObservables {
  constructor(){
    extendObservable(this, {
      left: 'Hunter',
      right: 'Sentinel',
      
      leftDropdown: action(a=> {
        return this.leftStoreId = this.dropdownArr.indexOf(a)
      }),
      rightDropdown: action(a=> {
        return this.rightStoreId = this.dropdownArr.indexOf(a)
      }),

      dropdownArr: ['Hunter', 'Gunslinger', 'Sentinel', 'Arbiter', 'Winged Assasin', 'Aranea', 'Undertaker', 'Reaper'],
      leftStoreId: 0,
      rightStoreId: 2,
      // leftStore: computed(c=> {return this.leftStoreId = c}),
      leftColumn: computed(c=>{
        switch(this.leftStoreId){
          case 0: return <Gear items={gearStore[0]}/>
          case 1: return <Gear items={gearStore[1]}/>
          case 2: return <Gear items={gearStore[2]}/>
          case 3: return <Gear items={gearStore[3]}/>
          case 4: return <Gear items={gearStore[4]}/>
          case 5: return <Gear items={gearStore[5]}/>
          case 6: return <Gear items={gearStore[6]}/>
          case 7: return <Gear items={gearStore[7]}/>
          
          default: return <Gear items={gearStore[0]}/>
        }
      }),
      rightColumn: computed(c=>{
        switch(this.rightStoreId){
          case 0: return <Gear items={gearStore[0]}/>
          case 1: return <Gear items={gearStore[1]}/>
          case 2: return <Gear items={gearStore[2]}/>
          case 3: return <Gear items={gearStore[3]}/>
          case 4: return <Gear items={gearStore[4]}/>
          case 5: return <Gear items={gearStore[5]}/>
          case 6: return <Gear items={gearStore[6]}/>
          case 7: return <Gear items={gearStore[7]}/>
          
          default: return <Gear items={gearStore[2]}/>
        }
      }),

      
      // tEST
      // leftArray: [],
      loop: action(a=> {
        // console.log(this.leftStoreId)
        // for (var i in gearStore[this.leftStoreId]){
        //   // return this.leftArray = gearStore[a]
        // }
      }),
     

      
      
      color: 1
    })
  }
}
export default HeroObservables