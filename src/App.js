import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume'; // Import the Resume component
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="resume"> {/* Add the Resume section here */}
        <Resume />
      </div>
      <div id="projects">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;