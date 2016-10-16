import React from 'react'
import ReactDOM from 'react-dom'
import Cursor from './blinking-cursor.jsx'
import Styles from './css/prompt.css'
import Terminal from './scripts/terminal.jsx'

var hide = Styles.hideInput

function del(str){
	return str.substring(0, str.length-1)
}

function ReplaceContentInContainer(selector, content) {
  var nodeList = document.querySelectorAll(selector);
  for (var i = 0, length = nodeList.length; i < length; i++) {
     nodeList[i].innerHTML = content;
  }
}

ReplaceContentInContainer(".theclass", "HELLO WORLD");

export default React.createClass({
	propTypes: {
		command: React.PropTypes.string,
		active: React.PropTypes.bool,
		output: React.PropTypes.element
	},
	getInitialState: function() {
		return {
			input: "",
			focus: this.props.active,
		} 
	},
	componentDidMount: function() {
       this.focusInput()
       window.addEventListener('mouseup', function(event){
			if (event.target != this && event.target.parentNode != this){
				console.log(self)
	        	this.setState({focus: false})
		    } else this.setState({focus:true})
		}.bind(this))
		if (this.props.command){
			this.typeCommand(this.props.command, this.props.output)
		}
    },
    typeCommand: function(string, output, i=0){
		if (i < string.length){
			i++
			var text = string.slice(0, i)
			console.log(text)
 			setTimeout(function(){
				this.setState({input: text})
				this.typeCommand(string, output, i)
 			}.bind(this), 80)
		} else {
  			console.log("END")
  			this.setState({output: output})
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
			<div>
				<h1 id="prompt">root@vm ~ $ 
					<span onClick={this.focusInput}>
						<input onKeyDown={this.typeText} ref="commandInput" className={hide} />
						{this.state.input}
						<Cursor focus={this.state.focus}/>
					</span>
				</h1>
				{this.state.output}
			</div>
		)
	}
})