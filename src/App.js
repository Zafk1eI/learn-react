import './App.css';
import React, { useState } from 'react';

function App() {
  const [checked, setChecked] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  let message;
  if (checked) {
    message = <><h2>Ура, вам уже есть 18</h2><p>здесь расположен контент только для взрослых</p></>;
  } else {
    message = <p>
      увы, вам еще нет 18 лет:(</p>;
  }
  return <div>
    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
    <div>{message}</div>
    <input
      type="checkbox"
      id="myCheckbox"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
    <p style={{ display: isChecked ? 'block' : 'none' }}>Параграф.</p>
  </div>;

};

export default App;
