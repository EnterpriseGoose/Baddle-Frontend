import { Component, Show } from 'solid-js';

import Layout from '../../components/Layout';
import { loggedIn } from '../../components/Layout';

import styles from '../../styles/login/index.module.scss';

import Button from '../../components/Button';

const Index: Component = () => {
	const params = new URLSearchParams(window.location.search);
	let showError = false;
	let errorToShow = '';
	(() => {
		if (params.get('error')) {
			switch (params.get('error')) {
				case 'SCHOOL_ACCOUNT':
					errorToShow =
						'You can only sign in with a school account, try logging in again.';
					break;
				case 'INVALID_SESSION':
					errorToShow =
						'Your session expired. Please try logging in again.';
					break;
				default:
					return;
			}
			showError = true;
		}
	})();

	return (
		<Layout hideLogin={true}>
			<div class={styles.main}>
				<Show when={showError}>
					<div class={styles.error}>{errorToShow}</div>
				</Show>
				<Button signIn={true} class={styles.logInButton}></Button>
				<div class={styles.text}>
					(Note: You can only use school accounts)
				</div>
				<div>{loggedIn()}</div>
			</div>
		</Layout>
	);
};

export default Index;
