import React from 'react'
import Social from './social-links.jsx'
import Cursor from './blinking-cursor.jsx'
import {Link} from 'react-router'
export default React.createClass({
	onKeyPress: function(){
		
	},
    render: function() {
        return ( 
        	<div>
	            <h1>This is the Code</h1> 
	            <div id="code">
					<h2>
						{"{"}
					</h2>
					<div id="profile" className="indent1">
					<h2>
						Description:
					</h2>
				    <h3 id="desc" className="indent1"> 
				    	'A web developer based in Wellington, New Zealand. I am passionate about building a more open internet. Inquiries welcome.',
					</h3>
					</div>
					<h2 className="indent1">
						Detail: 
						<Link id="CV-btn" to="pdf/CampbellHawkes-CV--23-5-16.pdf" className="button">
							C.V.
						</Link>,
					</h2>
					<h2 id="portfolio-link" className="indent1">
							Projects: <Link to="/projects"> {"{...}"}</Link> ,
					</h2>
					<h2 className="indent1">
						Contact: [
					</h2>
					<Social/>
					<h2 className="indent1">
						]
					</h2>
					<h2>
					  	{"}"}
					</h2>
	            </div>
	            <h1>root@vm ~ $ <Cursor/></h1>
            </div>

        )
    }
})