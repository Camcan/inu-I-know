import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Code from './components/code.jsx'
import About from './components/human.jsx'

var App = React.createClass({
    render: function() {
        return ( 
        	<div>
            <h1>{this.props.greeting || 'SUUPER REACTIVE'}</h1> 
            </div>
        )
    }
})

ReactDOM.render( 
	<Router history={hashHistory}>
	    <Route path="/" component={App}/>
	    <Route path="/code" component={Code || App}/>
	    <Route path="/about" component={About}/>
 	</Router>,
    document.getElementById('app')
)
console.log( typeof Code )
console.log("Bundle Success\n==============")