import { Component, createEffect, createSignal, For } from 'solid-js';
import Tile from '../Tile';

import styles from './tile-row.module.css';

const TileRowComponent: Component<{
	children: any;
	colors: string;
	size?: string;
}> = (props) => {
	const [colors, setColors] = createSignal([]);

	createEffect(() => {
		setColors(
			Array.from(props.colors, (col) => {
				if (col.toLowerCase() === 'd') return 'disabled';
				else if (col.toLowerCase() === 'g') return 'green';
				else if (col.toLowerCase() === 'y') return 'yellow';
				else return 'default';
			}) as never[]
		);
	});

	return (
		<div className={styles.tileRow}>
			<For each={[...props.children]}>
				{(tile: string, index) => (
					<Tile color={colors()![index()]} size={props.size}>
						{tile}
					</Tile>
				)}
			</For>
		</div>
	);
};

export { TileRowComponent };
