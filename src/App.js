import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import { data } from './data/data';

function App() {
  return (
    <div className="App">
      <Nav />
      <Projects data={data} />
    </div>
  );
}

export default App;
