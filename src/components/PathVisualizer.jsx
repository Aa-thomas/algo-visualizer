import { useEffect, useState } from 'react';
import Node from './Node';

export default function PathVisualizer() {
	const [nodes, setNodes] = useState([]);

	useEffect(() => {
		const nodesArray = [];

		for (let col = 0; col < 45; col++) {
			const currentColumn = [];
			for (let row = 0; row < 15; row++) {
				const currentNode = {
					row,
					col,
					isOrigin: row === 2 && col === 12,
					isTarget: row === 10 && col === 15,
				};
				currentColumn.push(currentNode);
			}
			nodesArray.push(currentColumn);
		}
		setNodes(nodesArray);
	}, []);

	return (
		<div className="grid">
			{nodes.map((row, rowIndex) => {
				return (
					<div className="column" key={rowIndex}>
						{row.map((node, nodeIndex) => {
							const { isOrigin, isTarget } = node;
							return (
								<Node
									key={nodeIndex}
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
