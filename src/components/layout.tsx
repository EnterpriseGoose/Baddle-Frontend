import type { Component } from 'solid-js';

import styles from './layout.module.css';

import Header from './header';
import Footer from './footer';

const [loggedIn, setLoggedIn] = createSignal('false');

const Layout: Component<{ chilren?: Element; hideLogin?: boolean }> = (
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

export { loggedIn, setLoggedIn };
export default Layout;
