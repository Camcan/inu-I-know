import React from 'react'
import Styles from './css/nav.css'
import {Link} from 'react-router'

var navStyle = Styles.nav
var hide = Styles.hide
export default React.createClass({

	componentDidMount: function(){
		setTimeout(function(){document.getElementById("nav").className = navStyle;},2000);
	},
    render: function() {
    	if (this.props.home == true) {
    		return  <div id="nav" className={hide}>
		    			<Link to="/home">Back Home</Link>
	            	</div>
    	} else {
        return <div id="nav" className={hide}>
			    	<Link to="/human/who">Who?</Link>
		    		<Link to="/human/work">Work</Link>
	            	<Link to="/home">Home</Link>
            	</div>
    	}
}})