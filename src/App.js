import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('fullName');
  const [age, setAge] = useState('Age');

  return <div>
    <p>{name}</p>
    <p>{age}</p>
  </div>
}

export default App;
