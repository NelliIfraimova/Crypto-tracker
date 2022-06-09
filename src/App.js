import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing';
import Connect from './Connect'


function App() {
  return (
    <div>
      <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Connect" element={<Connect/>} />
      </Routes> 
 </>
      </div>
    
  );
}

export default App;

