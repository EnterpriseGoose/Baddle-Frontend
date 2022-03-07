import { Component } from 'solid-js';

import styles from '../styles/index.module.css';

import Layout from '../components/layout';

const Dash: Component = () => {
	return (
		<Layout>
			<div class={styles.main}></div>
		</Layout>
	);
};

export default Dash;
