import React, {Component} from 'react'

import Styles from '../css/timeline.css'
import Rectangle from '../assets/shapes/rectangle.jsx'
import Circle from '../assets/shapes/circle.jsx'


const timeline = [
    {
      title: "Metamorphic Studios", 
      period: "July 2017 - present"
    },
    {
      title: "Freelance Work", 
      period: "August 2016- July 2017"
    }

]



export default class Timeline extends Component {
   constructor(props){
      super(props)
      this.state = {
         ...props,
         transition: false
      }
   }
   render(){
      return(
         <div className={Styles.timeline}>
            <div className={Styles.sidebar}>
               <div className={Styles.node_start}>
                  <p>Present</p>
                 <Circle radius="10" fill="white" />
               </div>
            </div>
            <div className={Styles.items}>
               {
                  timeline.map((item)=>{
                     return (
                        <div className={Styles.item}>
                          <p className={Styles.title}>
                              {item.title}
                           </p>
                           <div className={Styles.node}>
                              <Circle radius="10" fill="white" />
                              <Rectangle style={{
                                 paddingTop: '7px',
                                 paddingLeft: '5px'
                                 }}
                                 width="100px" 
                                 height="6px" 
                                 fill="white" 
                              />
                           </div>
                           <p className={Styles.period}>
                              {item.period}
                           </p>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      )
   }
}
