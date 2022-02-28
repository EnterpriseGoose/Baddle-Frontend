import { Component, createEffect } from 'solid-js';

import styles from './tile.module.css';

const Tile: Component<{ children: any; color?: string; size?: string }> = (
	props
) => {
	let tile!: HTMLDivElement;
	let previousColor = 'default';
	createEffect(() => {
		let bgColor = '#00000000';
		let borderColor = '#727272';
		switch (props.color) {
			case 'yellow':
				bgColor = '#c7c54c';
				borderColor = '#00000000';
				previousColor = 'yellow';
				break;

			case 'green':
				bgColor = '#50a654';
				borderColor = '#00000000';
				previousColor = 'green';
				break;

			case 'disabled':
				bgColor = '#3a3a3a';
				borderColor = '#00000000';
				previousColor = 'disabled';
				break;

			default:
				bgColor = '#00000000';
				borderColor = '#727272';
				if (previousColor === 'default') {
					return;
				}
				previousColor = 'default';
		}

		tile.animate(
			[
				{
					transform: 'rotateX(0deg)',
				},
				{
					backgroundColor: window
						.getComputedStyle(tile)
						.getPropertyValue('background-color'),
					borderColor: window
						.getComputedStyle(tile)
						.getPropertyValue('border-color'),
					offset: 0.49,
				},
				{
					transform: 'rotateX(90deg)',
					backgroundColor: bgColor,
					borderColor: borderColor,
					offset: 0.5,
				},
				{
					transform: 'rotateX(0deg)',
					backgroundColor: bgColor,
					borderColor: borderColor,
				},
			],
			{ duration: 700, fill: 'forwards' }
		);
	});

	return (
		<div
			className={styles.root}
			ref={tile}
			style={`font-size: ${props.size}`}>
			<div>{props.children}</div>
		</div>
	);
};

export default Tile;
