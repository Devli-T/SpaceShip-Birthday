import React from 'react';
import { useState, Suspense } from 'react';
import './App.css';

import Space from './components/Space';

function App() {
  const [begin, setBegin] = useState(false);

  // Adds a button to begin
  // As of Chrome v66, you cannot play audio on start
  // This begin button circumvents this.
  return (
    <div>
      {!begin && (<button onClick={() => setBegin(true)}>Begin</button>)}
      {begin && <Space /> }
    </div>
  );
};

export default App;
