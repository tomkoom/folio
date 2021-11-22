import React from 'react';
import './App.css';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
