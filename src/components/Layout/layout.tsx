import { Component, createSignal } from 'solid-js';

import styles from './layout.module.scss';

import Footer from '../Footer';
import Header from '../Header';

const [loggedIn, setLoggedIn] = createSignal(false);

const LayoutComponent: Component<{ chilren?: Element; hideLogin?: boolean }> = (
	props
) => {
	return (
		<div className={styles.layout}>
			<Header loggedIn={loggedIn()} hideLogin={props.hideLogin} />
			{props.children}
			<Footer />
		</div>
	);
};

export { loggedIn, setLoggedIn, LayoutComponent };
