import React from 'react'
import ReactDOM from 'react-dom'
import HumanStyles from '../css/human.css'
export default React.createClass({
    propTypes: {
            passTitle: React.PropTypes.func,
            select: React.PropTypes.func,
            project: React.PropTypes.object,
    
    },
    handleMouseover: function() {
        this.props.passTitle(this.props.project.title)
    },
    handleClick: function() {
        this.props.select(this.props.project)
    },
    render: function() {
        return (
              <div id={this.props.title} className={HumanStyles.tile} onMouseEnter={this.handleMouseover} onClick={this.handleClick}>
                    <img src={"../../"+this.props.project.imgs[0]}/>
                </div>
        );
    }
});