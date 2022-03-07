import { Component } from 'solid-js';

import styles from '../styles/index.module.css';

import Layout from '../components/Layout';

const Dash: Component = () => {
	return (
		<Layout>
			<div class={styles.main}></div>
		</Layout>
	);
};

export default Dash;
