import type { Component } from 'solid-js';
import { Show } from 'solid-js/web';
import { Link } from 'solid-app-router';

import styles from './header.module.css';
import logo from '../assets/baddle-logo.png';
import googleSignIn from '../assets/google-button-normal.png';
import googleSignInFocused from '../assets/google-button-focused.png';
import googleSignInPressed from '../assets/google-button-pressed.png';

const Header: Component<{ loggedIn: boolean }> = (props) => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>
				<Link href="/">
					<img src={logo} alt="B" width="50" height="50" />
					<h1>addle</h1>
				</Link>
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
						}}
						alt="Login With Google">
						Login With Google
					</img>
				}>
				You are logged in!
			</Show>
		</div>
	);
};

export default Header;
