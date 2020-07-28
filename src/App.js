import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';
// import logo from './logo.svg';
import github from './GitHub_Logo.png';
import linkedin from './LI-Logo.png';

import NavBar from '../src/components/NavBar/NavBar';

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
      </body>
      <footer className='Footer'>
        <p>aprilkrgonzales@gmail.com</p>
        <p>Denver, CO</p>
        <div classname='FooterLogo'>
          <Link onClick={openLTab}>
            <img src={linkedin} style={{width:'20vh'}} alt='LinkedIn Logo'></img>
          </Link>
          <Link onClick={openGTab} to={{ pathname: 'https://github.com/aprilkrgonzales/' }}>
            <img src={github} style={{width:'20vh'}} alt='GitHub Logo'></img>
          </Link>
        </div>
        <p classname='FooterCopyright'>© 2020 April Gonzales</p>
      </footer>
    </div>
  );
}

export default App;
