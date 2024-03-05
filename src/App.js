import './App.css';

function App() {
  let text;
  const isAdult = true;

  if (isAdult) {
    text = <p>Есть 18</p>;
  }
  else {
    text = <p>Нет 18</p>
  }

  return <div>
    {text}
  </div>;
}

export default App;
