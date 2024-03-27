import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return <div>
    <select value={value} onChange={handleChange}>
      <option>Москва</option>
      <option>Владивосток</option>
      <option>Новосибирск</option>
      <option>Санкт-Петербург</option>
    </select>
    <p>
      ваш выбор: {value}
    </p>
  </div>;
}

export default App;
