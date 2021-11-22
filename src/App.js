import React from 'react';
import './App.css';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
