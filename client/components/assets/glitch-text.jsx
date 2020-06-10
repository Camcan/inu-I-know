import React from 'react';
import Styles from '../css/glitch.css';

export default function GlitchText({ content, element, onHover, className = '' }) {
	const Element = element || 'div';
	const glitchClass = Styles[onHover ? 'glitchOnHover' : 'glitch'];
	
	if (typeof content === 'string') return (
		<Element className={`${glitchClass} ${Styles.glitchText} ${className} `} data-text={content}>
			{content}
		</Element>
	);
	
	const Component = content;

	return (
		<Element className={className}>
			<Component className={glitchClass} />
			<Component className={Styles.glitchShadow} />
		</Element>
	);
};
