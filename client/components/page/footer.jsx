import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, Link} from 'react-router'

export default React.createClass({
    render: function() {
        return ( 
        	<div id="footer" className={"highlight"}>
                <div className={"left"}>
                    <a href="mailto:campbell.hawkes@gmail.com">mr.campbell.hawkes@gmail.com</a>
                </div>
                <div className={"right"}>
                    <a href="https://github.com/camcan">camcan</a>
                </div>
        	</div>
        )
    }
})
