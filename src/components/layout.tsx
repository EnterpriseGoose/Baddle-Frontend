import type { Component } from 'solid-js';

import styles from './layout.module.css';

import Header from './header';

const Layout: Component = (props) => {
	return (
		<div className={styles.root}>
			<Header loggedIn={true} />
			{props.children}
		</div>
	);
};

export default Layout;
