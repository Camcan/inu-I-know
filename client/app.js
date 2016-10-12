import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, Link} from 'react-router'
import CSSModules from 'react-css-modules'
import Code from './components/code.jsx'
import About from './components/human.jsx'
import Home from './components/landing.jsx'

var App = React.createClass({
    render: function() {
        return ( 
        	this.props.children
        )
    }
})

ReactDOM.render( 
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
		    <IndexRedirect to="home"/>
		    <Route path="/home" component={Home}/>
		    <Route path="/code" component={Code}/>
		    <Route path="/about" component={About}/>
	    </Route>
 	</Router>,
    document.getElementById('app')
)
console.log( typeof Code )
console.log("Bundle Success\n==============")