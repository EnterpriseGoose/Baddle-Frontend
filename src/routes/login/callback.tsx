import { Component } from 'solid-js';

import styles from '../../styles/login/callback.module.scss';

const Callback: Component = (props) => {
	const params = new URLSearchParams(window.location.search);
	const state = params.get('state');
	const code = params.get('code');
	const hd = params.get('hd');
	fetch('https://baddle.requestcatcher.com/', {
		method: 'POST',
		body: JSON.stringify({ url: import.meta.url, test: 'test' })
	});

	if (hd !== 'chatham-nj.org') {
		window.location.href = `${window.location.origin}/login?error=SCHOOL_ACCOUNT`;
	} else if (state !== window.localStorage.getItem('googleAuthState')) {
		window.location.href = `${window.location.origin}/login?error=INVALID_SESSION`;
	} else {
		fetch(import.meta.env.VITE_API + '/login', {
			body: import.meta.url,
			method: 'POST'
		});
	}

	return (
		<div class={styles.background}>
			<div class={styles.loadingBox}>
				<svg
					class={styles.loading}
					viewBox="0 0 514 514"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M462.116 140.606L441.293 152.628C435.752 155.827 433.753 162.787 436.63 168.502C466.766 228.388 464.973 300.154 431.244 358.448C397.602 416.841 336.347 454.281 269.417 458.124C263.028 458.491 258 463.701 258 470.1V494.143C258 501.047 263.808 506.48 270.703 506.125C354.259 501.819 430.866 455.26 472.813 382.448C514.876 309.751 516.891 220.132 478.843 145.616C475.704 139.467 468.093 137.155 462.116 140.606L462.116 140.606Z"
						fill="#f7f7f7"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Callback;
