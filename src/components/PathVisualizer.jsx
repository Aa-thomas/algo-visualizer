import { useEffect, useState, useRef } from 'react';
import GridNode from './GridNode';
import Chance from 'chance';
import Header from './Header';
import { createGrid } from '../utilities/createGrid';

const COLUMNS = 50;
const ROWS = 50;

export default function PathVisualizer() {
	const [grid, setGrid] = useState([]);
	const [distances, setDistances] = useState(grid);

	// create our grid
	useEffect(() => {
		setGrid(createGrid(COLUMNS, ROWS));
	}, []);

	return (
		<>
			{' '}
			<Header
				grid={grid}
				clearGrid={() => setGrid(createGrid(COLUMNS, ROWS))}
			/>
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
										isSourceNode={currentNode.isSourceNode}
										isTargetNode={currentNode.isTargetNode}
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
