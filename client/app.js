import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, BrowserRouter, Route, IndexRedirect, Link, useRouterHistory} from 'react-router-dom';
import { createHistory } from 'history';
import CSSModules from 'react-css-modules';
import Human from './components/human.jsx';
import Who from './components/who/who.jsx';
import Work from './components/projects/work.jsx';
import Timeline from './components/timeline/index.jsx';
import Project from './components/projects/project.jsx';
import AppStyles from './components/css/app.css';
import HumanStyles from './components/css/human.css';
import Footer from './components/page/footer.jsx';
import DB from './db.json';

var Styles;
class App extends React.Component{
    render(){
		var route = this.props.routes[this.props.routes.length-1].path
		console.log(route)
		var checkLoad = setInterval(function() {
	    	if (document.readyState === "complete") {
	    		loader(0)
	        	clearInterval(checkLoad)
	    	}
		}, 10)
		const setProgress = (amt)=>{
		  amt = (amt < 0) ? 0 : (amt > 1) ? 1 : amt;
		  document.getElementById("stop1").setAttribute("offset", amt);
		  document.getElementById("stop2").setAttribute("offset", amt);
		}

		loader(0)
		const loader = (e)=>{
		  setProgress(e)
		  e += 0.01
		  if (e < 1) {
		    setTimeout(loader, 10, e)
		  } else {
				document.getElementById('loader-wrapper').className = "loaded"
		  }
		}
		Styles = HumanStyles;
        return ( 
        	<div id="app" className={AppStyles.app}>
				<Link to="/who"><img className={Styles.logo} src={"../img/montagnes-white.svg"}/></Link>
	        	{this.props.children}
	        	<Footer/>
        	</div>
        )
    }
};



ReactDOM.render( 
	<BrowserRouter>
	    <Route path="/" component={withRouter(App)}>
		    <IndexRedirect to="who"/>
		    <Route name="human" path="/" component={Human}>
		    	<Route name="who" path="/who" component={Who}/>
		     	<Route name="work" path="/work" component={Work} db={DB}>
		     		<Route name="project" path="/work/:title" handler={Work}/>
		     	</Route>
            <Route name="timeline" path="/history" component={Timeline}/>
		    </Route>
	    </Route>
 	</BrowserRouter>,
    document.getElementById('app')
)
console.log( typeof Code )
console.log("Bundle Success\n==============")
