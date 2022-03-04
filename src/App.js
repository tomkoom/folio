import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <a href="https://bit.ly/33sPgEW" rel="norefferer noopener">Public journal <span style={{ fontSize: "0.9rem" }}><FontAwesomeIcon icon={faArrowRight} /></span></a>
    </div>
  );
}

export default App;
