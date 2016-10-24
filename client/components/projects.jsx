import React from 'react'
import Styles from './css/code.css'
import DB from '../db.js'
export default React.createClass({
    render: function() {
        return ( 
        	 <div className="portfolio">
					<div id="profile" className={indent1}>
					
						<h2 id="portfolio-link">
								{"Projects: {"}
						</h2>
						<h2 className={indent2}>
							 {db.projects.map(function(item, i){
        						return <h2>{item.name},</h2>
   							 })}
						</h2>
					</div>
	            </div>
        )
    }
})