import React from 'react'
import {Link} from 'react-router'
import Styles from './css/landing.css'
import Social from './social-links.jsx'

export default React.createClass({
	componentDidMount: function() {
		var bg = document.getElementById('bg')
		var view = window.innerWidth
		console.log(bg)
  		document.onmousemove = function(e){
  			var x = e.clientX,
        		y = e.clientY
        		console.log("X:", x, "Y: ", y)
        	bg.style.width =  (x + view/2 ) + "px"
        	bg.style.transform = "rotate(" + y/20 + " deg)"
  		}
    },
	render: function(){
		return(
			<div className={Styles.landing}>
				<div id="bg" className={Styles.bg}></div>
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