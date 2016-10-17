import React from 'react'
import {Link} from 'react-router'
import Styles from './css/landing.css'
import Social from './social-links.jsx'

export default React.createClass({
	render: function(){
		return(
			<div className={Styles.landing}>
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