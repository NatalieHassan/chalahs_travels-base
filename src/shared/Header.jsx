import { useState } from "react";
import { NavLink } from "react-router-dom";
// Import NavLink from react-router-dom for navigation links
import './Header.css'; // Import CSS for styling
// Import images
import wineDinnerLogoA from '../assets/images/wine-dinner-logo-a.jpeg';
import logoImage from '../assets/images/logo_image.png';
import wineDinnerLogoB from '../assets/images/wine-dinner-logo-b.jpeg';


function Header (){
  // State to manage the mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Function to toggle the mobile menu open/close

  return (
  // Header component//
    <header className="site-header">
     <div className="container"> 
      <div className="header-content">

      {/* Image group container */}
      {/* This is where the logo and other images are displayed */}
      {/* The images are wrapped in NavLink for navigation */}
      <div className="header-image-group">
       <NavLink to="/" className="header-image-link">
        <img src={wineDinnerLogoA} alt="Pasta dinner plate" className="header-image"/>
        </NavLink>

        <NavLink to="/" className="header-image-link">
        <img src={logoImage} alt="Chalah's Travels logo" className="header-image"/>
        </NavLink>

        <NavLink to="/" className="header-image-link">
        <img src={wineDinnerLogoB} alt="Plate and wine dinner image" className="header-image"/>
      </NavLink>
      </div>

       {/* Hamburger icon */}
       {/* This icon is used for mobile navigation */}
        <button className="hamburger-btn" onClick={() => setIsMenuOpen    (!isMenuOpen)} aria-label="Toggle navigation">
        
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80"       width="30" height="30">
           <rect width="100" height="15" fill="#191970"></rect>
            <rect y="30" width="100" height="15" fill="#191970"></rect>
           <rect y="60" width="100" height="15" fill="#191970"></rect>
           </svg>
          </button>
            

      {/* Desktop Navigation links */}
      <nav className="desktop-nav main-nav">
        <ul>
          <li><NavLink to="/search">SEARCH</NavLink></li>
          <li><NavLink to="/signup">SIGN UP</NavLink></li>
          <li><NavLink to="/about" >ABOUT</NavLink></li>
          <li><NavLink to={"/login"}>LOGIN</NavLink></li>
        </ul>
      </nav>
      {/* Mobile Navigation links */}
      {/* This navigation is displayed when the hamburger icon is clicked */}
       {isMenuOpen && (
      <nav className="mobile-nav main-nav">
        <ul>
          <li>
          <NavLink 
          to="/search" 
          className={({ isActive }) => isActive ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}>SEARCH
          </NavLink> 
          </li>
          <li>
          <NavLink 
          to="/signup" 
          className={({ isActive }) => isActive ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}>SIGN UP
          </NavLink>
          </li>
          <li>
          <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}>ABOUT
          </NavLink>
          </li>
          <li>
          <NavLink to={"/login" } 
          className={({ isActive }) => isActive ? "active" : ""}
          onClick={() => setIsMenuOpen(false)}>LOGIN</NavLink></li>
         </ul>
       </nav>
      )}
     </div>
    </div>
  </header>
  // End of Header component//
  );
};
// State to manage the mobile menu open/close
export default Header;