import React,{Component} from 'react'
import Styles from './css/human.css'
import {router, Link, browserHistory} from 'react-router'
import Nav from './page/nav.jsx'

var navStyle = Styles.nav
var hide = Styles.hide

export default class Human extends Component{
    constructor(props){
        super(props)
    }
	componentDidMount(){
		
	}
	navigate(){
		console.log("CENTER")
		const center = ()=>document.getElementsByClassName(Styles.center)[0];
		if (center()){
				center().classList.toggle(Styles.hide)
		} 

	}
    render(){
        return ( 
    	<div>
				<script>
				document.getElementById("content").addEventListener("click", function(e){
		       
		            console.log(this)
		       
		    	})
		    	</script>
	        	<div style={{opacity: 0 + "!important"}}className={Styles.head}>
		            <h1 >Cam; human</h1> 
		          <Nav transition={this.navigate}/>
	            </div>
	          <div className={Styles.center}>
	            {this.props.children}
	            </div>
	        </div>
        )
    }
}
