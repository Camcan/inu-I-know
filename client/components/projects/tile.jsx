import React from 'react'
import ReactDOM from 'react-dom'
import Styles from '../css/work.css'
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
            <div id={this.props.title} className={Styles.tileContainer} onMouseEnter={this.handleMouseover} onClick={this.handleClick}>
                  <div className={Styles.tile}>
                     <img src={"../../"+this.props.project.imgs[0]}/>
                   </div>
                  <div className={Styles.tileInfo}>
                     <p>{this.props.project.title}</p>
                  </div>
               </div>
        );
    }
});
