import { FaWhatsapp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { brand } from '../content/countries';

const FloatingContacts = () => {
  const phoneHref = brand.phone.replace(/\s+/g, '');

  return (
    <div className="floating-contacts" aria-label="Contact options">
      <a
        className="contact-btn whatsapp"
        href="https://wa.me/971521549572?text=Hey%20I%20saw%20your%20ad%20about%20tax%20services.%20I%20want%20to%20know%20more."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="contact-icon" />
        <span className="contact-label">WhatsApp</span>
      </a>
      <a className="contact-btn phone" href={`tel:${phoneHref}`} aria-label="Call us">
        <FiPhoneCall className="contact-icon" />
        <span className="contact-label">Call us</span>
      </a>
    </div>
  );
};

export default FloatingContacts;
