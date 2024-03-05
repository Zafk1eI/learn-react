import './App.css';

function App() {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  	
  const res = arr.map(function(item, index) {
    return <p key={index}>{item}</p>;
  });
  
  return <ul>
    {res}
  </ul>;
}

export default App;
