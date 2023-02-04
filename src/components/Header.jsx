import dijkstra from '../algorithms/dijkstra';

export default function Header({ grid }) {
	const clearBoardOnClick = () => {
		// This will clear and reset the board to initial state
	};

	const visualizeOnClick = () => {
		// This will visualize the algorithm
		dijkstra(grid);
	};

	// Algorithms

	return (
		<header>
			<select name="algo-speed" id="algo-speed" placeholder="Speed">
				<option value="slow">Slow</option>
				<option value="medium">Medium</option>
				<option value="fast">Fast</option>
			</select>
			<select name="algo-additionals" id="algo-additionals">
				Add
				<option value="wall">Wall</option>
				<option value="maze">Maze</option>
			</select>
			<select
				name="algo-selector"
				id="algo-selector"
				placeholder="Choose Your Algorithm">
				<optgroup>
					Pathfinding
					<option value="djikstra">Djikstra</option>
					<option value="astar">A*</option>
					<option value="bfs">Breadth First Search</option>
					<option value="dfs">Depth First Search</option>
				</optgroup>
				<optgroup>
					Sorting
					<option value="bubble">Bubble Sort</option>
					<option value="insertion">Insertion Sort</option>
					<option value="merge">Merge Sort</option>
					<option value="quick">Quick Sort</option>
				</optgroup>
			</select>
			<button onClick={clearBoardOnClick}> Clear</button>
			<button onClick={visualizeOnClick}> Visualize</button>
		</header>
	);
}
