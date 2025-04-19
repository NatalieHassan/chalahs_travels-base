import { NavLink } from "react-router-dom";
// Import NavLink from react-router-dom for navigation links
import './Header.css'; // Import CSS for styling


function Header (){
  return (
  // Header component//
    <header className="site-header">
    <div className="container"> 
    <div className="header-content">
      {/* Logo as home image */}
      <NavLink to="/" className="logo-link">
        <img src="src/assets/images/logo_image.png" alt="Chalah's Travels logo" className="logo-image"/>
       
      </NavLink>
      {/* Navigation links */}
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/signup">SIGN UP</NavLink></li>
          <li><NavLink to="/about" >ABOUT</NavLink></li>
          <li><NavLink to={"/login"}>LOGIN</NavLink></li>
        </ul>
      </nav>
    </div>
    </div>
  </header>
  // End of Header component//
  );
};

export default Header;