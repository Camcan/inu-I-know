import React from 'react'
import Styles from './css/nav.css'
import {Link} from 'react-router'
import Back from './icons/back.js'

var navStyle = Styles.nav
var hide = Styles.hide
export default React.createClass({
	propTypes: {
        transition: React.PropTypes.func
    },
	componentDidMount: function(){
		setTimeout(function(){document.getElementById("nav").className = navStyle + " highlight";},2000);
	},
    render: function() {
    	if (this.props.home == true) {
    		return  <div id="nav" className={hide}>
		    			<Link to="/home">back home<Back/></Link>
	            	</div>
    	} else {
        return <div id="nav" className={hide}>
			    	<Link onClick={() => this.props.transition()} to="/who">who?</Link>
		    		<Link onClick={() => this.props.transition()} to="/work">my work</Link>
            	</div>
    	}
}})