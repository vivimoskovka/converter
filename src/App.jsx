import React from 'react'
import './App.css';
import Converter from './components/Converter/Converter'
import Quantity from "./components/Quantity/Quantity";

function App() {

  return (
      <div>
        <Converter/>
        <Quantity/>
      </div>
  );
}

export default App;
