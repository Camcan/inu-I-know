import React from 'react'
import ReactDOM from 'react-dom'
import Styles from '../css/human.css'
import Back from '../icons/back.js'
import {Link} from 'react-router'
export default React.createClass({
     propTypes: {
            back: React.PropTypes.func,
            title: React.PropTypes.string,
            description: React.PropTypes.string,
            imgs: React. PropTypes.array
    },
	clickTile: function(title){
		this.setState({project: title})
		console.log(this.state.project)

	},
    render: function() {
        var project = this.props
        return ( 
    		<div className={Styles.project}>
                <Link className={Styles.backButton}to="/human/work" onClick={this.props.back}><Back/><span>go back</span></Link>
                <div id="project">
                    <p className={Styles.projectTitle}>{project.title}</p>
                    <div className={Styles.mainImage} style={{backgroundImage: "url(../../"+project.imgs[1] + ")"}}></div>
                    <p>{project.description}</p>
                </div>
            </div>
        )
    }
})