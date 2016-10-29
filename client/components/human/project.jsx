import React from 'react'
import ReactDOM from 'react-dom'
import HumanStyles from '../css/human.css'
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
    		<div className={HumanStyles.center}>
                <Link to="/human/work" onClick={this.props.back}>Back</Link>
                <div id="project">
                    <p>{project.title}</p>
                    <p>{project.description}</p>
                    <img src={"../../"+project.imgs[1]}/>
                </div>
            </div>
        )
    }
})