import './App.css';

function App() {
  function func(event) {
    console.log(event.target); // объект с событием
  }

  return <div>
    <button onClick={func}>text</button>
  </div>;
}

export default App;
