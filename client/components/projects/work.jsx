import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Tile from './tile.jsx';
import Project from './project.jsx';
import Styles from '../css/work.css';
import DB from '../../db.json';

export default class Work extends Component {
    constructor(props){
        super(props);
        this.state = {
                title: null,
                project: null,
                menu: true,
                pageContents: this.getMenu
        };
        this.selectProject = this.selectProject.bind(this);
        this.mouseoverTile = this.mouseoverTile.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }
    componentDidMount() {
        console.log(this.props.db)
        this.setState({projects: DB.projects })
        console.log(this.state.projects)
    }
    mouseoverTile(title){
        this.setState({title: title})
        console.log(this.state.project)
    }
    selectProject(project){
        window.scroll(0,0);
        this.setState({project: project,
            menu: false
        })
    }
    showMenu(){
        window.scroll(0,0);
        this.setState({menu: true});
    }
    render() {
        var titleStyle = ""
        if (this.state.projects) {
            // this.setState({projects: this.props.db.projects })
            if (this.state.menu) {
                titleStyle = Styles.myWork
                this.state.pageContents = <div className={Styles.tiles}>
                        {
                            this.state.projects.map(project => (
                                <Link to={`/work/${project.title}`}>
                                    <Tile project={project} 
                                        passTitle={this.mouseoverTile} 
                                        select={this.selectProject                                                  }/>
                                </Link>
                            ))
                        }
                    </div>
            } else {
                titleStyle = Styles.myWorkProject
                this.state.pageContents = <Project 
                                            title={this.state.project.title}
                                            description={this.state.project.desc}
                                            imgs={this.state.project.imgs}
                                            github={this.state.project.link.github}
                                            live={this.state.project.link.live}
                                            back={this.showMenu}
                                        />
            }
        }
        return ( 
    		<div className={Styles.projectsContainer}>
                <h2 className={titleStyle}>my work</h2>
               {this.state.pageContents}
               <h1 className={Styles.bgTitle}>{this.state.title}</h1>
            </div>
        )
    }
};

