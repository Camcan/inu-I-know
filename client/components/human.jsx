import React from 'react'
import Styles from './css/human.css'
import Social from './social-links.jsx'
import {Link} from 'react-router'

var navStyle = Styles.nav
var hide = Styles.hide
export default React.createClass({
	componentDidMount: function(){
		setTimeout(function(){document.getElementById("nav").className = navStyle;},2000);
	},
    render: function() {
        return ( 
        	<div>
	        	<div style={{opacity: 0 + "!important"}}className={Styles.head}>
		            <h1 >Cam, a human</h1> 
	            </div>
	            <div id="nav" className={hide}>
	            	<Link to="/human/who">Who?</Link>
	            	<Link to="/human/about">Me</Link>
	            	<Link to="/human/work">My Work</Link>
            	</div>
	            {this.props.children}
	            <Social className={Styles.socialButtons}/>
	        </div>
        )
    }
})