import { FiMail } from 'react-icons/fi';
import finanshelsLogo from '../assets/finanshelslogo.svg';

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
              <a href="mailto:connect@finanshels.com" className="footer-contact-item">
                <FiMail />
                <span>connect@finanshels.com</span>
              </a>
            </div>
          </div>

          <div className="footer-links-modern">
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <a href="mailto:connect@finanshels.com" className="footer-link">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-modern">
          <p>© {new Date().getFullYear()} Finanshels. Built for modern finance teams.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
