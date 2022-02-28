import type { Component, JSX } from 'solid-js';
import { render, Show } from 'solid-js/web';

import styles from './header.module.css';
import logo from '../assets/baddle-logo.png';
import googleSignIn from '../assets/google-button-normal.png';
import googleSignInFocused from '../assets/google-button-focused.png';
import googleSignInPressed from '../assets/google-button-pressed.png';

const Header: Component<{ loggedIn: boolean }> = (props) => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>
				<img src={logo} alt="B" width="50" height="50" />
				<h1>addle</h1>
			</div>
			<Show
				when={props.loggedIn === true}
				fallback={
					<img
						className={styles.logInButton}
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
						}}>
						Login With Google
					</img>
				}>
				You are logged in!
			</Show>
		</div>
	);
};

export default Header;
