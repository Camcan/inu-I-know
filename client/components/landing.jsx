import React from 'react'
import {Link} from 'react-router'
import Styles from './css/landing.css'
import Social from './social-links.jsx'

export default React.createClass({
	componentDidMount: function() {
		var right = document.getElementById('bgright')
		var left = document.getElementById('bgleft')
		var view = window.innerWidth
  		document.onmousemove = function(e){
  			var x = e.clientX,
        		y = e.clientY
        	
        		console.log("X:", x, "Y: ", y)
        	right.style.opacity =  x/view/2 
        	right.style.left = (0.5 + 2*x/view) + "%"
        	left.style.opacity = (view-x)/view + 0.2
  		}
    },
	render: function(){ 
		return(
			<div className={Styles.landing}>
				<div id="bgleft" className={Styles.bgLeft}></div>
				<div id="bgright" className={Styles.bgRight}></div>
				<div id="title">            
					<h1>{"I'm Cam"}</h1>
					<h2>a web developer</h2>
				</div>
				<div className={Styles.leftRotate}>
					<Link to="/code" >{"<Code/>"}</Link>
				</div>
				<div className={Styles.rightRotate}>
				    <Link to="/human">human</Link>
			    </div>
			    <Social className={Styles.socialButtons}/>
			</div>
		)
	}
})