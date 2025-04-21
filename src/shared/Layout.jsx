import {Outlet} from 'react-router-dom';
import Header from './Header.jsx';  // Adjust import paths as needed
import Footer from './Footer.jsx';  // Adjust import paths as needed

// Layout wraps all page content with consistent structure
const Layout = () => {
  return (
    <div className="layout">
      {/* Fixes header on every page */}
      <Header />
      <main className="layout-content">
        <Outlet /> {/* This will render the child routes-ABOUT PAGE */}
        {/* <Outlet /> will render the component for the current route */}
      </main>
    
      {/* Fixes footer on every page */}
      <Footer />
    </div>
  );
};

export default Layout;
