import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Segment, Image, List, Divider } from 'semantic-ui-react'
import Slider from 'react-slick'


import Helmet from '../assets/helmet.svg'
import Armor from '../assets/armor.svg'
import Boot from '../assets/boot.svg'
import Sword from '../assets/sword.svg'
import Necklace from '../assets/necklace.svg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



const segment = {
  background: 'rgba(0,0,0,0.8)',
  height: 'auto',
  width: 'auto',
  padding: 0,
  // border: '1px solid red'
}


const title = {
  color: '#ffd454',
  fontFamily: 'Spectral SC, serif',
  fontSize: 10,
  maxWidth: '21ch',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap'
}
const text = {
  color: '#eee',
  fontWeight: 'bold',
  fontSize: 8,
  height: 1,

}
const desc = {
  color: '#999',
  fontSize: 8,
  maxWidth: '21ch',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap'
}
const values = {
  color: '#eee',
  width: 50,
  fontSize: 9,
  textAlign: 'right',
}
const colors = {
  grey:  {color: '#666'},
  white:  {color: '#eee'},
  green:  {color: '#34bf49'},
  blue:  {color: '#0099e5'},
  purple:  {color: '#8e43e7'},
  gold:  {color: '#ffd900'}
}

const svg = [Helmet, Armor, Boot, Sword, Necklace, Necklace, Necklace]
const list = {height: 100}

const gear = observer (
  class Gear extends Component {
    constructor(props){
      super(props)
      this.getSlide = this.getSlide.bind(this)
    }
   getSlide(slide){
    //  this.refs.slider.slickGoTo(slide)
   }
   getValues(a,b,c,d,e,f){
    //  this.getSlide(this.props.color)
    const settings = {
      arrows: false,
      infinite: true,
      dots: false,
      speed: 500,
      vertical: false,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: false,
      centerMode: false,
      slidesToScroll: 1,
      slidesToShow: 1,
      ...this.props.slide
    }
    
    
     return <Slider ref={c => this.slider = c } {...settings}>
      <div style={colors.grey}>{a}</div>
      <div style={colors.white}>{b}</div>
      <div style={colors.green}>{c}</div>
      <div style={colors.blue}>{d}</div>
      <div style={colors.purple}>{e}</div>
      <div style={colors.gold}>{f}</div>
     </Slider>
   }
    componentWillReceiveProps(){
      // this.refs.slider.slickGoTo(this.props.color)
      // console.log(this.refs.slider.slickGoTo(this.props.color))
      // this.slider.slickGoTo(this.props.color)
    }
    componentWillMount(){
      // setTimeout(time=> {
      //   this.slider.slickGoTo(1)
      //   console.log(this.slider)
      // }, 2000)
      // this.slider.slickGoTo(this.props.color)
      // this.refs.slider.slick('slickGoTo', 1)
      // console.log(this.refs.slider)
    }
    componentDidUpdate(){
      // this.refs.slider.slickGoTo()
    }

    slide(){
      // this.refs.slider.innerSlider.slickGoTo(3)
    }

    getAttr(attr, sett){
      if (attr !== undefined){
        return attr.map(a=> (
          <List.Item key={a.key}>
            
              
                
                
                  
            <List.Content verticalAlign='middle' floated='right' style={values}>  
              {this.getValues(a.value[0],a.value[1],a.value[2],a.value[3],a.value[4],a.value[5],)}
              
            </List.Content>
              
              
            
            
            
            <List.Content verticalAlign='middle' style={text}>
              {a.name}
            </List.Content>
              
              
            
          </List.Item>
        ))
      }
    }

    getItems(){
      
      if (this.props.items !== undefined){
        return this.props.items.map(i=> (
          <List.Item key={i.key}>
            <Image avatar src={svg[i.key]} size='mini'/>
            <List.Content>
              <List.Header style={title}>{i.name}</List.Header>
              <List.Description style={desc}>{i.desc}</List.Description>
            </List.Content>
            <List.Content>
              <List size='mini' divided style={list}>{this.getAttr(i.attr)}</List>
            </List.Content>
            <Divider/>
          </List.Item>
        ))
      }
    }

    
  
    render(){
      
      return (
        <div>
          <Segment style={segment}>
            <List selection verticalAlign='middle'>
              {this.getItems()}
            </List>
          </Segment>
  
          {/* {this.props.footer} */}
  
        </div>
      )
    }
  }
)
export default gear
