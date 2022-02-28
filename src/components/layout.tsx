import type { Component } from 'solid-js';
import { render } from 'solid-js/web';

import styles from './layout.module.css';

import Header from './header';

const Layout: Component = (props) => {
	return (
		<div className={styles.root}>
			<Header loggedIn={false} />
			{props.children}
		</div>
	);
};

export default Layout;
