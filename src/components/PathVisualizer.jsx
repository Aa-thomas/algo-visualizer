import { useEffect, useState } from 'react';
import Node from './Node';

export default function PathVisualizer() {
	const [nodes, setNodes] = useState([]);

	useEffect(() => {
		const nodesArray = [];

		for (let row = 0; row < 45; row++) {
			const currentRow = [];
			for (let col = 0; col < 15; col++) {
				currentRow.push([]);
			}
			nodesArray.push(currentRow);
		}
		setNodes(nodesArray);
	}, []);

	return (
		<div className="grid">
			{nodes.map((row, rowIndex) => {
				return (
					<div className="column" key={rowIndex}>
						{row.map((node, nodeIndex) => {
							return <Node key={nodeIndex} />;
						})}
					</div>
				);
			})}
		</div>
	);
}
