import React from 'react'
import {Link} from 'react-router'
import Social from './social-links.jsx'

export default React.createClass({
    render: function() {
        return ( 
	            <div className="output">
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
						Detail: <Link id="CV-btn" to="pdf/CampbellHawkes-CV--23-5-16.pdf" className="button">C.V.</Link>,
					</h2>
					<h2 id="portfolio-link" className="indent1">
							Projects: <Link to="/projects"> {"{...}"}</Link> ,</h2>
					<h2 className="indent1">Contact: [</h2>
						<Social/>
					<h2 className="indent1">]</h2>
					<h2>{"}"}</h2>
	            </div>
	          

        )
    }
})