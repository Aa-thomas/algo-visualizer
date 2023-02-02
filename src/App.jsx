import './styles/App.css';
import PathVisualizer from './components/PathVisualizer';
import Header from './components/Header';

function App() {
	return (
		<>
			<Header />
			<div className="App">
				<PathVisualizer />
			</div>
		</>
	);
}

export default App;
