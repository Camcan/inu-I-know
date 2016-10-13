import React from 'react'
import Prompt from './prompt.jsx'
import CamObj from './cam-object.jsx'
import {Link} from 'react-router'
export default React.createClass({
	onKeyPress: function(){
		
	},
    render: function() {
        return ( 
        	<div>
            	<Prompt active={false} command={"Campbell_Hawkes"}/>
	            <CamObj/>
	            <Prompt active={true}/>
            </div>

        )
    }
})