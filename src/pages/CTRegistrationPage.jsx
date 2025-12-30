import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiShield,
  FiAlertCircle,
  FiTrendingUp,
  FiUsers,
  FiZap,
  FiStar,
  FiFileText,
  FiAward,
  FiChevronDown
} from 'react-icons/fi';
import { useState } from 'react';
import './CTRegistrationPage.css';

const CTRegistrationPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const clientLogos = [
    { src: '/clients/Binary.png', alt: 'Binary' },
    { src: '/clients/actualize.png', alt: 'Actualize' },
    { src: '/clients/carbonsirf.png', alt: 'Carbonsirf' },
    { src: '/clients/cotu.avif', alt: 'Cotu' },
    { src: '/clients/fuze.png', alt: 'Fuze' },
    { src: '/clients/growdash.png', alt: 'Growdash' },
    { src: '/clients/humlog.png', alt: 'Humlog' },
    { src: '/clients/veehive.png', alt: 'Veehive' },
    { src: '/clients/zywa.png', alt: 'Zywa' }
  ];

  const challenges = [
    {
      icon: <FiClock />,
      title: 'Missed Deadlines',
      description: 'UAE Corporate Tax registration deadline is approaching fast. Late registration means hefty FTA penalties up to AED 10,000.'
    },
    {
      icon: <FiFileText />,
      title: 'Complex Requirements',
      description: 'Confusing FTA portal, unclear documentation requirements, and technical jargon making self-registration a nightmare.'
    },
    {
      icon: <FiAlertCircle />,
      title: 'Rejection Risk',
      description: 'Incorrect applications get rejected. Each rejection delays your registration and puts your business at compliance risk.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Ongoing Compliance',
      description: 'Registration is just the start. Quarterly filings, record-keeping, and annual returns require expert handling.'
    }
  ];

  const solutions = [
    {
      icon: <FiShield />,
      title: 'Complete CT Registration',
      description: 'We handle your entire Corporate Tax registration with the FTA — from document preparation to final approval.'
    },
    {
      icon: <FiZap />,
      title: 'Fast 48-Hour Turnaround',
      description: 'Get your Tax Registration Number (TRN) within 48 hours. No delays, no rejections, guaranteed.'
    },
    {
      icon: <FiCheckCircle />,
      title: 'Ongoing Tax Compliance',
      description: 'Annual CT filing, quarterly reporting, and full compliance management to keep you penalty-free.'
    },
    {
      icon: <FiUsers />,
      title: 'Dedicated Tax Advisor',
      description: 'Your own FTA-compliant tax agent available for consultations, queries, and strategic tax planning.'
    }
  ];

  const testimonials = [
    {
      quote: 'Fast, friendly, and very professional. I love how communicative they were handling our Corporate tax registration.',
      name: 'Abdulla Al-Ogail',
      role: 'Co-founder & CEO, Olymon',
      avatar: '/Founders/abdulla.jpeg'
    },
    {
      quote: 'Excellent service. Finanshels has made the tax registration process fast and easy. Their communication is super prompt and clear. 5 stars!!',
      name: 'Tina Chugani',
      role: 'Managing Director, Proxis LLC',
      avatar: '/Founders/tina.jpeg'
    },
    {
      quote: 'The team was super responsive and the entire service was efficiently processed.',
      name: 'Usama Naeem',
      role: 'Co-founder, Qureos',
      avatar: '/Founders/usama.jpeg'
    },
    {
      quote: 'Outstanding support throughout the entire process. They made corporate tax registration seamless and stress-free. Highly recommend!',
      name: 'Bader Al Mulla',
      role: 'Founder, TechVentures',
      avatar: '/Founders/bader.jpeg'
    },
    {
      quote: 'Professional, efficient, and always available when we needed them. The best tax service we\'ve worked with in the UAE.',
      name: 'Jeremy Smith',
      role: 'CEO, Digital Solutions',
      avatar: '/Founders/jeremy.png'
    },
    {
      quote: 'Finanshels exceeded our expectations. Their expertise in corporate tax matters is unmatched. Truly a reliable partner.',
      name: 'Jomon Joseph',
      role: 'Managing Partner, Growth Capital',
      avatar: '/Founders/jomon.jpg'
    },
    {
      quote: 'Quick turnaround, clear communication, and excellent results. They handled everything professionally from start to finish.',
      name: 'Pravin Kumar',
      role: 'Director, Innovation Labs',
      avatar: '/Founders/pravin.jpeg'
    },
    {
      quote: 'The team\'s knowledge of UAE tax regulations is impressive. They guided us through every step with clarity and precision.',
      name: 'Sapna Sharma',
      role: 'Co-founder, StartupHub',
      avatar: '/Founders/sapna.jpg'
    },
    {
      quote: 'We were worried about the complexity, but Finanshels made it simple. Excellent service and great value for money.',
      name: 'Szilvia Kovacs',
      role: 'CEO, Global Ventures',
      avatar: '/Founders/szilvia.jpeg'
    }
  ];

  return (
    <div className="ct-registration-page">
      {/* Hero Section */}
      <section className="ct-hero">
        <div className="hero-background-overlay"></div>
        <div className="hero-pattern"></div>
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content-column">
              <div className="hero-badge">
                <FiAlertCircle className="badge-icon" />
                <span>UAE Corporate Tax Deadline Approaching!</span>
              </div>
              
              <h1 className="hero-title">
                Corporate & Business Tax Registration<br />
                <span className="gradient-text">Made Simple</span>
              </h1>
              
              <p className="hero-description">
                Get your UAE Corporate Tax registration done right the first time. FTA-approved tax agents handle your CT registration, tax filing, and ongoing compliance — so you stay penalty-free.
              </p>
              
              <div className="hero-features">
                <div className="feature-item">
                  <FiShield className="feature-icon" />
                  <span>FTA-compliant tax agents</span>
                </div>
                <div className="feature-item">
                  <FiZap className="feature-icon" />
                  <span>Fast 48-hour registration</span>
                </div>
                <div className="feature-item">
                  <FiCheckCircle className="feature-icon" />
                  <span>100% compliance guaranteed</span>
                </div>
              </div>
              
              <div className="hero-ctas">
                <a href="#register" className="btn-primary">
                  <span>Register Now</span>
                  <FiArrowRight className="btn-icon" />
                </a>
                <a href="https://wa.me/971521549572" className="btn-secondary" target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            <div className="hero-form-column">
              <div className="hero-form">
                <h3 className="hero-form-title">Get Your Free Consultation</h3>
                <p className="hero-form-subtitle">Start your registration process today</p>
                <form className="hero-registration-form">
                  <input type="text" placeholder="Your Name *" required />
                  <input type="email" placeholder="Email Address *" required />
                  <input type="tel" placeholder="Phone Number *" required />
                  <input type="text" placeholder="Company Name" />
                  <button type="submit" className="hero-form-submit">
                    <span>Get Free Consultation</span>
                    <FiArrowRight className="btn-icon" />
                  </button>
                  <p className="hero-form-disclaimer">
                    By submitting, you agree to receive communications from Finanshels. Your data is secure and will never be shared.
                  </p>
                </form>
              </div>
            </div>
          </div>
          
          <div className="hero-trust">
            <p className="trust-label">Trusted by 5,000+ businesses in the UAE</p>
            <div className="logo-marquee">
              <div className="logo-track">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div key={`${logo.alt}-${index}`} className="logo-item">
                    <img src={logo.src} alt={`${logo.alt} logo`} className="logo-image" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">THE CHALLENGE</span>
            <h2 className="section-title">
              UAE Corporate Tax Registration is <span className="highlight">Complicated</span>
            </h2>
            <p className="section-description">
              With the UAE's new Corporate Tax regime, every business needs to register with the FTA. But navigating the process alone can lead to costly mistakes and delays.
            </p>
          </div>
          
          <div className="challenge-grid">
            {challenges.map((challenge, index) => (
              <div key={index} className="challenge-card">
                <div className="challenge-icon-wrapper">
                  <div className="challenge-icon">{challenge.icon}</div>
                </div>
                <h3 className="challenge-title">{challenge.title}</h3>
                <p className="challenge-description">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">OUR SOLUTION</span>
            <h2 className="section-title">
              End-to-End Tax <span className="highlight">Registration</span>
            </h2>
            <p className="section-description">
              From Corporate Tax registration to ongoing compliance, our FTA-compliant tax agents handle everything — so you stay compliant and focus on growing your business.
            </p>
          </div>
          
          <div className="solution-layout">
            <div className="solution-grid">
              {solutions.map((solution, index) => (
                <div key={index} className="solution-card">
                  <div className="solution-icon-wrapper">
                    <div className="solution-icon">{solution.icon}</div>
                  </div>
                  <h3 className="solution-title">{solution.title}</h3>
                  <p className="solution-description">{solution.description}</p>
                </div>
              ))}
            </div>
            
            <div className="solution-visual">
              <div className="certificate-image-wrapper">
                <img 
                  src="/CTCertificate.png" 
                  alt="UAE Corporate Tax Registration Certificate" 
                  className="certificate-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">TAX REGISTRATION PACKAGES</span>
            <h2 className="section-title">
              Affordable Plans for Every <span className="highlight">Business Size</span>
            </h2>
            <p className="section-description">
              Transparent pricing. No hidden fees. 100% FTA approval guaranteed.
            </p>
          </div>
          
          <div className="pricing-alert">
            <FiAlertCircle className="alert-icon" />
            <div className="alert-content">
              <span className="alert-title">Corporate Tax Registration Deadline Approaching</span>
              <p className="alert-text">Avoid penalties up to AED 10,000. Register before the deadline.</p>
            </div>
          </div>
          
          <div className="pricing-card-wrapper">
            <div className="pricing-card">
              <div className="pricing-badge">
                <FiAward className="badge-icon-inline" />
                <span>Most Popular</span>
              </div>
              
              <div className="pricing-header">
                <h3 className="pricing-title">Corporate Tax Registration Package</h3>
                <p className="pricing-subtitle">Complete FTA-compliant registration with expert support</p>
                
                <div className="pricing-price-wrapper">
                  <div className="price-row">
                    <span className="price-old">AED 599</span>
                    <div className="discount-badge">50% OFF</div>
                  </div>
                  <div className="price-new-wrapper">
                    <span className="currency">AED</span>
                    <span className="price-new">299</span>
                    <span className="price-period">only</span>
                  </div>
                  <p className="price-note">Limited time offer • Save AED 300</p>
                </div>
              </div>
              
              <div className="pricing-divider">
                <span className="divider-text">What's included</span>
              </div>
              
              <div className="pricing-features">
                <ul className="features-list">
                  <li>
                    <div className="feature-icon-wrapper">
                      <FiCheckCircle className="check-icon" />
                    </div>
                    <div className="feature-content">
                      <span className="feature-name">CT Registration</span>
                      <span className="feature-desc">Full FTA registration process handled</span>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-wrapper">
                      <FiCheckCircle className="check-icon" />
                    </div>
                    <div className="feature-content">
                      <span className="feature-name">SMB Relief Consultation</span>
                      <span className="feature-desc">Maximize your tax benefits</span>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-wrapper">
                      <FiCheckCircle className="check-icon" />
                    </div>
                    <div className="feature-content">
                      <span className="feature-name">Corporate Tax Number</span>
                      <span className="feature-desc">Get your TRN within 48 hours</span>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-wrapper">
                      <FiCheckCircle className="check-icon" />
                    </div>
                    <div className="feature-content">
                      <span className="feature-name">Compliance Checklist</span>
                      <span className="feature-desc">Stay on track with requirements</span>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-wrapper">
                      <FiCheckCircle className="check-icon" />
                    </div>
                    <div className="feature-content">
                      <span className="feature-name">Compliance Documentation</span>
                      <span className="feature-desc">All paperwork prepared & filed</span>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon-wrapper">
                      <FiCheckCircle className="check-icon" />
                    </div>
                    <div className="feature-content">
                      <span className="feature-name">30 mins Free Tax Consultation</span>
                      <span className="feature-desc">Expert guidance on your tax matters</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="pricing-footer">
                <a href="#register" className="pricing-cta">
                  <span>Register Now</span>
                  <FiArrowRight className="btn-icon" />
                </a>
                <p className="pricing-guarantee">
                  <FiShield className="guarantee-icon" />
                  <span>100% FTA Approval Guaranteed or Money Back</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">CLIENT SUCCESS STORIES</span>
            <h2 className="section-title">
              Trusted by <span className="highlight">5000+ UAE Businesses</span>
            </h2>
            <p className="section-description">
              Don't just take our word for it. Here's what our clients say about working with Finanshels.
            </p>
          </div>
          
          <div className="testimonials-scroll-container">
            <div className="testimonials-scroll">
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="star-icon" fill="#f16610" stroke="#f16610" />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.avatar ? (
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      ) : (
                        <span>{testimonial.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}</span>
                      )}
                    </div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-role">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">
              Tax Registration <span className="highlight">FAQs</span>
            </h2>
            <p className="section-description">
              Everything you need to know about UAE Corporate Tax registration.
            </p>
          </div>
          
          <div className="faq-list">
            <div 
              className={`faq-item ${openFaq === 0 ? 'faq-open' : ''}`}
              onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
            >
              <div className="faq-question-wrapper">
                <h3 className="faq-question">Who needs to register for UAE Corporate Tax?</h3>
                <FiChevronDown className="faq-chevron" />
              </div>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">
                  All UAE businesses including mainland companies, free zone entities, and foreign companies with a permanent establishment in the UAE must register for Corporate Tax. This includes LLCs, sole establishments, and branches of foreign companies.
                </p>
              </div>
            </div>
            
            <div 
              className={`faq-item ${openFaq === 1 ? 'faq-open' : ''}`}
              onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
            >
              <div className="faq-question-wrapper">
                <h3 className="faq-question">What is the deadline for Corporate Tax registration?</h3>
                <FiChevronDown className="faq-chevron" />
              </div>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">
                  The FTA has set specific deadlines based on your license issuance date. Late registration can result in penalties up to AED 10,000. Contact us immediately to confirm your deadline and avoid penalties.
                </p>
              </div>
            </div>
            
            <div 
              className={`faq-item ${openFaq === 2 ? 'faq-open' : ''}`}
              onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
            >
              <div className="faq-question-wrapper">
                <h3 className="faq-question">How long does CT registration take?</h3>
                <FiChevronDown className="faq-chevron" />
              </div>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">
                  With Finanshels, your Corporate Tax registration is typically completed within 48 hours. We prepare all required documents, submit your application to the FTA, and ensure approval on the first attempt.
                </p>
              </div>
            </div>
            
            <div 
              className={`faq-item ${openFaq === 3 ? 'faq-open' : ''}`}
              onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
            >
              <div className="faq-question-wrapper">
                <h3 className="faq-question">What documents are required for CT registration?</h3>
                <FiChevronDown className="faq-chevron" />
              </div>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">
                  You'll need your trade license, Emirates ID of owners/partners, MOA/AOA, passport copies, and proof of address. Our team will guide you through the exact requirements for your business type.
                </p>
              </div>
            </div>
            
            <div 
              className={`faq-item ${openFaq === 4 ? 'faq-open' : ''}`}
              onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
            >
              <div className="faq-question-wrapper">
                <h3 className="faq-question">What is the Corporate Tax rate in UAE?</h3>
                <FiChevronDown className="faq-chevron" />
              </div>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">
                  The standard Corporate Tax rate is 9% on taxable income exceeding AED 375,000. Income up to AED 375,000 is taxed at 0%. Qualifying Free Zone businesses may benefit from 0% on qualifying income.
                </p>
              </div>
            </div>
            
            <div 
              className={`faq-item ${openFaq === 5 ? 'faq-open' : ''}`}
              onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
            >
              <div className="faq-question-wrapper">
                <h3 className="faq-question">Do you handle ongoing tax compliance after registration?</h3>
                <FiChevronDown className="faq-chevron" />
              </div>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">
                  Yes! We offer comprehensive packages that include annual CT filing, quarterly VAT returns, tax planning, and ongoing compliance monitoring. Your dedicated tax advisor ensures you never miss a deadline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section" id="register">
        <div className="cta-background"></div>
        <div className="cta-pattern"></div>
        <div className="container">
          <div className="cta-layout">
            <div className="cta-content-column">
              <span className="section-badge badge-white">REGISTER NOW</span>
              <h2 className="cta-title">
                Get Your Corporate Tax Registration<br />
                Done Right
              </h2>
              <p className="cta-description">
                Join 1,200+ UAE businesses who've successfully registered with the FTA through Finanshels. Don't risk penalties — let our FTA-compliant tax agents handle your registration.
              </p>
              
              <div className="cta-steps">
                <div className="cta-step">
                  <div className="step-number">1</div>
                  <span>Submit your details for a free consultation</span>
                </div>
                <div className="cta-step">
                  <div className="step-number">2</div>
                  <span>We review your documents and prepare your application</span>
                </div>
                <div className="cta-step">
                  <div className="step-number">3</div>
                  <span>Receive your TRN within 48 hours — guaranteed</span>
                </div>
              </div>
            </div>
            
            <div className="cta-form-column">
              <div className="cta-form">
                <form className="registration-form">
                  <div className="form-row">
                    <input type="text" placeholder="Your Name *" required />
                    <input type="email" placeholder="Email Address *" required />
                  </div>
                  <div className="form-row">
                    <input type="tel" placeholder="Phone Number *" required />
                    <input type="text" placeholder="Company Name" />
                  </div>
                  <button type="submit" className="form-submit">
                    <span>Get Free Consultation</span>
                    <FiArrowRight className="btn-icon" />
                  </button>
                  <p className="form-disclaimer">
                    By submitting, you agree to receive communications from Finanshels. Your data is secure and will never be shared.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTRegistrationPage;
