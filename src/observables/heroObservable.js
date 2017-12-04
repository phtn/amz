import React from 'react'
import { action, computed, extendObservable } from 'mobx'
import Gear from '../components/Gear'
import GearStore from './GearStore'

const LeftStore = [GearStore.hunter]
class HeroObservables {
  constructor(){
    extendObservable(this, {
      left: 'Hunter',
      leftDropdown: action(a=> {
        return this.left = a
      }),
      leftStoreId: 0,
      leftStore: computed(c=> {return this.leftStoreId = c}),
      leftColumn: computed(c=>{
        switch(this.left){
          case 'Hunter': return <Gear items={this.leftArray.map(i=> {return i})}/>
          case 'Gunslinger': return <Gear name='Gunslinger'/>
          case 'Sentinel': return <Gear name='Sentinel'/>
          case 'Arbiter': return <Gear name='Arbiter'/>
          case 'Winged Assasin': return <Gear name='Winged Assasin'/>
          case 'Aranea': return <Gear name='Aranea'/>
          case 'Undertaker': return <Gear name='Undertaker'/>
          case 'Reaper': return <Gear name='Reaper'/>
          default: return <Gear name={this.left}/>
        }
      }),
      
      // tEST
      leftArray: [],
      loop: action(a=> {
        for (var i in LeftStore){
          return this.leftArray = LeftStore[i]
          // let res = LeftStore[i].map(c=> c.name)
          //   for (let items in res)
          //   console.log(res[items])
        }
      }),
     

      right: 'Sentinel',
      rightDropdown: action(a=> {
        return this.right = a
      }),
      rightColumn: computed(c=> {
        switch(this.right){
          case 'Hunter': return <Gear name={GearStore.hunter.name}/>
          case 'Gunslinger': return <Gear name='Gunslinger'/>
          case 'Sentinel': return <Gear name='Sentinel'/>
          case 'Arbiter': return <Gear name='Arbiter'/>
          case 'Winged Assasin': return <Gear name='Winged Assasin'/>
          case 'Aranea': return <Gear name='Aranea'/>
          case 'Undertaker': return <Gear name='Undertaker'/>
          case 'Reaper': return <Gear name='Reaper'/>
          default: return <Gear name={this.right}/>
        }
      }),
      color: 1
    })
  }
}
export default HeroObservables