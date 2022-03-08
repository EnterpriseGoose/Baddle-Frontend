import type { Component } from 'solid-js';
import { Show } from 'solid-js/web';
import { Link } from 'solid-app-router';

import Button from '../Button';

import styles from './header.module.css';
import logo from '../../assets/baddle-logo.png';

const HeaderComponent: Component<{ loggedIn: boolean; hideLogin?: boolean }> = (
	props
) => {
	return (
		<div class={styles.header}>
			<div class={styles.title}>
				<Link href="/">
					<img src={logo} alt="B" width="50" height="50" />
					<h1>addle</h1>
				</Link>
			</div>
			<Show
				when={props.loggedIn === true}
				fallback={
					<Show when={!props.hideLogin}>
						<Button signIn={true} class={styles.logInButton} />
					</Show>
				}>
				<Button link="/dash" style="outline" class={styles.playButton}>
					Play
				</Button>
			</Show>
		</div>
	);
};

export { HeaderComponent };
