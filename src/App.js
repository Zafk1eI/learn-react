import './App.css';
import React, { useState } from 'react';

function App() {
  const [isBanned, setBan] = useState('False');

  return <div>
      <span>{isBanned ? "Banned" : "Not banned"}</span><br />
      {isBanned ? (
        <button onClick={() => setBan(false)}>Unban</button>
      ) : (
        <button onClick={() => setBan(true)}>Ban</button>
      )}
  </div>
}

export default App;
