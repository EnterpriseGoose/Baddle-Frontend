import type { Component } from 'solid-js';
import { Link } from 'solid-app-router';

import styles from './button.module.css';

// Styles:
// defualt - blue solid
// outline - white outline
// gray - gray
// blueOutline - blue outline
// text - no button, just text
const Button: Component<{
	link: string;
	style?: string;
	children: Element | string;
	className: string;
}> = (props) => {
	return (
		<Link href={props.link} className={`${styles.link} ${props.className}`}>
			<div
				className={`${styles.button} ${
					styles['style-' + props.style]
				}`}>
				{props.children}
			</div>
		</Link>
	);
};

export default Button;
