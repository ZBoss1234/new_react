import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import ParticlesBackground from './components/ParticlesBackground';
import People from './components/People';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Cards />
      <People />
      <Newsletter />
      <Footer />
    </div>
  );
}


export default App;