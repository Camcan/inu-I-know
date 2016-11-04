import React from 'react'
import Styles from './css/human.css'
import {Link} from 'react-router'
import Nav from './nav.jsx'

var navStyle = Styles.nav
var hide = Styles.hide
export default React.createClass({
	componentDidMount: function(){
	},
    render: function() {
        return ( 
        	<div>
		<script>
		document.getElementById("content").addEventListener("click", function(e){
       
            console.log(this)
       
    	})
    	</script>
	        	<div style={{opacity: 0 + "!important"}}className={Styles.head}>
		            <h1 >Cam; human</h1> 
		          <Nav/>
	            </div>
	          <div className={Styles.center}>
	            {this.props.children}
	            </div>
	        </div>
        )
    }
})