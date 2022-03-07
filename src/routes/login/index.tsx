import { Component } from 'solid-js';
import { Link } from 'solid-app-router';

import Layout from '../../components/Layout';
import { loggedIn } from '../../components/Layout';

import styles from '../../styles/login/index.module.css';

import googleSignIn from '../../assets/google-button-normal.png';
import googleSignInFocused from '../../assets/google-button-focused.png';
import googleSignInPressed from '../../assets/google-button-pressed.png';

const Index: Component<{ URLSearchParams: any }> = (props) => {
	console.log(props.URLSearchParams);
	return (
		<Layout hideLogin={true}>
			<div class={styles.main}>
				<Link
					href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=301025595270-dhu09d1o81kf0s7fqlj6m9p6qniq3q93.apps.googleusercontent.com&redirect_uri=https://baddle.ga/login/callback&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid&access_type=online&&state=${window.localStorage.getItem(
						'googleAuthState'
					)}${
						window.localStorage.getItem('googleLoginHint')
							? '&login_hint=' +
							  window.localStorage.getItem('googleLoginHint')
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
				<div className={styles.text}>
					(Note: You can only use school accounts)
				</div>
				<div>{loggedIn()}</div>
			</div>
		</Layout>
	);
};

export default Index;
