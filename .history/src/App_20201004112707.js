import React from 'react';
import './App.css';

import Counter from  './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Licznik w ReactJS</h1>
      </header>
      <Counter />
      <Counter />
    </div>
  );

}
export default App;
