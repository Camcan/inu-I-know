import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, Link} from 'react-router'
import CSSModules from 'react-css-modules'
import Code from './components/code.jsx'
import Human from './components/human.jsx'
import Who from './components/human/who.jsx'
import AboutMe from './components/human/about.jsx'
import Work from './components/human/work.jsx'
import Project from './components/human/project.jsx'
import AppStyles from './components/css/app.css'
import Styles from './components/css/human.css'
import Footer from './components/footer.jsx'
import DB from './db.json'

var App = React.createClass({
	loadProjects: function(){

	},
    render: function() {
		var route = this.props.routes[this.props.routes.length-1].path
		console.log(route)
		var checkLoad = setInterval(function() {
	    	if (document.readyState === "complete") {
	    		loader(0)
	        	clearInterval(checkLoad)
	    	}
		}, 10)
		function setProgress(amt){
		  amt = (amt < 0) ? 0 : (amt > 1) ? 1 : amt;
		  document.getElementById("stop1").setAttribute("offset", amt);
		  document.getElementById("stop2").setAttribute("offset", amt);
		}

		loader(0)

		function loader(e) {
		  setProgress(e)
		  e += 0.01
		  if (e < 1) {
		    setTimeout(loader, 10, e)
		  } else {
				document.getElementById('loader-wrapper').className = "loaded"
		  }
		}
        return ( 
        	<div id="app" className={AppStyles.app}>
				<img className={Styles.logo} src={"../img/montagnes-white.svg"}/>
	        	{this.props.children}
	        	<Footer/>
        	</div>
        )
    }
})

ReactDOM.render( 
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
		    <IndexRedirect to="/de/who"/>
		    <Route name="human" path="/de/" component={Human}>
		    	<Route name="who" path="/de/who" component={Who}/>
		     	<Route name="about" path="/de/about" component={AboutMe}/>
		     	<Route name="work" path="/de/work" component={Work} db={DB}>
		     		<Route name="project" path="/de/work/:title" handler={Work}/>
		     	</Route>
		    </Route>
	    </Route>
 	</Router>,
    document.getElementById('app')
)
console.log( typeof Code )
console.log("Bundle Success\n==============")