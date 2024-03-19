import './App.css';
import React, { useState } from 'react';

function App() {
  function calculateBirthYear(currentAge) {
    const currentYear = new Date().getFullYear();
    return currentYear - currentAge;
  }

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  const [age, setAge] = useState('');
  const [fahrenheit, setFarenheit] = useState('');

  return <>
    <div>
      <input value={age} onChange={event => setAge(event.target.value)} />
      <p>cout: {calculateBirthYear(age)}</p>
    </div>
    <div>
      <input value={fahrenheit} onChange={event => setFarenheit(event.target.value)} />
      <p>cout: {fahrenheitToCelsius(fahrenheit)}</p>
    </div>
  </>;
}

export default App;
