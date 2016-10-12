import React from 'react'
import ReactDOM from 'react-dom'
import CursorBlink from './cursor-blink.css'

var blink = CursorBlink.blink
var hide = CursorBlink.hideInput

export default React.createClass({
	propTypes: {
		typeCommand: React.PropTypes.func,
		command: React.PropTypes.func
	},
	getInitialState: function() {
		return {input: ""} 
	},
	typeText: function(e){
		e = e || window.event
		var key = String.fromCharCode(e.keyCode || e.which)
		console.log(key)
		var input = this.state.input
		if (key == 8) {
			input.pop()
		} else {
			input += key
		}
		this.setState({input: input})

	},
	focusInput: function(){
		ReactDOM.findDOMNode(this.refs.commandInput).focus()
	},
	componentDidMount: function() {
       this.focusInput()
    },
	render: function(){
		return (
			<span onClick={this.focusInput}>
				<input onKeyDown={this.typeText} ref="commandInput" className={hide} />
				{this.state.input}
				<span className={blink}>
					{ '\u2588'}
				</span>
			</span>
		)
	}
})