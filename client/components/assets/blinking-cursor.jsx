import React from 'react'
import ReactDOM from 'react-dom'
import CursorBlink from './css/prompt.css'

function del(str){
	return str.substring(0, str.length-1)
}
export default React.createClass({
	propTypes: {
		focus: React.PropTypes.bool
	},
	render: function(){
		var appear
		if (this.props.focus == true) {
			appear = CursorBlink.blink
		} else {
			appear = CursorBlink.hide
		}
		return (
			<span className={appear}>
				{ '\u2588'}
			</span>
		)
	}
})