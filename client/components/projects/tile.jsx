import {Component} from 'react'
import ReactDOM from 'react-dom'
import Styles from '../css/work.css'

export default class Tile extends Component { 
    constructor(props){
        super(props);
    }
    handleMouseover() {
        this.props.passTitle(this.props.project.title)
    }
    handleClick() {
        this.props.select(this.props.project)
    }
    render() {
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
};
