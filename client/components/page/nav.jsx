import React, {Component} from 'react'
import {withRouter, NavLink} from 'react-router-dom'
import Styles from '../css/nav.css'
import Back from '../assets/icons/back.js'

var navStyle = Styles.nav
var hide = Styles.hide

class Nav extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    componentDidMount(){
		setTimeout(()=>{
            document.getElementById("nav").className = navStyle + " highlight";
        },2000);
	}
    onClick(e){
        // e.preventDefault();
        console.log("Clicked Link:", e.target.href)
        // this.props.history.replace(e.target.href); 
        window.scroll(0,0);
    }
    render(){
    	if (this.props.home == true) {
    		return  <div id="nav" className={hide}>
		    			<Link to="/home">back home<Back/></Link>
	            	</div>
    	} else {
        return (
           <div id="nav" className={hide}>
			    	<NavLink onClick={this.onClick} to="/who" replace={false}>
                        who?
                    </NavLink>
		    		<NavLink onClick={this.onClick} to="/work" replace={false}>
                        projects
                    </NavLink>
                    <NavLink onClick={this.onClick} to="/history" replace={false}>
                        work
                    </NavLink>
            </div>
         )
    	}
    }
};
export default withRouter(Nav);
