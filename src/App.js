import './App.css';
import uuid from 'react-uuid';

function App() {
  const array = ['one', 'two', 'three'];
  const res = array.map(function (item) {
    return <p id={uuid()}>{item}</p>
  });

  return <div>
    {res}
  </div>
}

export default App;
