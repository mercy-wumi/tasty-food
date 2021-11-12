
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import FoodClient from './components/FoodClient/FoodClient';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <Navbar
        showNav={showNav}
        setShowNav={setShowNav}
      />
      <Header setShowNav={setShowNav} />
      <About />
      <Menu />
      <FoodClient />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
