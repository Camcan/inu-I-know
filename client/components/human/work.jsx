import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, Link} from 'react-router'

import HumanStyles from '../css/human.css'

export default React.createClass({
    render: function() {
		
        return ( 
        		<div className={HumanStyles.center}>
                    <h2>My Work</h2>
                <div className={HumanStyles.tile}>
                </div>
                <div className={HumanStyles.tile}>
        		    
                </div>
        	</div>
        )
    }
})

