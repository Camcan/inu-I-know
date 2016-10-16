import React from 'react'
import Prompt from './prompt.jsx'
import CamObj from './cam-object.jsx'
import {Link} from 'react-router'
export default React.createClass({
	componentdidmount: function(){ 
	},
    render: function() {
        return ( 
        	<div id="code">
            	<Prompt active={false} command={"Campbell_Hawkes"} output={<CamObj/>}/>
	            <Prompt active={true}/>
            </div>

        )
    }
}) 