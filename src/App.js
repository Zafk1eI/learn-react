import './App.css';

function App() {
	const age = 19;
	
	return <div>
		{age ? <p>больше 18</p> : <p>меньше 18</p>}
	</div>;
}

export default App;
