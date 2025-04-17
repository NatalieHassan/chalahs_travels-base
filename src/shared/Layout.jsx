import React from 'react';
import Header from './Header';  // Adjust import paths as needed
import Footer from './footer';  // Adjust import paths as needed

// Layout wraps all page content with consistent structure
const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Fixe header on every page */}
      <Header />

      {/* Dynamic content from each page */}
      <main className="layout-content">
        {children}
      </main>

      {/* Fixes footer on every page */}
      <Footer />
    </div>
  );
};

export default Layout;
