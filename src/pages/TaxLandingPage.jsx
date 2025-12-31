import { useEffect, useState } from 'react';
import {
  FiArrowRight,
  FiCheck,
  FiShield,
  FiClock,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiMessageCircle,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiZap,
  FiBarChart,
  FiFileText,
  FiStar,
  FiChevronDown
} from 'react-icons/fi';
import './TaxLandingPage.css';
import { taxPages } from '../content/taxPages';

const TaxLandingPage = ({ pageKey }) => {
  const page = taxPages[pageKey] || taxPages.overview;
  const [openFaq, setOpenFaq] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setOpenFaq(page.faq?.[0]?.question || '');
    setIsVisible(true);
  }, [pageKey, page.faq]);

  const toggleFaq = (question) => {
    setOpenFaq((prev) => (prev === question ? '' : question));
  };

  return (
    <div className={`tax-landing-modern ${isVisible ? 'loaded' : ''}`}>
      {/* Hero Section - Completely Redesigned */}
      <section className="hero-redesigned">
        <div className="hero-background-overlay" />
        
        <div className="container">
          <div className="hero-grid-redesigned">
            {/* Left Side - Content */}
            <div className="hero-left-content">
              <div className="hero-badge-new">
                <FiShield />
                <span>FTA Registered Tax Agents</span>
              </div>
              
              <h1 className="hero-title-new">{page.heroTitle}</h1>
              
              <p className="hero-description-new">{page.heroSubtitle}</p>
              
              <div className="hero-buttons-new">
                <a href={page.primaryCta?.href} className="btn-hero-primary">
                  <span>{page.primaryCta?.label || 'Get Started Now'}</span>
                  <FiArrowRight />
                </a>
                <a href="https://wa.me/971521549572?text=I%20need%20help%20with%20tax%20services." 
                   target="_blank" 
                   rel="noreferrer" 
                   className="btn-hero-secondary">
                  <FiMessageCircle />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <div className="hero-trust-badges-new">
                <div className="trust-badge-item">
                  <FiClock className="trust-icon-new" />
                  <div>
                    <div className="trust-value-new">24 Hours</div>
                    <div className="trust-label-new">Response Time</div>
                  </div>
                </div>
                <div className="trust-badge-item">
                  <FiShield className="trust-icon-new" />
                  <div>
                    <div className="trust-value-new">FTA Approved</div>
                    <div className="trust-label-new">Registered Agents</div>
                  </div>
                </div>
                <div className="trust-badge-item">
                  <FiUsers className="trust-icon-new" />
                  <div>
                    <div className="trust-value-new">5000+</div>
                    <div className="trust-label-new">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Stats Panel */}
            <div className="hero-right-panel">
              <div className="stats-panel-new">
                <div className="stats-panel-header">
                  <FiTrendingUp />
                  <span>Our Track Record</span>
                </div>
                
                {page.stats?.slice(0, 3).map((stat, idx) => (
                  <div key={idx} className="stat-item-new">
                    <div className="stat-number-new">{stat.value}</div>
                    <div className="stat-text-new">{stat.label}</div>
                  </div>
                ))}

                <div className="panel-highlights">
                  <div className="highlight-title">What's Included:</div>
                  {page.heroBullets?.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="highlight-item">
                      <FiCheck />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a href={page.primaryCta?.href} className="panel-cta-button">
                  Get Started
                  <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Client Logos */}
      <section className="social-proof-section">
        <div className="container">
          <p className="section-subtitle">Trusted by UAE's Leading Businesses</p>
          <div className="client-logos">
            <img src="/clients/zywa.png" alt="Zywa" className="client-logo-img" />
            <img src="/clients/cotu.avif" alt="Cotu" className="client-logo-img" />
            <img src="/clients/veehive.png" alt="Veehive" className="client-logo-img" />
            <img src="/clients/growdash.png" alt="Growdash" className="client-logo-img" />
            <img src="/clients/fuze.png" alt="Fuze" className="client-logo-img" />
            <img src="/clients/Binary.png" alt="Binary" className="client-logo-img" />
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="value-props-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">Why Choose Finanshels</h2>
            <p className="section-description">
              We handle your tax compliance end-to-end, so you can focus on growing your business
            </p>
          </div>

          <div className="value-props-grid">
            <div className="value-card">
              <div className="value-icon">
                <FiZap />
              </div>
              <h3>Lightning Fast</h3>
              <p>24-hour response time with dedicated account managers. No more waiting weeks for updates.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FiShield />
              </div>
              <h3>100% Compliant</h3>
              <p>FTA-registered agents ensuring penalty-free, audit-ready submissions every time.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FiBarChart />
              </div>
              <h3>Full Transparency</h3>
              <p>Real-time updates via WhatsApp and email. Always know exactly where your filing stands.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FiUsers />
              </div>
              <h3>Expert Team</h3>
              <p>Specialized tax professionals with deep UAE market knowledge and FTA relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Light Design */}
      <section className="services-section-light">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Complete Tax Solutions</h2>
          </div>

          <div className="services-list">
            {page.services?.map((service, idx) => (
              <div key={idx} className="service-item-clean">
                <div className="service-number-clean">{String(idx + 1).padStart(2, '0')}</div>
                <div className="service-content-clean">
                  <h3 className="service-title-clean">{service.title}</h3>
                  <p className="service-description-clean">{service.description}</p>
                </div>
                <div className="service-badge-clean">✓ Included</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Simple 4-Step Process</h2>
            <p className="section-description">From consultation to submission in just a few days</p>
          </div>

          <div className="process-timeline">
            {page.process?.map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="process-step-number">{idx + 1}</div>
                <div className="process-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="deliverables-section">
        <div className="container">
          <div className="deliverables-grid">
            <div className="deliverables-card">
              <span className="section-tag">What You Get</span>
              <h2>Complete Package</h2>
              <ul className="deliverables-list">
                {page.deliverables?.map((item, idx) => (
                  <li key={idx}>
                    <FiCheckCircle />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="why-card">
              <div className="why-item">
                <div className="why-icon">
                  <FiZap />
                </div>
                <div>
                  <h4>Real-Time Updates</h4>
                  <p>Live status tracking through WhatsApp and email with transparent timelines.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">
                  <FiShield />
                </div>
                <div>
                  <h4>Penalty Protection</h4>
                  <p>Automated deadline reminders and compliance checks to avoid costly mistakes.</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">
                  <FiAward />
                </div>
                <div>
                  <h4>FTA Experts</h4>
                  <p>Registered agents with proven track record of successful audit defenses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Light Background */}
      <section className="testimonials-section-light">
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">Client Reviews</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>

          <div className="testimonials-grid-light">
            <div className="testimonial-card-light">
              <div className="testimonial-stars-light">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p className="testimonial-text-light">
                "Finanshels made our Corporate Tax registration seamless. Professional, fast, and transparent throughout the entire process."
              </p>
              <div className="testimonial-author-light">
                <div className="author-avatar-light">AS</div>
                <div>
                  <div className="author-name-light">Ahmed Salem</div>
                  <div className="author-company-light">CEO, Tech Startup</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card-light">
              <div className="testimonial-stars-light">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p className="testimonial-text-light">
                "Best tax consultants in Dubai. They saved us from penalties and handled everything with FTA professionally."
              </p>
              <div className="testimonial-author-light">
                <div className="author-avatar-light">SK</div>
                <div>
                  <div className="author-name-light">Sarah Khan</div>
                  <div className="author-company-light">Finance Director</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card-light">
              <div className="testimonial-stars-light">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p className="testimonial-text-light">
                "Responsive, knowledgeable, and reliable. Couldn't ask for better tax support for our growing business."
              </p>
              <div className="testimonial-author-light">
                <div className="author-avatar-light">MR</div>
                <div>
                  <div className="author-name-light">Mohamed Rashid</div>
                  <div className="author-company-light">Business Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Modern Redesign */}
      <section className="faq-modern">
        <div className="container">
          <div className="faq-header-modern">
            <div className="faq-header-content">
              <span className="section-tag">FAQ</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="faq-header-subtitle">Everything you need to know about our tax services</p>
            </div>
            <a href="mailto:connect@finanshels.com" className="faq-contact-btn">
              <FiMail />
              <span>connect@finanshels.com</span>
            </a>
          </div>

          <div className="faq-list-modern">
            {page.faq?.map((item, idx) => {
              const isOpen = openFaq === item.question;
              return (
                <div key={idx} className={`faq-item-modern ${isOpen ? 'active' : ''}`}>
                  <button 
                    className="faq-trigger-modern" 
                    onClick={() => toggleFaq(item.question)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <div className="faq-icon-wrapper">
                      {isOpen ? <FiCheck /> : <FiChevronDown />}
                    </div>
                  </button>
                  <div className="faq-content-modern">
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="faq-cta-box">
            <div className="faq-cta-content">
              <h3>Still have questions?</h3>
              <p>Can't find the answer you're looking for? Our team is here to help.</p>
            </div>
            <a href="https://wa.me/971521549572?text=I%20have%20questions%20about%20tax%20services." 
               target="_blank" 
               rel="noreferrer"
               className="faq-cta-button">
              <FiMessageCircle />
              <span>Chat with us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Completely Redesigned */}
      <section className="cta-finale">
        <div className="cta-finale-bg">
          <div className="cta-bg-shape cta-shape-1"></div>
          <div className="cta-bg-shape cta-shape-2"></div>
        </div>
        
        <div className="container">
          <div className="cta-finale-grid">
            {/* Left Side - Main CTA */}
            <div className="cta-finale-left">
              <div className="cta-badge-large">
                <FiZap />
                <span>Get Started Today</span>
              </div>
              
              <h2 className="cta-finale-title">
                Ready to Stay <span className="text-gradient">Compliant?</span>
              </h2>
              
              <p className="cta-finale-description">
                Join 5000+ UAE businesses that trust us with their tax compliance. Get started in under 24 hours with FTA-registered experts.
              </p>

              <div className="cta-finale-features">
                <div className="cta-feature-item">
                  <div className="cta-feature-icon">
                    <FiCheckCircle />
                  </div>
                  <div>
                    <div className="cta-feature-title">No Hidden Fees</div>
                    <div className="cta-feature-text">Transparent pricing, no surprises</div>
                  </div>
                </div>

                <div className="cta-feature-item">
                  <div className="cta-feature-icon">
                    <FiClock />
                  </div>
                  <div>
                    <div className="cta-feature-title">24hr Response</div>
                    <div className="cta-feature-text">Fast replies to all inquiries</div>
                  </div>
                </div>

                <div className="cta-feature-item">
                  <div className="cta-feature-icon">
                    <FiShield />
                  </div>
                  <div>
                    <div className="cta-feature-title">FTA Registered</div>
                    <div className="cta-feature-text">Fully certified tax agents</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Action Card */}
            <div className="cta-finale-right">
              <div className="cta-action-card">
                <div className="cta-action-header">
                  <FiBarChart />
                  <span>Start Your Tax Journey</span>
                </div>

                <div className="cta-action-content">
                  <h3>Get Free Consultation</h3>
                  <p>Book a call with our tax experts and get started today</p>

                  <a href={page.primaryCta?.href} className="cta-btn-primary">
                    <span>{page.primaryCta?.label || 'Book tax consult'}</span>
                    <FiArrowRight />
                  </a>

                  <div className="cta-divider">
                    <span>or</span>
                  </div>

                  <div className="cta-contact-options">
                    <a href="https://wa.me/971521549572?text=I%20need%20help%20with%20tax%20services." 
                       target="_blank" 
                       rel="noreferrer"
                       className="cta-contact-btn whatsapp">
                      <FiMessageCircle />
                      <span>WhatsApp Us</span>
                    </a>

                    <a href="tel:+971521549572" className="cta-contact-btn phone">
                      <FiPhone />
                      <span>+971 52 154 9572</span>
                    </a>
                  </div>

                  <div className="cta-trust-line">
                    <FiAward />
                    <span>Trusted by 5000+ UAE businesses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxLandingPage;

