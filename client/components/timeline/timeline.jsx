import React, {Component} from 'react'
import ExecutionEnvironment from 'exenv'

import Styles from '../css/timeline.css'
import Rectangle from '../assets/shapes/rectangle.jsx'
import Circle from '../assets/shapes/circle.jsx'


const timeline = [
    {
      title: "Metamorphic Studios",
      slug: "meta",
      period: "July 2017 - present",
      logo: "../img/work/meta/meta.png",
      brief: [],
      description: [],
    },
    {
      title: "Freelance Work",
      slug: "freelance",
      period: "August 2016- July 2017",
      logo: "../img/montagnes-white.svg"
    }

]



export default class Timeline extends Component {
   constructor(props){
      super(props)
      this.state = {
         ...props,
         transition: false,
         selectedProject: timeline[0].slug
      }
      this.handleScroll = this.handleScroll.bind(this)
   }
   componentDidMount() {
      if (ExecutionEnvironment.canUseDOM) {
         document.addEventListener('scroll', this.handleScroll);
         console.log("CAN USE DOM")
      }
   }
   componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
   }
   handleScroll(){
       console.log("SCRILLING")
      const projects = [].slice.call(document.getElementsByClassName(Styles.item))
      let selection = [1000];
      for (var i = 0; i < projects.length; i++){
         let item = [projects[i].getBoundingClientRect().top, projects[i].dataset.slug]
         if (item[0] > 200 && item[0] < selection[0]){
            selection = item
         } 
      }
      if (selection[1] !== this.state.selectedProject && selection[1]){
         this.setState({selectedProject: selection[1] })
         console.log("Showing:", this.state.selectedProject)
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
               <p className={Styles.year}>
                  2017
               </p>
               <p className={Styles.year}>
                  2016
               </p>
               <p className={Styles.year}>
                  2015
               </p>
            </div>
            <div className={Styles.items}>
               {
                  timeline.map((item)=>{
                     return (
                        <div data-slug={item.slug} className={Styles.item}>
                           <div className={Styles.branch}>
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
                           <div className={Styles.logo}>
                              <img src={item.logo} />
                           </div>
                           <div className={[
                                    Styles.content,
                                    ((this.state.selectedProject == item.slug) ? Styles.reveal : "")
                                 ].join(" ")}>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      )
   }
}
