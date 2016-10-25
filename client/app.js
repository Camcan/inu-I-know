import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, Link} from 'react-router'
import CSSModules from 'react-css-modules'
import Code from './components/code.jsx'
import Human from './components/human.jsx'
import Home from './components/landing.jsx'
import AppStyles from './components/css/app.css'
import HumanStyles from './components/css/human.css'
import Who from './components/human/who.jsx'
import AboutMe from './components/human/about.jsx'
import Work from './components/human/work.jsx'
var Styles
var App = React.createClass({
    render: function() {
		var route = this.props.routes[this.props.routes.length-1].path
		console.log(route)
		if (route == "/human"){
			Styles = HumanStyles
		} else {
			Styles = AppStyles
		}
        return ( 
        	<div id="app" className={AppStyles.app}>
        		<div className={Styles.head}>
					 <img className={Styles.logo} src={"./img/montagnes-white.svg"}/>
				 </div>
	        	{this.props.children}
        	</div>
        )
    }
})

ReactDOM.render( 
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
		    <IndexRedirect to="home"/>
		    <Route path="/home" component={Home}/>
		    <Route path="/code" component={Code}/>
		    <Route path="/human" component={Human}>
		    	<Route path="/human/who" component={Who}/>
		     	<Route path="/human/about" component={AboutMe}/>
		     	<Route path="/human/work" component={Work}/>
		    </Route>
	    </Route>
 	</Router>,
    document.getElementById('app')
)
console.log( typeof Code )
console.log("Bundle Success\n==============")