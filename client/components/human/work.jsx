import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import Tile from './tile.jsx'
import Project from './project.jsx'
import HumanStyles from '../css/human.css'
import DB from '../../db.json'

export default React.createClass({
    propTypes: {
        db: React.PropTypes.object
    },
    getInitialState: function(){
            return{
                title: null,
                project: null,
                menu: true,
                pageContents: this.getMenu
            } 
    },
    componentDidMount: function() {
        console.log(this.props.db)
        this.setState({projects: DB.projects })
        console.log(this.state.projects)
    },
    mouseoverTile: function(title){
        this.setState({title: title})
        console.log(this.state.project)
    },
    selectProject: function(project){
        this.setState({project: project,
            menu: false
        })
    },
    showMenu: function(){
        this.setState({menu: true})
    },
    render: function() {
        if (this.state.projects) {
            // this.setState({projects: this.props.db.projects })
            if (this.state.menu) {
                    this.state.pageContents = 
                        <div id="tiles">
                            {this.state.projects.map(project => (
                                <Link to={`/human/work/${project.title}`}><Tile project={project} passTitle={this.mouseoverTile} select={this.selectProject}/></Link>
                            ))}
                        </div>
            } else {
                this.state.pageContents =<Project title={this.state.project.title} description={this.state.project.desc} imgs={this.state.project.imgs} back={this.showMenu}/>
            }
        }
        return ( 
    		<div className={HumanStyles.center}>
                <h2>My Work</h2>
               {this.state.pageContents}
               <h1 className={HumanStyles.bgTitle}>{this.state.title}</h1>
            </div>
        )
    }
})

