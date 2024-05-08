
import React from 'react';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Rgister from './components/Rgister';
import AboutUs from './components/AboutUs';
import Femme from './components/Femme';
import Homme from './components/Homme';
import Pannier from './components/Pannier';
import HomeClient from './components/HomeClient';
import { CartProvider } from './components/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';


function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>HK STORE</title>
        <link rel='icon' href='/logo.png' type="image/x-icon" />
      </Helmet>
      <CartProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Rgister />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/Homme' element={<Homme />} />
            <Route path='/Femme' element={<Femme />} />
            <Route path='/Pannier' element={<Pannier />} />
            {/* Wrap HomeClient with CartProvider */}
            <Route path='/Client' element={<HomeClient />} />
          </Routes>
        </Router>
      </div>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;
