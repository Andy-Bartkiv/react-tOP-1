import React, { useState } from 'react';
// import Clock from './clock';
import Clock from './clock-hooks';
import '../App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={ () => setCount(count + 1) }>
        Click Me!
      </button>
      <p>{ count }</p>
      <button onClick={ () => setCount(0) }>
        Reset
      </button>
      <Clock />
    </div>
  )
}

export default App;