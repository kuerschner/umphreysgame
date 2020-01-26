import React from 'react';
import './App.css';
import 'flexboxgrid2';
import Main from './Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="row full-height">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
