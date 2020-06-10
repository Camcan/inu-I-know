import React, {Component, Fragment} from 'react'
import ExecutionEnvironment from 'exenv'
import Styles from '../css/timeline.css'
import Rectangle from '../assets/shapes/rectangle.jsx'
import Circle from '../assets/shapes/circle.jsx'


const timeline = [
    {
        year: 2018,
        items: [
            {
              title: "Freelancing",
              slug: "freelance-1",
              period: "December 2017 - present",
              logo: "../img/montagnes-white.svg",
                brief: [
                    'Since December 2017, I have been working on a number of personal and commercial projects.',  
                    'Along with my ongoing projects, I am actively looking for opportunities to continue learning and growing. Get in touch.'
                ],
              description: []
            }
        ]
    },
    {
        year: 2017,
        items: [
            {
                title: "Metamorphic Studios",
                slug: "meta",
                period: "July - November 2017",
                logo: "../img/work/meta/meta.png",
                brief: [
                    "Metamorphic Development: An agile environment with a young and rapidly evolving, tight-knit team talented in storytelling, design and programming. The Studio's primary role is in consultation and development bespoke web and native solutions."
                ],
                description: []
            }
        ]
    },
    {
        year: 2016,
        items: [
            {
              title: "Freelance Work",
              slug: "freelance-2",
              period: "August 2016- July 2017",
              logo: "../img/montagnes-white.svg",
              brief: ["Throughout 2016 and early 2017 I was engaged in remote contract work in an Agile//SCRUM environment. The work was primarily around email campaigns and HTML templating for all email clients."]
            },
           {  title: "Enspiral Dev Academy",
              slug: "eda",
              period: "March - July 2016",
              logo: "../img/work/eda/eda-flag.png",
              brief: [
                 "During the early part of 2016, I held a part­time position supporting the teaching team for Enspiral Dev Academy’s in-house component of the course, shaping approaches to web­development concepts while offering technical guidance as students progressed through a NodeJS curriculum.",
              "The free­flowing nature of the position allowed me to take a great deal of initiative to provide the greatest value for students as they progressed through material, acting as a guide for their ‘design thinking’, and furthering their development of soft skills. This included leading mindfulness meditation sessions, pairing with students, and facilitating group discussions while maintaining traction of advancing technical knowledge."
                 ]
            }
        ]
    }

]



export default class Timeline extends Component {
   constructor(props){
      super(props)
      this.state = {
         ...props,
         transition: false,
         selectedProject: timeline[0].slug,
         initialPosition: null
      }
      this.handleScroll = this.handleScroll.bind(this)
   }
   componentDidMount() {
      if (ExecutionEnvironment.canUseDOM) {
         document.addEventListener('scroll', this.handleScroll);
      }
       this.setState({initialPosition: document.getElementsByClassName(Styles.container)[0].getBoundingClientRect()
       })
   }
   componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
   } 
    handleScroll(){
      
      let container = document.getElementsByClassName(Styles.container)[0];
       let offsetRatio = ( (this.state.initialPosition.top - container.getBoundingClientRect().top) / (container.getBoundingClientRect().height) + 0.1 )
      let selection = timeline[Math.round(offsetRatio*timeline.length)].slug
      if (selection !== this.state.selectedProject){
         this.setState({
            selectedProject: selection
         })
      }
   }
   render(){
      return(
         <div className={Styles.timeline}>
            <div className={Styles.sidebar} />    
            <div className={Styles.node_start}>
                  <p className={Styles.present}>Present</p>
                 <Circle radius="10" fill="white" />
               </div>
               {timeline.map(yearObj => {
                   return (
                   <Fragment>
                   <p className={Styles.year}>
                       {yearObj.year}
                   </p>
            <div className={Styles.items}>
               {
                       yearObj.items.map(item =>(
                        <div data-slug={item.slug} className={[
                           Styles.item, 
                           (this.state.selectedProject == item.slug) ? Styles.selected : ""
                        ].join(" ")}>
                           <div className={[
                              Styles.branch,
                              ((this.state.selectedProject == item.slug) ? Styles.selectedBranch : "") 
                           ].join(" ")
                           }>
                             <p className={Styles.title}>
                                 {item.title}
                              </p>
                              <div className={Styles.node}>
                                 <Circle radius="10" fill="white" />
                                 <Rectangle style={{
                                    paddingTop: '7px',
                                    paddingLeft: '5px'
                                    }}
                                    width={(this.state.selectedProject == item.slug) ? "120px" : "100px"} 
                                    height="6px" 
                                    fill="white" 
                                 />
                              </div>
                              <p className={Styles.period}>
                                 {item.period}
                              </p>
                           </div>
                          <div className={[
                                    Styles.content,
                                    ((this.state.selectedProject == item.slug) ? Styles.reveal : "")
                                 ].join(" ")}>
                               <div className={Styles.logo}>
                                 <img src={item.logo} />
                              </div>
                                 <div className={Styles.brief}>
                                    <p className={Styles.title}>
                                    {item.title}
                                 </p>
                                    {item.brief.map((p)=>(<p>{p}</p>))}
                                 </div>
                           </div>
                        </div>
                       ))}
                    </div>
                </Fragment>
               )}
            )}
     </div>
    )}
}
