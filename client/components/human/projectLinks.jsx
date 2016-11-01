import React from 'react'
import ReactDOM from 'react-dom'
import Styles from '../css/projectLinks.css'
import Back from '../icons/back.js'
import Web from '../icons/earth.js'
import Github from '../icons/github.js'
export default React.createClass({
     propTypes: {
            live: React.PropTypes.string,
            github: React.PropTypes.string
    },
    render: function() {
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
})