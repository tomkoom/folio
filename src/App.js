import React from 'react';
import './App.css';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <a href="https://bit.ly/33sPgEW" rel="norefferer noopener">Public journal <span style={{ fontSize: "0.9rem" }}><FontAwesomeIcon icon={faArrowRight} /></span></a>
      {/* <Nav />
      <About />
      <Skills />
      <Projects />
      <Footer /> */}
    </div>
  );
}

export default App;
