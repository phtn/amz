import React from 'react'
import { action, computed, extendObservable } from 'mobx'
import Gear from '../components/Gear'
import GearStore from './GearStore'

const gearStore = [GearStore.hunter,GearStore.gunslinger,GearStore.sentinel,GearStore.arbiter,GearStore.assasin, GearStore.aranea,GearStore.undertaker, GearStore.reaper]

class HeroObservables {
  constructor(){
    extendObservable(this, {
      // left: 'Hunter',
      // right: 'Sentinel',
      
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
          case 0: return <Gear items={gearStore[0]} slide={this.slideSettings} color={2}/>
          case 1: return <Gear items={gearStore[1]} slide={this.slideSettings}/>
          case 2: return <Gear items={gearStore[2]} slide={this.slideSettings}/>
          case 3: return <Gear items={gearStore[3]} slide={this.slideSettings}/>
          case 4: return <Gear items={gearStore[4]} slide={this.slideSettings}/>
          case 5: return <Gear items={gearStore[5]} slide={this.slideSettings}/>
          case 6: return <Gear items={gearStore[6]} slide={this.slideSettings}/>
          case 7: return <Gear items={gearStore[7]} slide={this.slideSettings}/>
          
          default: return <Gear items={gearStore[0]} slide={this.slideSettings}/>
        }
      }),
      rightColumn: computed(c=>{
        switch(this.rightStoreId){
          case 0: return <Gear items={gearStore[0]} slide={this.slideSettings} color={2}/>
          case 1: return <Gear items={gearStore[1]} slide={this.slideSettings} color={2}/>
          case 2: return <Gear items={gearStore[2]} slide={this.slideSettings} color={2}/>
          case 3: return <Gear items={gearStore[3]} slide={this.slideSettings}/>
          case 4: return <Gear items={gearStore[4]} slide={this.slideSettings}/>
          case 5: return <Gear items={gearStore[5]} slide={this.slideSettings}/>
          case 6: return <Gear items={gearStore[6]} slide={this.slideSettings}/>
          case 7: return <Gear items={gearStore[7]} slide={this.slideSettings}/>
          
          default: return <Gear items={gearStore[2]} slide={this.slideSettings}/>
        }
      }),

      slideSettings: computed((s)=> {
        return {
          arrows: false,
          infinite: false,
          dots: false,
          speed: 500,
          vertical: false,
          autoplay: false,
          autoplaySpeed: 3000,
          fade: true,
          ref: ref=> this.slider = ref
        }
      }),
    

      
      
      getColor: action(a=> {
        console.log(a)
        this.activeColor = a
      })

    })
  }
}
export default HeroObservables