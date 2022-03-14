import { Component } from 'solid-js';
import { Link } from 'solid-app-router';

import styles from './button.module.scss';

import googleSignIn from '../../assets/google-button-normal.png';
import googleSignInFocused from '../../assets/google-button-focused.png';
import googleSignInPressed from '../../assets/google-button-pressed.png';

// Styles:
// defualt - blue solid
// outline - white outline
// gray - gray
// blueOutline - blue outline
// text - no button, just text
const ButtonComponent: Component<{
	link?: string;
	style?: string;
	children?: Element | string;
	class?: string;
	signIn?: boolean;
}> = (props) => {
	if (props.signIn) {
		window.localStorage.setItem(
			'googleAuthState',
			Math.random().toString()
		);
		return (
			<Link
				href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=301025595270-dhu09d1o81kf0s7fqlj6m9p6qniq3q93.apps.googleusercontent.com&redirect_uri=${
					window.location.origin
				}/login/callback&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid&access_type=online&&state=${window.localStorage.getItem(
					'googleAuthState'
				)}${
					window.localStorage.getItem('googleLoginHint')
						? '&login_hint=' +
						  window.localStorage.getItem('googleLoginHint')
						: ''
				}`}>
				<img
					className={`${styles.logInButton} ${props.class}`}
					src={googleSignIn}
					onFocusIn={(e) => {
						e.currentTarget.src = googleSignInFocused;
					}}
					onFocusOut={(e) => {
						e.currentTarget.src = googleSignIn;
					}}
					onMouseDown={(e) => {
						e.currentTarget.src = googleSignInPressed;
					}}
					onMouseUp={(e) => {
						e.currentTarget.src = googleSignInFocused;
					}}
					alt="Login With Google">
					Login With Google
				</img>
			</Link>
		);
	} else {
		return (
			<Link
				href={props.link ? props.link : '/'}
				className={`${styles.link} ${props.class}`}>
				<div
					className={`${styles.button} ${
						styles['style-' + props.style]
					}`}>
					{props.children}
				</div>
			</Link>
		);
	}
};

export { ButtonComponent };
