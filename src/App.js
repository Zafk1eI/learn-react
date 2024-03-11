import './App.css';
import uuid from 'react-uuid';

function App() {
  function id() {
    return uuid()
  }
  const prods = [
    { id: id(), name: 'product1', cost: 100 },
    { id: id(), name: 'product2', cost: 200 },
    { id: id(), name: 'product3', cost: 300 },
  ];
  const res = prods.map(function(item) {
		return <p id={item.id}>
			<span>{item.name}</span>:
			<span>{item.cost}</span>
		</p>;
	});

  return <div>
    {res}
  </div>
}

export default App;
