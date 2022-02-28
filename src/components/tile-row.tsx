import {
	Component,
	createEffect,
	createSignal,
	For,
	JSX,
	onMount,
} from 'solid-js';
import { render, Show } from 'solid-js/web';
import Tile from './tile';

import styles from './tile-row.module.css';

const TileRow: Component<{ children: any; colors: string; size?: string }> = (
	props
) => {
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
		<div className={styles.root}>
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

export default TileRow;
