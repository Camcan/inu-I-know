import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, Link} from 'react-router'

export default React.createClass({
    render: function() {
        return ( 
        	<div id="footer" className={"highlight"}>
                <div className={"left"}>
                    <a href="#">mr.campbell.hawkes@gmail.com</a>
                </div>
                <div className={"right"}>
                    <a href="#">camcan</a>
                </div>
        	</div>
        )
    }
})