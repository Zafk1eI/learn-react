import './App.css';

function App() {
	let text;
	const isAdmin = false;
	
	if (isAdmin) {
		text = <div><p>Пользователь является администратором</p></div>;
	} else {
		text = <div></div>;
	}
	return text;
}

export default App;
