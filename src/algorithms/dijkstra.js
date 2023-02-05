export default function dijkstra(grid, sourceNode, targetNode) {
	// Check that `grid` argument is an Array and not empty
	if (!Array.isArray(grid))
		throw new Error('The `grid` argument must be a 2-dimensional Array.');
	if (!grid.length)
		throw new Error('The `grid` argument cannot be an empty array.');

	const visitedNodes = [];
	const unvisitedNodes = flattenGrid(grid);

	while (unvisitedNodes.length > 0) {
		// unvisitedNodes[0].distance = 5;
		orderNodesByDistance(unvisitedNodes);
		let currentNode = unvisitedNodes.shift();
		// currentNode.instance.setVisitedClass('change');
		visitedNodes.push(currentNode);
	}

	return visitedNodes;
}

export function animateDijkstra(visitedNodesInOrder, speed) {
	visitedNodesInOrder.forEach((node, index) => {
		setTimeout(() => {
			document.getElementById(`node-${node.row}-${node.col}`).className =
				'node change';
		}, speed * index);
	});
}

function orderNodesByDistance(arrayOfNodes) {
	arrayOfNodes.sort(
		(prevNode, nextNode) => prevNode.distance - nextNode.distance
	);
}

function flattenGrid(grid) {
	const nodes = [];
	grid.forEach((row) => {
		row.forEach((node) => {
			nodes.push(node);
		});
	});
	console.log('flattend---->', nodes);

	return nodes;
}
