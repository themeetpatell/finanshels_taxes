import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';
import FloatingContacts from './FloatingContacts';

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content">{children}</main>
      <FloatingContacts />
      <Footer />
    </div>
  );
};

export default Layout;
