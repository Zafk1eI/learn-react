import './App.css';
import React, { useState } from 'react';

function App() {
  const [html, setHtml] = useState(true);
  const [css, setCss] = useState(true);
  const [js, setJs] = useState(true);

  return <div>
    <form>
      <input type="checkbox" checked={html} onChange={() => setHtml(!html)} />
      <label>HTML</label>
      <p>состояние: {html ? 'отмечен' : 'не отмечен'}</p>
    </form>
    <form>
      <input type="checkbox" checked={css} onChange={() => setCss(!css)} />
      <label>css</label>
      <p>состояние: {css ? 'отмечен' : 'не отмечен'}</p>
    </form>
    <form>
      <input type="checkbox" checked={js} onChange={() => setJs(!js)} />
      <label>JavaScript</label>
      <p>состояние: {js ? 'отмечен' : 'не отмечен'}</p>
    </form>
  </div>;
}

export default App;
