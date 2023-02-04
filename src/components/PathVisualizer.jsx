import { useEffect, useState } from 'react';
import Node from './Node';
import Chance from 'chance';
import Header from './Header';

export default function PathVisualizer() {
	const [grid, setGrid] = useState([]);
	const [distances, setDistances] = useState(grid);

	// This function creates our grid and stores the state in `grid` variable
	const createGrid = (width, height) => {
		const nodes = [];

		for (let col = 0; col < width; col++) {
			const currentColumn = [];
			for (let row = 0; row < height; row++) {
				const currentNode = {
					row,
					col,
					isOrigin: row === 2 && col === 2,
					isTarget: row === 8 && col === 8,
					isWall: false,
					weight: 1,
					distance: Infinity,
				};
				currentColumn.push(currentNode);
			}
			nodes.push(currentColumn);
		}
		setGrid(nodes);
	};

	useEffect(() => {
		createGrid(10, 10);
	}, []);

	// This is where we implement Djikstra

	// const distances = useMemo(() => {
	// 	// code to calculate the distance from sourceNode to each node
	// }, [sourceNode, grid]);

	return (
		<>
			{' '}
			<Header grid={grid} />
			<div className="grid">
				{/* Map through `grid` making `Node` component for each node */}
				{grid.map((row) => {
					const chance = new Chance();
					return (
						<div className="column" key={chance.guid()}>
							{row.map((currentNode) => {
								return (
									<Node
										key={chance.guid()}
										isOrigin={currentNode.isOrigin}
										isTarget={currentNode.isTarget}
										col={currentNode.col}
										row={currentNode.row}
										isWall={currentNode.isWall}
										weight={currentNode.weight}
										distance={currentNode.distance}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
		</>
	);
}
