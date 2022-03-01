import type { Component } from 'solid-js';

import styles from './layout.module.css';

import Header from './header';
import { Router } from 'solid-app-router';
import Footer from './footer';

const Layout: Component = (props) => {
	return (
		<div className={styles.layout}>
			<Header loggedIn={false} />
			{props.children}
			<Footer />
		</div>
	);
};

export default Layout;
