import type { Component } from 'solid-js';

import styles from './layout.module.css';

import { Router } from 'solid-app-router';
import Footer from '../Footer';
import Header from '../Header';

const LayoutComponent: Component = (props) => {
	return (
		<div className={styles.layout}>
			<Header loggedIn={false} />
			{props.children}
			<Footer />
		</div>
	);
};

export { LayoutComponent };
