import './App.css';

function App() {
	function getdigitsum(num) {
		num = String(num)
    let result = 0
    for (let i = 0; i < num.length; i++){
      result += Number(num[i])
    }
    return result
	}
	
	const sum = getdigitsum(123);
	
	return <div>
		{sum}
	</div>
}

export default App;
