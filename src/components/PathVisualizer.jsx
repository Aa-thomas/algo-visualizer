import { useEffect, useState } from 'react';
import GridNode from './GridNode';
import Chance from 'chance';
import Header from './Header';
import { createGrid } from '../utilities/createGrid';
export default function PathVisualizer() {
	const [grid, setGrid] = useState([]);
	const [distances, setDistances] = useState(grid);

	// create our grid
	useEffect(() => {
		setGrid(createGrid(10, 10));
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
									<GridNode
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
