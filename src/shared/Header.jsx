
import React from 'react';

function Header (){
  return (
  // Header component//
    <header className="site-header">
    <div className="container"> 
    <div className="header-content">
      <img src="src/assets/images/logo_image.png" alt="Chalah's Travels logo" className="logo" width="200" />
      <nav className="main-nav">
        <ul>
          <li><a href="###">CONTACT US</a></li>
          <li><a href="###">HOW IT WORKS</a></li>
          <li><a href="###">LOGIN</a></li>
        </ul>
      </nav>
    </div>
    </div>
  </header>
  // End of Header component//
  );
};

export default Header;