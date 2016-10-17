import React from 'react'
import {Link} from 'react-router'
import Social from './social-links.jsx'
import Styles from './css/code.css'

var indent1 = Styles.indent1
var social = Styles.socialButtons
export default React.createClass({
    render: function() {
        return ( 
	            <div className="output">
					<h2>
						{"{"}
					</h2>
					<div id="profile" className={indent1}>
						<h2>
							Description:
						</h2>
					    <h3 id="desc" className={indent1}> 
					    	'A web developer based in Wellington, New Zealand. I am passionate about building a more open internet. Inquiries welcome.',
						</h3>
						<h2>
							Detail: <Link id="CV-btn" to="pdf/CampbellHawkes-CV--23-5-16.pdf" className="button">C.V.</Link>,
						</h2>
						<h2 id="portfolio-link">
								Projects: <Link to="/projects"> {"{...}"}</Link> ,</h2>
						<h2>Contact: [</h2>
							<Social className={indent1, social}/>
						<h2>]</h2>
					</div>
					<h2>
						{"}"}
					</h2>
	            </div>
	          

        )
    }
})