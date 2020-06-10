import React,{Component} from 'react'
import Styles from './css/human.css'
import {router, Link, browserHistory} from 'react-router'
import Nav from './page/nav.jsx'
import GlitchText from './assets/glitch-text.jsx';

const navStyle = Styles.nav
const hide = Styles.hide

export default class Human extends Component{
	constructor(props){
		super(props)
	}
	navigate(){
		const center = document.getElementsByClassName(Styles.center)[0];
		center && center.classList.toggle(Styles.hide) 

	}
	render(){
		return ( 
			<div>
				<div style={{opacity: 0 + "!important"}}className={Styles.head}>
					<GlitchText className={Styles.logo} content={MontagnesLogo} />
					<GlitchText element="h1" content="Cam; human" /> 
					<Nav transition={this.navigate}/>
				</div>
				<div className={Styles.center}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

function MontagnesLogo({ className }){
	return <img className={className} src={"../../img/montagnes-white.svg"} />;
};
