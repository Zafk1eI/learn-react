import './App.css';
import uuid from 'react-uuid';

function App() {
  function id() {
    return uuid()
  }
  const array = ['one', 'two', 'three'];
  const res = array.map(function (item) {
    return <p id={id()}>{item}</p>
  });

  return <div>
    {res}
  </div>
}

export default App;
