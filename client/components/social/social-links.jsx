import {Component} from 'react'
import {Link} from 'react-router'

import GitHub from '../assets/icons/github.js'
import LinkedIn from '../assets/icons/linkedin'
import Twitter from '../assets/icons/twitter'
import Mobile from '../assets/icons/mobile'
import Envelope from '../assets/icons/envelope'

export default class SocialLinks extends Component{
	constructor(props){
        super(props);
    }
    render(){
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
};
