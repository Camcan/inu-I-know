import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, Link} from 'react-router'
import Social from '../social-links.jsx'
import HumanStyles from '../css/human.css'

export default React.createClass({
    render: function() {
        return ( 
        	<div className={HumanStyles.center}>
                    <h2>who?</h2>
                <div className={HumanStyles.whoCol}>
                    <p>Cam (Campbell Hawkes); 20, Web Developer</p>
                    <p>Completed the bootcamp provided by Enspiral Dev Academy, and have been doing stuff for and in agency with Enspiral for the past six months</p>
                </div>
                <div className={HumanStyles.whoCol}>
        		      <div className={HumanStyles.profileImg}></div>
                    <p>Enjoying life in Wellington while immersing myself in different environments.</p>
                    <p>Currently looking for a full-time position.</p>
                    <Social className={HumanStyles.socialButtons}/>
                </div>
        	</div>
        )
    }
})