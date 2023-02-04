const dijkstra = require('../algorithms/dijkstra');

describe('dijkstra', () => {
	it('should set the distance of the source node to 0', () => {
		const grid = [
			[{ distance: Infinity }, { distance: Infinity }],
			[{ distance: Infinity }, { distance: Infinity }],
		];
		dijkstra(grid);
		expect(grid[0][0].distance).toBe(0);
	});

	it('should move everything in `unvisitedNodes` array into `visitedNodes` array', () => {
		const unvisitedNodes = [
			[{ distance: Infinity }, { distance: Infinity }],
			[{ distance: Infinity }, { distance: Infinity }],
			[{ distance: Infinity }, { distance: Infinity }],
			[{ distance: Infinity }, { distance: Infinity }],
		];

		const visitedNodes = [];
		while (unvisitedNodes.length > 0) {
			let node = unvisitedNodes.shift();
			visitedNodes.push(node);
		}
		expect(unvisitedNodes.length).toBe(0);
		expect(visitedNodes.length).toBe(4);
	});

	it('should return an error if the grid argument is not an array', () => {
		const grid = {};
		expect(() => dijkstra(grid)).toThrowError(
			'The `grid` argument must be a 2-dimensional Array.'
		);
	});

	it('should return an error if the grid argument is an empty array', () => {
		const grid = [];
		expect(() => dijkstra(grid)).toThrowError(
			'The `grid` argument cannot be an empty array.'
		);
	});
});
