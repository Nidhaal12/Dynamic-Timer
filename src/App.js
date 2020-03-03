import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div>
      <h1 className="time-title">The Stateful Timer</h1>
      <Timer />
     
    </div>

  );
}

export default App;
