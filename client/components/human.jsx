import React from 'react'
import Styles from './css/human.css'
import {Link} from 'react-router'
import Nav from './nav.jsx'

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
		            <h1 >Cam; human</h1> 
	            </div>
	          <Nav/>
	            {this.props.children}
	        </div>
        )
    }
})