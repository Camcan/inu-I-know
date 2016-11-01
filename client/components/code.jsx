import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import Prompt from './prompt.jsx'
import CamObj from './cam-object.jsx'
import Styles from './css/code.css'
import Nav from './nav.jsx'
		// model={Binder.bindToState(this,"data","Employee.Contact.Email")}
export default React.createClass({
	getInitialState: function() {
		return {
			
		}
	},
	componentdidmount: function(){ 
		this.getInitialState()
	},
	terminal: function(){
	},
	execute: function(command){
		// ReactDOM.findDOMNode(this).innerHTML += Prompt
		this.setState({terminal: <Prompt active={true} execute={this.execute}/>})
		// ReactDOM.render(ReactDOM.findDOMNode(this).innerHTML + , ReactDOM.findDOMNode('#code'))
	},
    render: function() {
        return ( 
        	<div id="code" className={Styles.monotype}>
        		<link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet"/>
            	<Prompt active={false} command={"Campbell_Hawkes"} output={<CamObj/>} execute={this.terminal}/>
	            {this.state.terminal}
	                 <Nav home={true}/>
            </div>

        )
    }
}) 