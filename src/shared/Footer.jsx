import { NavLink } from "react-router-dom";


function Footer(){

  return (

    <footer className="site-footer">
     <div className="container"> 
      <div className="footer-content">
        <img src="src/assets/images/logo_image_footer.png" alt="Footer logo" className="logo" width="200" />
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