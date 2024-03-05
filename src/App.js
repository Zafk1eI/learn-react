import './App.css';

function App() {
  function func(arg_1, event, arg_2) {
    console.log(arg_1, event, arg_2);
  }

  return <div>
    <button onClick={event => func('eee', event, 'eee')}>act</button>
  </div>;
}

export default App;
