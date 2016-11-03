import React from 'react'
import {Link} from 'react-router'

import GitHub from './icons/github.js'
import LinkedIn from './icons/linkedin'
import Twitter from './icons/twitter'
import Mobile from './icons/mobile'
import Envelope from './icons/envelope'

export default React.createClass({
	propTypes: {
		className: React.PropTypes.string
	},
	render: function(){
		return (
			<div id="socialButtons" className={this.props.className}>
					<a href="//github.com/camcan">
						<GitHub/>
					</a>
					<a href="//nz.linkedin.com/in/campbell-hawkes-1b557210b">
						<LinkedIn/>
					</a>
					<a href="https://twitter.com/letters_to_cam">
						<Twitter/>
					</a>
					<a href="tel:+64278418623">
					<Mobile/>
					</a>
					<a href="mailto:mr.campbell.hawkes@gmail.com">
						<Envelope/>
					</a>
			</div>
		)
	}
})