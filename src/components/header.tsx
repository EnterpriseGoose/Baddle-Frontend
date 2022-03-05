import type { Component } from 'solid-js';
import { Show } from 'solid-js/web';
import { Link } from 'solid-app-router';

import Button from './button';

import styles from './header.module.css';
import logo from '../assets/baddle-logo.png';
import googleSignIn from '../assets/google-button-normal.png';
import googleSignInFocused from '../assets/google-button-focused.png';
import googleSignInPressed from '../assets/google-button-pressed.png';

const Header: Component<{ loggedIn: boolean; hideLogin?: boolean }> = (
	props
) => {
	window.localStorage.setItem('googleAuthState', Math.random().toString());
	return (
		<div className={styles.header}>
			<div className={styles.title}>
				<Link href="/">
					<img src={logo} alt="B" width="50" height="50" />
					<h1>addle</h1>
				</Link>
			</div>
			<Show
				when={props.loggedIn === true}
				fallback={
					<Show when={!props.hideLogin}>
						<Link
							href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=301025595270-dhu09d1o81kf0s7fqlj6m9p6qniq3q93.apps.googleusercontent.com&redirect_uri=https://baddle.ga/login/callback&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid&access_type=online&state=${window.localStorage.getItem(
								'googleAuthState'
							)}${
								window.localStorage.getItem('googleLoginHint')
									? '&login_hint=' +
									  window.localStorage.getItem(
											'googleLoginHint'
									  )
									: ''
							}`}>
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
						</Link>
					</Show>
				}>
				<Button
					link="/dash"
					style="outline"
					className={styles.playButton}>
					Play
				</Button>
			</Show>
		</div>
	);
};

export default Header;
