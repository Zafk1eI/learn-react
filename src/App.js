import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('fullName');

  return <div>
    <span>{name}</span><br />
    <button onClick={() => setName('Pav A')}>Click me</button>
    <button onClick={() => setName('fullname')}>reset</button>
  </div>
}

export default App;
