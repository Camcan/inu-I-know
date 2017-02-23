import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, Link} from 'react-router'
import Social from '../social-links.jsx'
import Styles from '../css/who.css'

var show = true
export default React.createClass({
    componentDidMount: function() {
    },
    componentWillEnter: function() {
        console.log("Preload", this)
    },
    render: function() {
        return ( 
        	<div className={Styles.fadeIn}>
                <h2>who?</h2>
                <div className={Styles.whoCol}>
                    <p>Cam (Campbell Hawkes); 21, Web Developer</p>
                    <p>Completed the bootcamp provided by Enspiral Dev Academy, and have been doing stuff for and in agency with Enspiral for the past six months</p>
                </div>
                <div className={Styles.whoCol}>
                    <p>Enjoying life in Wellington while immersing myself in different environments.</p>
                    <p>Currently looking for a full-time position.</p>
                    <Social className={Styles.socialButtons}/>
                </div>
    		      <div className={Styles.profileImg}></div>
        	</div>
        )
    }
})