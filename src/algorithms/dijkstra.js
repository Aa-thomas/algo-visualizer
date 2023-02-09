export default function dijkstra(grid, sourceNode, targetNode) {
	const visitedNodesInOrder = [];
	let unvisitedNodes = flattenGrid(grid);
	sourceNode = grid[2][2];
	sourceNode.distance = 0;
	// console.table(unvisitedNodes);

	while (unvisitedNodes.length > 0) {
		unvisitedNodes = orderNodesByDistance(unvisitedNodes);
		let currentNode = unvisitedNodes.shift();
		let neighbors = getNeighbors(currentNode, grid);
		updateNeighborDistance(neighbors);
		visitedNodesInOrder.push(currentNode);
	}

	return visitedNodesInOrder;
}

function updateNeighborDistance(neighbors) {
	neighbors.forEach((neighbor) => {
		if (neighbor) neighbor.distance = 1;
		else return;
	});
}

function getNeighbors(currentNode, grid) {
	let neighbors = [];
	if (currentNode.row > 0)
		neighbors.push(grid[currentNode.col][currentNode.row - 1]);
	if (currentNode.col < grid.length - 1)
		neighbors.push(grid[currentNode.col + 1][currentNode.row]);
	if (currentNode.row < grid[0].length)
		neighbors.push(grid[currentNode.col][currentNode.row + 1]);
	if (currentNode.col > 0)
		neighbors.push(grid[currentNode.col - 1][currentNode.row]);

	// animateDijkstra(neighbors, 50);

	console.log('neighbors---->', neighbors);
	return neighbors;
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
	return arrayOfNodes.sort(
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
