import dijkstra, { animateDijkstra } from '../algorithms/dijkstra';
import { createGrid } from '../utilities/createGrid';

export default function Header({ grid, clearGrid }) {
	const clearBoardOnClick = () => {
		clearGrid();
	};

	const visualizeOnClick = () => {
		const nodes = dijkstra(grid);
		animateDijkstra(nodes, 100);
	};

	// Algorithms

	return (
		<header>
			<select name="algo-speed" id="algo-speed" placeholder="Speed">
				<option value="slow" disabled>
					Slow
				</option>
				<option value="medium" disabled>
					Medium
				</option>
				<option value="fast" disabled>
					Fast
				</option>
			</select>
			<select name="algo-additionals" id="algo-additionals">
				Add
				<option value="wall" disabled>
					Wall
				</option>
				<option value="maze" disabled>
					Maze
				</option>
			</select>
			<select
				name="algo-selector"
				id="algo-selector"
				placeholder="Choose Your Algorithm">
				<optgroup label="Pathfinding">
					<option value="djikstra">Djikstra</option>
					<option value="astar" disabled>
						A*
					</option>
					<option value="bfs" disabled>
						Breadth First Search
					</option>
					<option value="dfs" disabled>
						Depth First Search
					</option>
				</optgroup>
				<optgroup label="Sorting">
					<option value="bubble" disabled>
						Bubble Sort
					</option>
					<option value="insertion" disabled>
						Insertion Sort
					</option>
					<option value="merge" disabled>
						Merge Sort
					</option>
					<option value="quick" disabled>
						Quick Sort
					</option>
				</optgroup>
			</select>
			<button onClick={clearBoardOnClick}> Clear</button>
			<button onClick={visualizeOnClick}> Visualize</button>
		</header>
	);
}
