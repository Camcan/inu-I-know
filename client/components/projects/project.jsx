import React, {Component} from 'react'
import Styles from '../css/work.css'
import Links from './projectLinks.jsx'
import Back from '../assets/icons/back.js'
import Web from '../assets/icons/earth.js'
import Github from '../assets/icons/github.js'
import NetworkContainer from '../network/index.js';
import {Link, withRouter} from 'react-router-dom'

class Project extends Component {
	constructor(props){
        super(props);
    }
    clickTile(title){
		this.setState({project: title})
	}
    render(){
      var project = this.props
      return ( 
    		<div style={{height: 'auto'}}>
                <Link className={Styles.backButton} 
                    to="/work"
                    onClick={()=>{
                        this.props.back();
                    }}
                >   
                    <Back/><span>go back</span>
                </Link>
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
};
export default withRouter(Project);
