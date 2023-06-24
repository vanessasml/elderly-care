import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Partnerships from './pages/Partnerships';
import Activities from './pages/Activities';
import Media from './pages/Media';
import IntroCarousel from './components/introCarrousel.js';

//import { ReactComponent as Logo } from './assets/logo.svg'    <Logo />

function App() {
  return (
    <div class="bg-body-tertiary">
      <Router>
            <Navigation />
            <IntroCarousel />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/partnerships" element={<Partnerships />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/media" element={<Media />} />
            </Routes>
        </Router>
        
    </div>
  );
}

export default App;
