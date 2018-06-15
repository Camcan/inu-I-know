import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { 
    withRouter, 
    BrowserRouter, 
    Route, 
    Redirect, 
    IndexRoute, 
    Link, 
    useRouterHistory,
    Switch
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Who from './who/who.jsx';
import Work from './projects/work.jsx';
import Timeline from './timeline/index.jsx';
import Project from './projects/project.jsx';
import DB from '../db.json';

class Content extends Component {
    render(){
        
        const timeout = { enter: 300, exit: 0 };
        
        return (
            <TransitionGroup>
                <CSSTransition key={this.props.location.key} 
                    classNames="fadeTransition" 
                    timeout={700}
                    mountOnEnter={true}
                    unmountOnExit={true}> 
                    <Switch location={this.props.location}>
                        <Redirect exact from="/" to="/who" />
                        <Route name="who" path="/who" component={Who} />
                        <Route name="work" path="/work" component={Work} />
                        <Route name="project" path="/work/:title" component={Work} db={DB} />
                        <Route name="timeline" path="/history" component={Timeline} />
                    </Switch> 
                </CSSTransition>
	        </TransitionGroup>
        );
    }
};

export default withRouter(Content);
