import React from 'react';
import { useState, Suspense } from 'react';
import './App.css';

import Space from './components/Space';
import BeginButton from './components/BeginButton';

function App() {
  const [begin, setBegin] = useState(false);

  // Adds a button to begin
  // As of Chrome v66, you cannot play audio on start
  // This begin button circumvents this.
  //    Ref: https://developer.chrome.com/blog/autoplay#:~:text=Note%3A%20The%20Autoplay%20Policy%20launched,web%20pages%20using%20audio%20features.
  return (
    <div>
      {!begin && <BeginButton setBegin={setBegin} />}   
      {begin && <Space /> }
    </div>
  );
};

export default App;
