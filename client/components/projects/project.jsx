import React from 'react'
import ReactDOM from 'react-dom'
import Styles from '../css/work.css'
import Links from './projectLinks.jsx'
import Back from '../assets/icons/back.js'
import Web from '../assets/icons/earth.js'
import Github from '../assets/icons/github.js'
import {Link} from 'react-router'
export default React.createClass({
     propTypes: {
            back: React.PropTypes.func,
            title: React.PropTypes.string,
            description: React.PropTypes.array,
            imgs: React. PropTypes.array,
            live: React.PropTypes.string,
            github: React.PropTypes.string
    },
	clickTile: function(title){
		this.setState({project: title})
		console.log(this.state.project)

	},
    render: function() {
        var project = this.props
        return ( 
    		<div>
                <Link className={Styles.backButton}to="/work" onClick={this.props.back}><Back/><span>go back</span></Link>
                <div id="project">
                    <p className={Styles.projectTitle}>{project.title}</p>
                    <Links github={project.github} live={project.live}/>
                    <img className={Styles.mainImage} src={"../../" + project.imgs[1]}/>
                    <p className={Styles.descr}>{project.description[1]}</p>
                </div>
            </div>
        )
    }
})