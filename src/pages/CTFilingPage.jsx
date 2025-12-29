import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiShield,
  FiAlertCircle,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiZap,
  FiStar,
  FiDollarSign,
  FiFileText
} from 'react-icons/fi';
import './CTFilingPage.css';

const CTFilingPage = () => {
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
      title: 'Filing Deadlines',
      description: 'Corporate Tax returns have strict deadlines. Late filings result in FTA penalties starting at AED 1,000 and increasing monthly.'
    },
    {
      icon: <FiAlertCircle />,
      title: 'Complex Calculations',
      description: 'Determining taxable income, allowable deductions, and exemptions requires expert knowledge of UAE tax laws and FTA guidelines.'
    },
    {
      icon: <FiDollarSign />,
      title: 'Costly Errors',
      description: 'Incorrect tax calculations lead to underpayment penalties or overpayment of taxes. Both hurt your business bottom line.'
    },
    {
      icon: <FiFileText />,
      title: 'Documentation Burden',
      description: 'Proper record-keeping, financial statements, and supporting documents are mandatory for FTA compliance and audits.'
    }
  ];

  const solutions = [
    {
      icon: <FiFileText />,
      title: 'Complete Tax Preparation',
      description: 'We prepare your entire Corporate Tax return — from financial review to FTA-ready submission with all supporting documents.'
    },
    {
      icon: <FiCheckCircle />,
      title: 'Timely Filing Guaranteed',
      description: 'Never miss a deadline. We track all due dates and ensure your returns are filed accurately and on time.'
    },
    {
      icon: <FiDollarSign />,
      title: 'Maximum Tax Savings',
      description: 'Our experts identify all eligible deductions, exemptions, and reliefs to minimize your tax liability legally.'
    },
    {
      icon: <FiUsers />,
      title: 'Dedicated Tax Advisor',
      description: 'Your own FTA-approved tax agent for year-round consultations, planning, and strategic tax advice.'
    }
  ];

  const testimonials = [
    {
      quote: "If you ever do any financial modeling/forecasting, I seriously can't recommend Finanshels enough. they are a dependable team of professionals who work hard to deliver results.",
      name: 'Bader Al Kazimi',
      role: 'Founder, Optimize App',
      avatar: '/Founders/bader.jpeg'
    },
    {
      quote: 'They thoroughly understood our business processes and streamlined our accounting processes perfectly where our both in-house and outsourced accountants failed multiple times.',
      name: 'Meet Patel',
      role: 'Former COO, StudentHub & BAWES',
      avatar: '/Founders/themeetpatel.png'
    },
    {
      quote: 'Fast, friendly, and very professional. I love how communicative they were handling our Corporate tax registration.',
      name: 'Abdulla Al-Ogail',
      role: 'Co-founder & CEO, Olymon',
      avatar: '/Founders/abdulla.jpeg'
    }
  ];

  return (
    <div className="ct-filing-page">
      {/* Hero Section */}
      <section className="ct-hero">
        <div className="hero-background-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <FiAlertCircle className="badge-icon" />
              <span>Corporate Tax Filing Season Open</span>
            </div>
            
            <h1 className="hero-title">
              Corporate & Business Tax Preparation<br />
              <span className="gradient-text">Made Simple</span>
            </h1>
            
            <p className="hero-description">
              Expert Corporate Tax preparation and filing for UAE businesses. Our FTA-compliant tax experts ensure accurate calculations, maximum deductions, and timely submissions — keeping you penalty-free.
            </p>
            
            <div className="hero-features">
              <div className="feature-item">
                <FiShield className="feature-icon" />
                <span>FTA-compliant tax experts</span>
              </div>
              <div className="feature-item">
                <FiCheckCircle className="feature-icon" />
                <span>Accurate tax calculations</span>
              </div>
              <div className="feature-item">
                <FiDollarSign className="feature-icon" />
                <span>Maximum deductions guaranteed</span>
              </div>
            </div>
            
            <div className="hero-ctas">
              <a href="#file" className="btn-primary">
                <span>Get Started Today</span>
                <FiArrowRight className="btn-icon" />
              </a>
              <a href="https://wa.me/971521549572" className="btn-secondary" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
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
        </div>
      </section>

      {/* Challenge Section */}
      <section className="challenge-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">THE CHALLENGE</span>
            <h2 className="section-title">
              Corporate Tax Preparation is <span className="highlight">Complex</span>
            </h2>
            <p className="section-description">
              UAE Corporate Tax requires accurate calculations, proper documentation, and timely filing. Without expert guidance, businesses risk penalties and missed deductions.
            </p>
          </div>
          
          <div className="challenge-grid">
            {challenges.map((challenge, index) => (
              <div key={index} className="challenge-card">
                <div className="challenge-icon">{challenge.icon}</div>
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
          <div className="solution-layout">
            <div className="solution-content">
              <span className="section-badge">OUR SOLUTION</span>
              <h2 className="section-title">
                Expert Tax <span className="highlight">Preparation</span>
              </h2>
              <p className="section-description">
                From tax calculation to filing, our FTA-compliant tax experts prepare and submit your returns accurately — maximizing savings while ensuring full compliance.
              </p>
              
              <div className="solution-grid">
                {solutions.map((solution, index) => (
                  <div key={index} className="solution-card">
                    <div className="solution-icon">{solution.icon}</div>
                    <h3 className="solution-title">{solution.title}</h3>
                    <p className="solution-description">{solution.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="solution-visual">
              <div className="visual-card">
                <div className="visual-header">
                  <FiFileText className="visual-icon" />
                  <h3>Tax Filing Made Simple</h3>
                </div>
                <div className="visual-content">
                  <div className="visual-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Financial Review</h4>
                      <p>We review your financials and identify deductions</p>
                    </div>
                  </div>
                  <div className="visual-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Tax Calculation</h4>
                      <p>Accurate calculations with maximum savings</p>
                    </div>
                  </div>
                  <div className="visual-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>FTA Submission</h4>
                      <p>File with FTA and receive confirmation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">TAX PREPARATION PACKAGES</span>
            <h2 className="section-title">
              Expert Tax Preparation for Every <span className="highlight">Business Size</span>
            </h2>
            <p className="section-description">
              Transparent pricing. Maximum deductions. 100% FTA compliance guaranteed.
            </p>
          </div>
          
          <div className="pricing-alert">
            <FiAlertCircle className="alert-icon" />
            <div>
              <span>Corporate Tax Filing Deadline Approaching</span>
              <p>At Finanshels, we explore every possible way to maximize your benefits for Corporate Tax filing, from Claiming Small Business Relief to ensuring you're fully compliant and optimized</p>
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
              Trusted by <span className="highlight">5,000+ UAE Businesses</span>
            </h2>
            <p className="section-description">
              See how we've helped businesses navigate Corporate Tax preparation with confidence.
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
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
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">
              Tax Preparation <span className="highlight">FAQs</span>
            </h2>
            <p className="section-description">
              Everything you need to know about Corporate Tax preparation and filing.
            </p>
          </div>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-question">When is my Corporate Tax return due?</h3>
              <p className="faq-answer">
                Corporate Tax returns must be filed within 9 months from the end of your financial year. For businesses with a December year-end, the deadline is September 30th. Late filing results in penalties starting at AED 1,000.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">What documents do I need for tax preparation?</h3>
              <p className="faq-answer">
                You'll need audited financial statements, trial balance, bank statements, invoices, receipts for deductible expenses, and details of any related-party transactions. Our team will provide a complete checklist based on your business.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">How do you maximize my tax deductions?</h3>
              <p className="faq-answer">
                Our tax experts review all eligible expenses including depreciation, bad debts, employee costs, and business expenses. We ensure you claim every allowable deduction while maintaining full FTA compliance.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">What is the Corporate Tax rate in UAE?</h3>
              <p className="faq-answer">
                The standard Corporate Tax rate is 9% on taxable income exceeding AED 375,000. Income up to AED 375,000 is taxed at 0%. Qualifying Free Zone businesses may benefit from 0% on qualifying income.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Can you help if I'm behind on my tax filings?</h3>
              <p className="faq-answer">
                Yes! We specialize in helping businesses catch up on overdue filings. We'll prepare your returns, calculate any penalties, and work with you to get fully compliant with the FTA.
              </p>
            </div>
            
            <div className="faq-item">
              <h3 className="faq-question">Do you provide year-round tax support?</h3>
              <p className="faq-answer">
                Absolutely! Our packages include ongoing support for tax planning, quarterly estimates, and strategic advice throughout the year — not just at filing time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section" id="file">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content">
            <span className="section-badge badge-white">GET STARTED TODAY</span>
            <h2 className="cta-title">
              Expert Tax Preparation for Your Business
            </h2>
            <p className="cta-description">
              Join 5,000+ UAE businesses who trust Finanshels for accurate, compliant tax preparation. Maximize your deductions and file with confidence.
            </p>
            
            <div className="cta-steps">
              <div className="cta-step">
                <div className="step-number">1</div>
                <span>Submit your details for a free tax consultation</span>
              </div>
              <div className="cta-step">
                <div className="step-number">2</div>
                <span>We review your financials and prepare your return</span>
              </div>
              <div className="cta-step">
                <div className="step-number">3</div>
                <span>File with FTA and receive confirmation — stress-free</span>
              </div>
            </div>
            
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
                  <span>Get Free Tax Consultation</span>
                  <FiArrowRight className="btn-icon" />
                </button>
                <p className="form-disclaimer">
                  By submitting, you agree to receive communications from Finanshels. Your data is secure and will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTFilingPage;



