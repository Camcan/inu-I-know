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
    }
    render() {
        return ( 
        	<div className={Styles.fadeIn}>
                <h2>who?</h2>
                <div className={Styles.whoCol}>
                     <div className={[Styles.profileImg, Styles.mobile].join(" ")}></div>
		     <p>
                        Cam [Campbell Hawkes]
                     </p>
                     <p>
                        Security minded developer; skier, skater, & avid tree climber
                     </p>
                     <p>
                        I enjoy finding elegant solutions to complex problems & exploring states of flow.
                    </p>
                    <p>I work  with a great crue of developers & designers in Sydney, Australia, & can otherwise be found in the Southern Alps of New Zealand.
                     </p>
                     <Social className={Styles.socialButtons}/>    
                </div>
    		    <div className={[Styles.profileImg, Styles.desktop].join(" ")}></div>
            </div>
        )
    }
}
