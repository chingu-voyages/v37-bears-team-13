import React from 'react';
import './App.css';

import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Stock Race</h1>
        <NavBar />
        <Home />
      </header>
    </div>
  );
}

export default App;
