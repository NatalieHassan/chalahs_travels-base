import { NavLink } from "react-router-dom";
import './Footer.css'; // Import CSS for styling
// Import images
import dinnerLogo from '../assets/images/dinner_logo.png';
import logoImageFooter from '../assets/images/logo_image_footer.png';

function Footer(){

  return (

    <footer className="site-footer">
     <div className="container"> 
      <div className="footer-content">

      {/* Image group container */}
      {/* This is where the logo and other images are displayed */}
      {/* The images are wrapped in NavLink for navigation */}
      <div className="footer-image-group">
        <NavLink to="/" className="footer-image-link">
        <img src={dinnerLogo} alt="Footer logo" className="footer-image"/>
         </NavLink>

         <NavLink to="/" className="footer-image-link">
         <img src={logoImageFooter} alt="Footer logo" className="footer-image"/>
         </NavLink>

         <NavLink to="/" className="footer-image-link">
         <img src={dinnerLogo} alt="Footer logo" className="footer-image"/>
        
        </NavLink>
      </div>
      {/* Footer Navigation links */}
      {/* This navigation is displayed at the bottom of the page */}

      <nav className="footer-nav">
        <ul>
          <li><NavLink to="/contact">CONTACT US</NavLink></li>
          <li><NavLink to="/about">HOW IT WORKS/ABOUT</NavLink></li>
          <li><NavLink to="/privacy">PRIVACY POLICY</NavLink></li>
        </ul>
      </nav>
     </div>
    </div> 
  </footer>

  );
};

export default Footer;