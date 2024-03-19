import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('');

  return <div>
    <input value={value} onChange={event => setValue(event.target.value)} />
    <p>cout: {value.length}</p>
  </div>;
}

export default App;
