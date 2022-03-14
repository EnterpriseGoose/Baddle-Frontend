import { Component, createSignal, onMount } from 'solid-js';

import styles from '../styles/index.module.scss';

import wordleToLeaderboardSVG from '../assets/wordle-to-leaderboard.svg';
import differentTypesOfWordleSVG from '../assets/different-types-of-wordle.svg';

import Layout from '../components/Layout';
import TileRow from '../components/Tile-Row';

const Index: Component = () => {
	const [secondRowColors, setSecondRowColors] = createSignal('XXX');
	const [thirdRowColors, setThirdRowColors] = createSignal('XXX');

	onMount(() => {
		setTimeout(() => {
			setSecondRowColors('GDD');
			setTimeout(() => {
				setThirdRowColors('DDDDYDDDDDY');
			}, 300);
		}, 300);
	});
	return (
		<Layout>
			<div class={styles.main}>
				<div class={styles.head}>
					<TileRow colors="DDDGGG" size="max(2vw, 1.5vh)">
						WORDLE
					</TileRow>
					<TileRow colors={secondRowColors()} size="max(2vw, 1.5vh)">
						BUT
					</TileRow>
					<TileRow colors={thirdRowColors()} size="max(2vw, 1.5vh)">
						COMPETITIVE
					</TileRow>
				</div>
				<div class={styles.body}>
					<div class={`${styles.section} ${styles.one}`}>
						<div class={styles.titleText}>
							Play Wordle with a Leaderboard
						</div>
						<img
							src={wordleToLeaderboardSVG}
							alt="wordle going to leaderboard"
						/>
					</div>
					<div class={`${styles.section} ${styles.two}`}>
						<div class={styles.titleText}>
							Different sizes and types
						</div>
						<img
							src={differentTypesOfWordleSVG}
							alt="different sizes of wordles and wordles with letters and numbers"
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Index;
