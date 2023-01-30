import { useEffect, useState } from 'react';
import Node from './Node';
import Chance from 'chance';

export default function PathVisualizer() {
	const [grid, setGrid] = useState([]);

	// This function creates our grid and stores the state in `grid` variable
	useEffect(() => {
		const nodes = [];

		for (let col = 0; col < 45; col++) {
			const currentColumn = [];
			for (let row = 0; row < 15; row++) {
				const currentNode = {
					row,
					col,
					isOrigin: row === 2 && col === 12,
					isTarget: row === 10 && col === 15,
					isWall: false,
					weight: 1,
				};
				currentColumn.push(currentNode);
			}
			nodes.push(currentColumn);
		}
		setGrid(nodes);
	}, []);

	// const distances = useMemo(() => {
	// 	// code to calculate the distance from sourceNode to each node
	// }, [sourceNode, grid]);

	return (
		<div className="grid">
			{/* Map through `grid` making `Node` component for each node */}
			{grid.map((row) => {
				const chance = new Chance();
				return (
					<div className="column" key={chance.guid()}>
						{row.map((node) => {
							const { isOrigin, isTarget } = node;
							return (
								<Node
									key={chance.guid()}
									isOrigin={isOrigin}
									isTarget={isTarget}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
