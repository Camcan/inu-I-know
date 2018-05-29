import React from 'react'
import ReactDOM from 'react-dom'
import Styles from '../css/work.css'
import Links from './projectLinks.jsx'
import Back from '../assets/icons/back.js'
import Web from '../assets/icons/earth.js'
import Github from '../assets/icons/github.js'
import NetworkContainer from '../network/index.js';
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
                <div className={Styles.project}>
                    <p className={Styles.projectTitle}>{project.title}</p>
                    <Links github={project.github} live={project.live}/>
                    <p className={Styles.blerb}>{project.description[0]}</p>
                    <div className={Styles.mainImageContainer}>
                    <img className={Styles.mainImage} src={"../../" + project.imgs[1]}/>
                    </div>
                    <div className={Styles.content}>
                        <p className={Styles.descr}>
                           {project.description[1]}
                        </p>
                        { 
                           (project.imgs[2])? <img className={Styles.secondImage} src={"../../" + project.imgs[2]}/> : null
                        }
                        
                    </div>
                    {
                        (project.title == 'Beer?') ? <NetworkContainer /> : null                    }
                  </div>
            </div>
        )
    }
})
