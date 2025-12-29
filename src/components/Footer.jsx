import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import finanshelsLogo from '../assets/finanshelslogo.svg';
import { taxMenu } from '../content/taxPages';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-container-modern">
        <div className="footer-grid">
          <div className="footer-brand-modern">
            <div className="footer-logo-row">
              <img src={finanshelsLogo} alt="Finanshels" className="footer-logo" />
            </div>
            <p className="footer-tagline">Purpose-built bookkeeping and tax support for founders.</p>
            <div className="footer-contact-modern">
              <a href="mailto:contact@finanshels.com" className="footer-contact-item">
                <FiMail />
                <span>contact@finanshels.com</span>
              </a>
            </div>
          </div>

          <div className="footer-links-modern">
            <div className="footer-column">
              <h4 className="footer-heading">Tax Services</h4>
              <Link to="/" className="footer-link">Tax Services Overview</Link>
              <Link to="/corporate-tax-registration" className="footer-link">Corporate Tax Registration</Link>
              <Link to="/corporate-tax-filing" className="footer-link">Corporate Tax Filing</Link>
              <Link to="/vat-registration" className="footer-link">VAT Registration</Link>
              <Link to="/vat-filing" className="footer-link">VAT Filing</Link>
              <Link to="/fta-amendment" className="footer-link">FTA Amendment</Link>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <a href="mailto:hello@finanshels.com" className="footer-link">Contact Us</a>
              <a href="https://wa.me/971521549572?text=I%20need%20tax%20support." className="footer-link">WhatsApp</a>
            </div>
          </div>

          <div className="footer-cta-modern">
            <h4 className="footer-heading">Ready to get started?</h4>
            <p className="footer-cta-text">Tell us where you operate and we&apos;ll match you with the right finance pod.</p>
            <a href="mailto:hello@finanshels.com" className="btn-footer-cta">
              Book Strategy Call
            </a>
          </div>
        </div>

        <div className="footer-bottom-modern">
          <p>© {new Date().getFullYear()} Finanshels. Built for modern finance teams.</p>
          <p className="footer-tagline-small">Financial operations without the busywork.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
