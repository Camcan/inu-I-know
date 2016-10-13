import React from 'react'
import ReactDOM from 'react-dom'
import Cursor from './blinking-cursor.jsx'
import Styles from './css/prompt.css'

var hide = Styles.hideInput

function del(str){
	return str.substring(0, str.length-1)
}

export default React.createClass({
	propTypes: {
		command: React.PropTypes.string,
		active: React.PropTypes.bool
	},
	getInitialState: function() {
		return {
			input: "",
			focus: this.props.active
		} 
	},
	componentDidMount: function() {
       this.focusInput()
       window.addEventListener('mouseup', function(event){
			var prompt = document.getElementById('')
			if (event.target != prompt && event.target.parentNode != prompt){
				console.log(self)
	        	this.setState({focus: false})
		    }
		}.bind(this))
		if (this.props.command){
			this.typeCommand(this.props.command)
		}
    },
    typeCommand: function(string, callback, i=0){
		if (i < string.length){
			i++
			var text = string.slice(0, i)
			console.log(text)
 			setTimeout(function(){
				this.setState({input: text})
				this.typeCommand(string, callback, i)
 			}.bind(this), 80)
		} else {
  			console.log("END")
  			// callback()
		}
    },
	focusInput: function(){
		if (this.props.active == true) {
			ReactDOM.findDOMNode(this.refs.commandInput).focus()
			this.state.focus = true
		}
	},
	typeText: function(e){
		e = e || window.event
		var code = e.keyCode || e.which
		var key = String.fromCharCode(code)
		var input = this.state.input
		if (code == 8) {
			input = del(input)
		} else {
			input += key
		}
		this.setState({input: input})
	},
	render: function(){
		return (
			<h1 id="prompt">root@vm ~ $ 
				<span onClick={this.focusInput}>
					<input onKeyDown={this.typeText} ref="commandInput" className={hide} />
					{this.state.input}
					<Cursor focus={this.state.focus}/>
				</span>
			</h1>
		)
	}
})