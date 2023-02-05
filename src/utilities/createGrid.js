import { useRef } from 'react';

export const createGrid = (width, height) => {
	const grid = [];

	for (let col = 0; col < width; col++) {
		const currentColumn = [];
		for (let row = 0; row < height; row++) {
			const currentNode = {
				row,
				col,
				isSourceNode: row === 2 && col === 2,
				isTargetNode: row === 8 && col === 8,
				isWall: false,
				weight: 1,
				distance: Infinity,
			};
			currentColumn.push(currentNode);
		}
		grid.push(currentColumn);
	}
	return grid;
};
