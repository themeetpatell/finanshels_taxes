import { useState } from 'react';
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
  FiFileText,
  FiChevronDown
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

  const testimonialStats = [
    {
      label: 'Avg. satisfaction',
      value: '4.9/5',
      description: 'Across tax preparation and advisory projects',
      icon: <FiStar />
    },
    {
      label: 'Filings submitted',
      value: '6,000+',
      description: 'Corporate Tax submissions without penalties',
      icon: <FiFileText />
    },
    {
      label: 'Faster turnaround',
      value: '3x',
      description: 'Faster than typical in-house teams',
      icon: <FiZap />
    }
  ];


  const packageFeatures = [
    {
      icon: <FiCheckCircle />,
      title: 'CT Registration',
      description: 'Full FTA registration handled with documentation prepared and filed for you.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'SMB Relief Advisory',
      description: 'Guidance on reliefs, exemptions, and incentives tailored to your business.'
    },
    {
      icon: <FiFileText />,
      title: 'Compliance Dossier',
      description: 'FTA-ready checklists, filings, and audit-proof records prepared end-to-end.'
    },
    {
      icon: <FiUsers />,
      title: 'Dedicated Tax Advisor',
      description: 'One-to-one expert working in Arabic or English with proactive reminders.'
    },
    {
      icon: <FiShield />,
      title: 'Penalty Protection',
      description: 'Quality checks to reduce rejection risk and keep you penalty-free.'
    },
    {
      icon: <FiClock />,
      title: '48h Kickoff',
      description: 'Your case is set up within 48 hours with status updates you can track.'
    }
  ];

  const faqs = [
    {
      question: 'When is my Corporate Tax return due?',
      answer:
        'Corporate Tax returns must be filed within 9 months from the end of your financial year. For businesses with a December year-end, the deadline is September 30th. Late filing results in penalties starting at AED 1,000.'
    },
    {
      question: 'What documents do I need for tax preparation?',
      answer:
        "You'll need audited financial statements, trial balance, bank statements, invoices, receipts for deductible expenses, and details of any related-party transactions. Our team will provide a complete checklist based on your business."
    },
    {
      question: 'How do you maximize my tax deductions?',
      answer:
        'Our tax experts review all eligible expenses including depreciation, bad debts, employee costs, and business expenses. We ensure you claim every allowable deduction while maintaining full FTA compliance.'
    },
    {
      question: 'What is the Corporate Tax rate in UAE?',
      answer:
        'The standard Corporate Tax rate is 9% on taxable income exceeding AED 376,000. Income up to AED 376,000 is taxed at 0%. Qualifying Free Zone businesses may benefit from 0% on qualifying income.'
    },
    {
      question: "Can you help if I'm behind on my tax filings?",
      answer:
        "Yes! We specialize in helping businesses catch up on overdue filings. We'll prepare your returns, calculate any penalties, and work with you to get fully compliant with the FTA."
    },
    {
      question: 'Do you provide year-round tax support?',
      answer:
        'Absolutely! Our packages include ongoing support for tax planning, quarterly estimates, and strategic advice throughout the year — not just at filing time.'
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="ct-filing-page">
      {/* Hero Section */}
      <section className="ct-hero">
        <div className="hero-background-overlay"></div>
        <div className="container">
          <div className="hero-layout">
            <div className="hero-content-column">
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
              
              <ul className="hero-features" aria-label="Why choose us">
                <li>
                  <FiShield className="hero-features-icon" aria-hidden />
                  <span>FTA-compliant experts</span>
                </li>
                <li>
                  <FiCheckCircle className="hero-features-icon" aria-hidden />
                  <span>Accurate calculations</span>
                </li>
                <li>
                  <FiDollarSign className="hero-features-icon" aria-hidden />
                  <span>Maximum deductions</span>
                </li>
              </ul>
              
              <div className="hero-ctas">
                <a href="#file" className="btn-primary">
                  <span>Get Started Today</span>
                  <FiArrowRight className="btn-icon" />
                </a>
                <a href="https://wa.me/971521549572" className="btn-secondary btn-whatsapp" target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            <div className="hero-form-column">
              <div className="hero-form">
                <h3 className="hero-form-title">Get Your Free Tax Consultation</h3>
                <p className="hero-form-subtitle">Start your filing process today</p>
                <form
                  className="hero-registration-form"
                  action="https://forms.zohopublic.com/finanshelsllc/form/GetYourFreeTaxConsultation/formperma/qrwDpTkh6_-7kf4gTszEDr7dJrwAQAEQjOhTK9TPLEs/htmlRecords/submit"
                  method="POST"
                  acceptCharset="UTF-8"
                  encType="multipart/form-data"
                >
                  <input type="hidden" name="zf_referrer_name" value="" />
                  <input type="hidden" name="zf_redirect_url" value={`${window.location.origin}/thank-you`} />
                  <input type="hidden" name="zc_gad" value="" />
                  <input type="hidden" name="utm_source" value="" />
                  <input type="hidden" name="utm_medium" value="" />
                  <input type="hidden" name="utm_campaign" value="" />
                  <input type="hidden" name="utm_term" value="" />
                  <input type="hidden" name="utm_content" value="" />
                  <input type="text" name="Name_First" maxLength={255} placeholder="First Name *" required />
                  <input type="text" name="Name_Last" maxLength={255} placeholder="Last Name" />
                  <input type="email" name="Email" maxLength={255} placeholder="Email * (e.g. name@yourdomain.com)" required />
                  <input type="tel" name="PhoneNumber_countrycode" maxLength={20} placeholder="Phone * (e.g. +971 00 000 0000)" required />
                  <input type="text" name="SingleLine1" maxLength={255} placeholder="Company Name *" required />
                  <input type="text" name="SingleLine2" maxLength={255} placeholder="Job Title" />
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
            
            <div className="hero-trust">
              <p className="trust-label">Trusted by 6,000+ businesses in the UAE</p>
              <div className="logo-marquee">
                <div className="logo-track">
                  {clientLogos.map((logo) => (
                    <div key={logo.alt} className="logo-item">
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
          <div className="solution-layout solution-layout-single">
            <div className="solution-intro">
              <span className="section-badge">OUR SOLUTION</span>
              <h2 className="section-title">
                Expert Tax <span className="highlight">Preparation</span>
              </h2>
              <p className="section-description">
                From tax calculation to filing, our FTA-compliant tax experts prepare and submit your returns accurately — maximizing savings while ensuring full compliance.
              </p>
            </div>

            <div className="solution-steps-inline" aria-label="How it works">
              <div className="solution-step-item">
                <div className="solution-step-num">1</div>
                <h4 className="solution-step-title">Financial Review</h4>
                <p className="solution-step-desc">We review your financials and identify deductions</p>
              </div>
              <div className="solution-step-connector" aria-hidden="true" />
              <div className="solution-step-item">
                <div className="solution-step-num">2</div>
                <h4 className="solution-step-title">Tax Calculation</h4>
                <p className="solution-step-desc">Accurate calculations with maximum savings</p>
              </div>
              <div className="solution-step-connector" aria-hidden="true" />
              <div className="solution-step-item">
                <div className="solution-step-num">3</div>
                <h4 className="solution-step-title">FTA Submission</h4>
                <p className="solution-step-desc">File with FTA and receive confirmation</p>
              </div>
            </div>

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
        </div>
      </section>

      {/* Pricing Section - Redesigned */}
      <section className="pricing-section-v2">
        <div className="container">
          <header className="pricing-v2-header">
            <span className="pricing-v2-badge">Tax Filing & Registration</span>
            <h2 className="pricing-v2-title">One plan. Everything included.</h2>
            <p className="pricing-v2-lead">
              Transparent pricing. We prepare, review, and submit every document so you get FTA approval without surprises.
            </p>
          </header>

          <div className="pricing-v2-card">
            <div className="pricing-v2-card-inner">
              <div className="pricing-v2-main">
                <div className="pricing-v2-name-row">
                  <span className="pricing-v2-popular">Most chosen</span>
                  <h3 className="pricing-v2-name">Corporate Tax Filing & Registration</h3>
                </div>
                <div className="pricing-v2-price-block">
                  <div className="pricing-v2-price">
                    <span className="pricing-v2-currency">AED</span>
                    <span className="pricing-v2-amount">299</span>
                    <span className="pricing-v2-period">one-time</span>
                  </div>
                  <div className="pricing-v2-was">
                    <span className="pricing-v2-was-line">Was AED 599</span>
                    <span className="pricing-v2-save">Save AED 300</span>
                  </div>
                </div>
                <p className="pricing-v2-desc">
                  FTA-compliant filing and registration with documentation, compliance checks, and expert support start to finish.
                </p>
                <a href="#file" className="pricing-v2-cta">
                  <span>Get started</span>
                  <FiArrowRight />
                </a>
                <ul className="pricing-v2-trust" aria-label="Guarantees">
                  <li><FiCheckCircle /> Money-back if FTA approval not secured</li>
                  <li><FiClock /> Kickoff within 24 hours</li>
                </ul>
              </div>
              <div className="pricing-v2-included">
                <h4 className="pricing-v2-included-title">What’s included</h4>
                <ul className="pricing-v2-checklist">
                  {packageFeatures.map((feature, index) => (
                    <li key={index}>
                      <span className="pricing-v2-check-icon">{feature.icon}</span>
                      <span className="pricing-v2-check-label">{feature.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pricing-v2-strip">
            <div className="pricing-v2-strip-item">
              <FiShield className="pricing-v2-strip-icon" />
              <span><strong>100% FTA approval or money back</strong> — senior tax advisors, proactive reminders.</span>
            </div>
            <div className="pricing-v2-strip-item pricing-v2-strip-urgent">
              <FiClock className="pricing-v2-strip-icon" />
              <span><strong>File on time.</strong> Avoid AED 10,000 penalties. 6,000+ UAE clients.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned */}
      <section className="testimonials-v2">
        <div className="container">
          <header className="testimonials-v2-header">
            <span className="testimonials-v2-badge">What clients say</span>
            <h2 className="testimonials-v2-title">Trusted by 6,000+ UAE businesses</h2>
            <p className="testimonials-v2-lead">
              See how we've helped businesses navigate Corporate Tax preparation with confidence.
            </p>
          </header>

          <div className="testimonials-v2-stats">
            {testimonialStats.map((stat, index) => (
              <div className="testimonials-v2-stat" key={`${stat.label}-${index}`}>
                <span className="testimonials-v2-stat-icon">{stat.icon}</span>
                <span className="testimonials-v2-stat-value">{stat.value}</span>
                <span className="testimonials-v2-stat-label">{stat.label}</span>
                <span className="testimonials-v2-stat-desc">{stat.description}</span>
              </div>
            ))}
          </div>

          <div className="testimonials-v2-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonials-v2-card">
                <div className="testimonials-v2-stars">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="testimonials-v2-star" fill="#f16610" stroke="#f16610" />
                  ))}
                </div>
                <blockquote className="testimonials-v2-quote">"{testimonial.quote}"</blockquote>
                <footer className="testimonials-v2-author">
                  <div className="testimonials-v2-avatar">
                    {testimonial.avatar ? (
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    ) : (
                      <span>{testimonial.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}</span>
                    )}
                  </div>
                  <div className="testimonials-v2-author-info">
                    <cite className="testimonials-v2-name">{testimonial.name}</cite>
                    <span className="testimonials-v2-role">{testimonial.role}</span>
                  </div>
                </footer>
              </article>
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
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <div className="faq-meta">
                      <span className="faq-index">{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="faq-question">{faq.question}</h3>
                    </div>
                    <div className={`faq-toggle ${isOpen ? 'open' : ''}`}>
                      <FiChevronDown />
                    </div>
                  </button>
                  <div
                    className="faq-answer"
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section" id="file">
        <div className="cta-background"></div>
        <div className="container">
          <div className="cta-content cta-content-grid">
            <div className="cta-content-left">
              <span className="section-badge badge-white">GET STARTED TODAY</span>
              <h2 className="cta-title">
                Expert Tax Preparation for Your Business
              </h2>
              <p className="cta-description">
                Join 6,000+ UAE businesses who trust Finanshels for accurate, compliant tax preparation. Maximize your deductions and file with confidence.
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
            </div>
            <div className="cta-form">
              <form
                className="registration-form"
                action="https://forms.zohopublic.com/finanshelsllc/form/GetYourFreeTaxConsultation/formperma/qrwDpTkh6_-7kf4gTszEDr7dJrwAQAEQjOhTK9TPLEs/htmlRecords/submit"
                method="POST"
                acceptCharset="UTF-8"
                encType="multipart/form-data"
              >
                <input type="hidden" name="zf_referrer_name" value="" />
                <input type="hidden" name="zf_redirect_url" value={`${window.location.origin}/thank-you`} />
                <input type="hidden" name="zc_gad" value="" />
                <input type="hidden" name="utm_source" value="" />
                <input type="hidden" name="utm_medium" value="" />
                <input type="hidden" name="utm_campaign" value="" />
                <input type="hidden" name="utm_term" value="" />
                <input type="hidden" name="utm_content" value="" />
                <div className="form-row">
                  <input type="text" name="Name_First" maxLength={255} placeholder="First Name *" required />
                  <input type="text" name="Name_Last" maxLength={255} placeholder="Last Name" />
                </div>
                <div className="form-row">
                  <input type="email" name="Email" maxLength={255} placeholder="Email Address *" required />
                  <input type="tel" name="PhoneNumber_countrycode" maxLength={20} placeholder="Phone * (e.g. +971 00 000 0000)" required />
                </div>
                <div className="form-row">
                  <input type="text" name="SingleLine1" maxLength={255} placeholder="Company Name *" required />
                  <input type="text" name="SingleLine2" maxLength={255} placeholder="Job Title" />
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
