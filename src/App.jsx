import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Layout from './shared/Layout';
import Privacy from './components/Privacy';
import Search from './components/Search';
import Signup from './components/Signup';
import './App.css'; // Import your CSS file
import './index.css'; // Import your global styles
import React from 'react';



function App () {
  return (
    // Main application component
  <div className="App">
    {/* Header and Footer are handled in Layout component */}
    {/* Define your routes here */}
    <Routes>
      {/* Wrap all routes in Layout for consistent header and footer */}
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* Default route */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/search" element={<Search />} />
      <Route path="/signup" element={<Signup />} />
      {/* Add more routes as needed */}
      </Route>
      {/* 404 Not Found route */}
    </Routes>
 </div>
)
}

export default App;