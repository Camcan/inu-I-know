import React from 'react'
import ReactDOM from 'react-dom'

var App = React.createClass({
    render: function() {
        return (
        	<div>
            <h1>{this.props.greeting}</h1>
            </div>
        )
    }
})
ReactDOM.render(
	<App greeting = "KINDA REACTIVE" />,
    document.getElementById('app')
)
console.log("I read")
