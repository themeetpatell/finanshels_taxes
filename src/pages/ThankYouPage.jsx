import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import './ThankYouPage.css';

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <section className="thank-you-hero">
        <div className="thank-you-card">
          <span className="thank-you-icon" aria-hidden="true">
            <FiCheckCircle />
          </span>
          <h1 className="thank-you-title">Thanks! We received your submission.</h1>
          <p className="thank-you-subtitle">
            A tax specialist will reach out shortly to confirm next steps. If you need immediate help, chat with us on WhatsApp.
          </p>
          <div className="thank-you-actions">
            <a className="thank-you-primary" href="https://wa.me/971521549572" target="_blank" rel="noreferrer">
              Chat on WhatsApp
              <FiArrowRight className="thank-you-arrow" />
            </a>
            <a className="thank-you-secondary" href="/corporate-tax-filing">
              Back to Corporate Tax Filing
            </a>
            <a className="thank-you-secondary" href="/corporate-tax-registration">
              Back to Corporate Tax Registration
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;
