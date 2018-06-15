import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Styles from '../css/projectLinks.css'
import Back from '../assets/icons/back.js'
import Web from '../assets/icons/earth.js'
import Github from '../assets/icons/github.js'

export default class ProjectLinks extends Component { 
    constructor(props){
        super(props);
    }
    render() {
        var project = this.props
        var live
        var gh
        if (project.github) {
            gh =    <a href={project.github}>
                        <p className={Styles.projectLink}>View on Github <Github/></p>
                    </a>
        }
        if (project.live) {
            live =  <a href={project.live}>
                         <p className={Styles.projectLink}>View Live <Web/></p>
                    </a>
        }
        return ( 
                    <div className={Styles.projectLinks}>
                        {gh}
                        {live}
                    </div>
        )
    }
};
