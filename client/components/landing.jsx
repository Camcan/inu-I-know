import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
	render: function(){
		return(
			<div>
				<div id="title">            
					<h1>{"I'm Cam"}</h1>
					<h2>a web developer</h2>
				</div>
				<div className="left-rotate">
					<Link to="/code" >{"<Code/>"}</Link>
				</div>
				<div className="right-rotate">
				    <Link to="/about">About</Link>
			    </div>
			    <div id="social-links">
			    </div>
		   </div>
		)
	}
})