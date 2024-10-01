import React, { useState, useEffect } from 'react';
import './App.css';
import Clock from './clock';
import DayDate from './Dateday';

function App() {
  return (
    <div
      className="Clock">
      <DayDate />
      <Clock />

    </div>
  );
}

export default App;