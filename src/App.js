import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  return <div>
    <select value={value} onChange={event => setValue(event.target.value)}>
      <option value="1">от 0 до 12 лет</option>
      <option value="2">от 13 до 17 лет</option>
      <option value="3">от 18 до 25 лет</option>
      <option value="4">старше 25 лет</option>
    </select>
    <p>
      {value === '1' && 'от 0 до 12 лет'}
      {value === '2' && 'от 13 до 17 лет'}
      {value === '3' && 'от 18 до 25 лет'}
      {value === '4' && 'старше 25 лет'}
    </p>
  </div>;
}

export default App;
