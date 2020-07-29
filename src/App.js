import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';
// import logo from './logo.svg';
import github from './GitHub_Logo.png';
import linkedin from './LI-Logo.png';

import NavBar from '../src/components/NavBar/NavBar';
import About from './components/About/About';
import Skills from '../src/components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function openLTab() {
  window.open('https://www.linkedin.com/in/aprilkrg/');
}

function openGTab() {
  window.open('https://github.com/aprilkrgonzales/');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <body>
        <p>APRIL K R GONZALES</p>
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </body>
      <footer className='Footer'>
        <p>aprilkrgonzales@gmail.com <br /> Denver, CO</p>
        <div >
          <Link onClick={openGTab} to={{ pathname: 'https://github.com/aprilkrgonzales/' }}>
            <img className='FooterLogo' src={github}  alt='GitHub Logo'></img>
          </Link>
          <Link onClick={openLTab}>
            <img className='FooterLogo' src={linkedin}  alt='LinkedIn Logo'></img>
          </Link>
        </div>
        <p className='FooterCopyright'>© 2020 April Gonzales</p>
      </footer>
    </div>
  );
}

export default App;
