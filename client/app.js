import React from 'react';
import ReactDOM from 'react-dom';
import { 
    withRouter, 
    BrowserRouter, 
    Route, 
    Redirect, 
    IndexRoute, 
    Link, 
    useRouterHistory,
    Switch
} from 'react-router-dom';
import { createHistory } from 'history';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import CSSModules from 'react-css-modules';
import Human from './components/human.jsx';
import Content from './components/content.jsx';
import AppStyles from './components/css/app.css';
import HumanStyles from './components/css/human.css';
import Footer from './components/page/footer.jsx';
import DB from './db.json';

class App extends React.Component{
    render(){
        const checkLoad = setInterval(()=>{
	    	if (document.readyState === "complete") {
	    		loader(0)
	        	clearInterval(checkLoad)
	    	}
		}, 10);
		const loader = (e)=>{
		  setProgress(e)
		  e += 0.01
		  if (e < 1) {
		    setTimeout(loader, 10, e)
		  } else {
				document.getElementById('loader-wrapper').className = "loaded"
		  }
		};

        const setProgress = (amt)=>{
		  amt = (amt < 0) ? 0 : (amt > 1) ? 1 : amt;
		  document.getElementById("stop1").setAttribute("offset", amt);
		  document.getElementById("stop2").setAttribute("offset", amt);
		};
		loader(0);
        return ( 
        	<div id="app" className={AppStyles.app}>
	        	<Human>
                    {this.props.children}
	        	</Human>
                <Footer/>
        	</div>
        )
    }
};



ReactDOM.render( 
	<BrowserRouter basename="/de">
        <App>
            <Content />
        </App>
 	</BrowserRouter>,
    document.getElementById('app')
)
console.log( typeof Code )
console.log("Bundle Success\n==============")
