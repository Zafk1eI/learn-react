import './App.css';

function App() {
  function getDigitsSum(num) {
    num = String(num)
    let result = 0
    for (let i = 0; i < num.length; i++) {
      result += Number(num[i])
    }
    return result
  }

  return <p>
    {getDigitsSum(12345)}
  </p>
}

export default App;
