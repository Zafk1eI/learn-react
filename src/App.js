import './App.css';

function App() {
  function showMess(text) {
    alert(text);
  }

  return <div>
    <button onClick={() => showMess('1')}>act1</button>
    <button onClick={() => showMess('2')}>act2</button>
    <button onClick={() => showMess('3')}>act3</button>
  </div>;
}

export default App;
