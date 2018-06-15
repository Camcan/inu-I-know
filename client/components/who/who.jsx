import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, Link} from 'react-router'
import Social from '../social/social-links.jsx'
import Styles from '../css/who.css'

var show = true
export default class Who extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
    
    }
    componentWillEnter() {
        console.log("Preload", this)
    }
    render() {
        return ( 
        	<div className={Styles.fadeIn}>
                <h2>who?</h2>
                <div className={Styles.whoCol}>
                     <div className={[Styles.profileImg, Styles.mobile].join(" ")}></div>
		     <p>
                        Cam (Campbell Hawkes)
                     </p>
                     <p>
                        Developer; skier, skater, & avid tree climber
                     </p>
                     <p>
                        Will code for grapes.
                     </p>
                     <p>
                        Reductionist problem solving; pragmatism and flow.
                     </p>  
                     <p>
                        Most of my time is split between the Southern Alps and Wellington, New Zealand.
                     </p>
                     <Social className={Styles.socialButtons}/>    
                </div>
                <div className={Styles.whoCol}>
                
    		      <div className={[Styles.profileImg, Styles.desktop].join(" ")}></div>
        	</div>
            </div>
        )
    }
}
