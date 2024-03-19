import './App.css';
import React, { useState } from 'react';

function App() {
  const [value_p1, setValue_p1] = useState('');
  const [value_p2, setValue_p2] = useState('');

  return <>
    <div>
      <input value={value_p1} onChange={event => setValue_p1(event.target.value)} />
      <p>text: {value_p1}</p>
    </div>
    <div>
      <input value={value_p2} onChange={event => setValue_p2(event.target.value)} />
      <p>text: {value_p2}</p>
    </div>
  </>;
}

export default App;
