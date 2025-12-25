import { FiCheckCircle, FiStar, FiFileText, FiShield, FiUsers, FiZap, FiBarChart2, FiBriefcase, FiCreditCard } from 'react-icons/fi';
import './NewHomePage.css';

const NewHomePage = () => {
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

  const auditNecessityPoints = [
    {
      icon: <FiFileText />,
      title: 'License Renewal Compliance',
      description:
        'Whether you operate in mainland or free zones, submitting audited financial statements within specified deadlines is mandatory for trade license renewal.'
    },
    {
      icon: <FiShield />,
      title: 'Federal Tax Authority (FTA) Compliance',
      description:
        'Companies with revenues exceeding certain thresholds or those selected for FTA audit must comply through credible, independently audited accounts that withstand regulatory scrutiny.'
    },
    {
      icon: <FiCreditCard />,
      title: 'Banking Relationships in UAE',
      description:
        'Without current audited statements, your access to banking services and credit may be restricted, limiting your ability to take on projects, manage cash flow, or expand operations.'
    },
    {
      icon: <FiUsers />,
      title: 'Credibility and Trust',
      description:
        'Third-party validation significantly enhances your organization’s reputation in the competitive UAE market allowing you to raise funding from investors.'
    }
  ];

  const auditServices = [
    {
      icon: <FiShield />,
      title: 'Statutory Financial Audits',
      description:
        'We deliver clear audit opinions that meet all UAE legal and regulatory requirements including those for DED license renewal, free zone compliance, and FTA submissions.'
    },
    {
      icon: <FiBarChart2 />,
      title: 'Internal Audit Services',
      description:
        'We assess operational efficiency, compliance with policies and procedures, safeguarding of assets, and reliability of financial and operational information. We identify control weaknesses and recommend practical improvements that strengthen your organization’s internal environment.'
    },
    {
      icon: <FiBriefcase />,
      title: 'Free Zone Compliance Audits',
      description:
        'We provide specialized audit services tailored to the specific requirements of major UAE free zones. Each free zone has unique audit submission requirements, deadlines, and reporting formats. Our team ensures your audited financials meet the exact specifications required by your free zone authority for seamless license renewal and ongoing compliance.'
    },
    {
      icon: <FiZap />,
      title: 'Tax Audits and FTA Support',
      description:
        'We review VAT returns, corporate tax filings, transfer pricing documentation, and tax provision calculations in line with UAE tax legislation. We provide expert representation, manage all communications with the FTA, prepare comprehensive responses to queries, and negotiate resolutions that protect your interests while ensuring compliance with UAE tax laws.'
    }
  ];

  const whyChooseReasons = [
    {
      icon: <FiShield />,
      title: 'UAE Regulatory Expertise',
      description:
        'Our audit teams possess in-depth knowledge of UAE Commercial Companies Law, Federal Tax Authority regulations, free zone requirements across all major zones (JAFZA, DMCC, DIFC, ADGM), and emirate-specific licensing regulations. This specialized UAE knowledge ensures your audit meets exact regulatory specifications without delays or rejections.'
    },
    {
      icon: <FiUsers />,
      title: 'Experienced Professional Team',
      description:
        'Our auditors hold internationally recognized certifications including CPA, CA, ACCA, SOCPA, and CMA designations, with many team members holding UAE Ministry of Economy audit approval. With decades of combined experience conducting audits for UAE businesses across mainland and free zones, we bring technical excellence and practical wisdom specific to the UAE business environment.'
    },
    {
      icon: <FiZap />,
      title: 'Technology-Enabled Efficiency',
      description:
        'We leverage advanced audit software, data analytics tools, and automated testing procedures that enhance audit quality while reducing turnaround times. Our technology platform provides secure client portals for document sharing, real-time progress tracking, and seamless communication throughout the audit process.'
    },
    {
      icon: <FiBriefcase />,
      title: 'Flexible Engagement Models',
      description:
        'Whether you need one-time statutory audits, ongoing internal audit support, or specialized forensic investigations, we structure engagements to match your specific needs. Our scalable approach accommodates businesses of all sizes, from startups to large enterprises.'
    },
    {
      icon: <FiCheckCircle />,
      title: 'Comprehensive Support Beyond Audit',
      description:
        'Our relationships with clients extend beyond issuing audit reports. We provide ongoing advisory support, assist with implementation of recommendations, offer training on internal controls and compliance matters, and serve as a resource for financial and operational questions throughout the year.'
    },
    {
      icon: <FiStar />,
      title: 'Proven Track Record',
      description:
        'Our portfolio includes successful audits for hundreds of organizations across multiple jurisdictions. Client testimonials, long-standing relationships,and industry recognition reflect our consistent delivery of high-quality audit services that exceed expectations.'
    }
  ];

  const testimonials = [
    {
      quote:
        'Fast, friendly, and very professional. I love how communicative they were handling our Corporate tax registration.',
      name: 'Abdulla Al-Ogail',
      role: 'Co-founder & CEO, Olymon',
      avatar: '/Founders/abdulla.jpeg'
    },
    {
      quote:
        'Always very responsive, supportive, having a business mindset, providing visuals and on top of all that, open for feedback so they can keep improving. Very happy that I took the decision to work with them.',
      name: 'Szilvia Vitos',
      role: 'Founder, Livvity',
      avatar: '/Founders/szilvia.jpeg'
    },
    {
      quote:
        'They designed an accounting system tailor made to our needs & completely automated our finance operations just like they promised. They\'ve been super helpful for us to scale.',
      name: 'Jeremy Khatar',
      role: 'CEO, Ronin Global LLC, USA',
      avatar: '/Founders/jeremy.png'
    },
    {
      quote:
        'If you ever do any financial modeling/forecasting, I seriously can\'t recommend Finanshels enough. they are a dependable team of professionals who work hard to deliver results.',
      name: 'Bader Al Kazimi',
      role: 'Founder, Optimize App',
      avatar: '/Founders/bader.jpeg'
    },
    {
      quote:
        'I am extremely grateful for the exceptional service we received from Finanshels.com. We insurancehub.ae highly recommend their services to anyone seeking reliable and trustworthy Accounting Partner.',
      name: 'Jomon Ulahannan',
      role: 'Founder & CEO, INSURANCE HUB',
      avatar: '/Founders/jomon.jpg'
    },
    {
      quote: 'Super fast team and I can always depend on these guys...way to go',
      name: 'Pravin Rai',
      role: 'Founder & CEO, QuicKart',
      avatar: '/Founders/pravin.jpeg'
    },
    {
      quote:
        'Bookkeeping, a piece of cake with Finanshels! Sahal has been extremely helpful in managing the books! He makes sure its up-to-date and super clean! Sometimes, for advice, I refer to him as well and again, he has been super supportive and helpful to my needs!',
      name: 'Sapna Mulani',
      role: 'Sr Accountant, Growdash',
      avatar: '/Founders/sapna.jpg'
    },
    {
      quote:
        'They thoroughly understood our business processes and streamlined our accounting processes perfectly where our both in-house and outsourced accountants failed multiple times to streamline and structure our complex financial ops.',
      name: 'Meet Patel',
      role: 'Former COO, StudentHub & BAWES',
      avatar: '/Founders/themeetpatel.png'
    },
    {
      quote:
        'Excellent service. Finanshels has made the tax registration process fast and easy. Their communication is super prompt and clear. 5 stars!!',
      name: 'Tina Chugani',
      role: 'Managing Director, Proxis LLC',
      avatar: '/Founders/tina.jpeg'
    },
    {
      quote: 'The team was super responsive and the entire service was efficiently processed.',
      name: 'Usama Naeem',
      role: 'Co-founder, Qureos',
      avatar: '/Founders/usama.jpeg'
    }
  ];

  return (
    <div className="new-homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <div className="trust-badge">
              <span className="trust-dot" aria-hidden="true" />
              <span className="trust-text">Trusted audit partners for 5,000+ UAE businesses</span>
            </div>
            
            <h1 className="hero-title">
              Looking for Trusted Auditing Services<br />
              and Audit Firms in UAE?<br />
              Say Hello to <span className="highlight-green">Finanshels</span>
            </h1>
            
            <p className="hero-description">
              With a dedicated team of experts trained on the nuances of UAE laws and regulations,
              Finanshels supports small businesses with audit ready books and FTA representation.
            </p>
            
            <div className="hero-features">
              <div className="hero-feature">
                <FiCheckCircle className="feature-icon" />
                <div>
                  <strong>Top-Rated Audit Services in Dubai, Sharjah, Abu Dhabi</strong>
                </div>
              </div>
              <div className="hero-feature">
                <FiCheckCircle className="feature-icon" />
                <div>
                  <strong>Certified Registered Auditors in the UAE</strong>
                </div>
              </div>
              <div className="hero-feature">
                <FiCheckCircle className="feature-icon" />
                <div>
                  <strong>Leading Auditing Firm Serving 5000+ SMEs</strong>
                </div>
              </div>
            </div>
            
            <div className="hero-ctas">
              <a href="#consultation" className="btn-primary">Book Your Audit Consultation</a>
              <a href="#services" className="btn-secondary">Explore Audit Services</a>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="audit-report-mock">
              <div className="report-header">
                <div className="report-brand">Finanshels Audit</div>
                <div className="report-status">Mock Audit Report • FY 2024</div>
              </div>
              
              <div className="report-summary">
                <div>
                  <p className="summary-label">Audit Opinion</p>
                  <p className="summary-value success">Unqualified</p>
                </div>
                <div>
                  <p className="summary-label">Prepared For</p>
                  <p className="summary-value">UAE SME • Free Zone</p>
                </div>
              </div>

              <div className="report-metrics">
                <div className="report-metric">
                  <span className="metric-label">Revenue</span>
                  <span className="metric-value">AED 12.4M</span>
                </div>
                <div className="report-metric">
                  <span className="metric-label">EBITDA</span>
                  <span className="metric-value">AED 3.1M</span>
                </div>
                <div className="report-metric">
                  <span className="metric-label">Cash & Bank</span>
                  <span className="metric-value">AED 4.8M</span>
                </div>
              </div>

              <div className="report-body">
                <div className="report-highlight">
                  <span className="highlight-dot" />
                  <div>
                    <p className="highlight-title">FTA-Ready Financials</p>
                    <p className="highlight-desc">Prepared to UAE standards with full supporting schedules.</p>
                  </div>
                </div>
                <div className="report-highlight">
                  <span className="highlight-dot" />
                  <div>
                    <p className="highlight-title">License Renewal Pack</p>
                    <p className="highlight-desc">Signed audit report, notes, and management letter.</p>
                  </div>
                </div>
                <div className="report-highlight">
                  <span className="highlight-dot" />
                  <div>
                    <p className="highlight-title">Bank-Ready Statements</p>
                    <p className="highlight-desc">Clean, compliant statements for credit and financing.</p>
                  </div>
                </div>
              </div>

              <div className="report-footer">
                Mock audit report preview — swap with final visual from design.
              </div>
            </div>
          </div>
        </div>

        <div className="hero-trust-row">
          <p className="trust-label">Trusted by leading UAE businesses</p>
          <div className="logo-list-wide">
            {clientLogos.map((logo) => (
              <div key={logo.alt} className="trust-logo">
                <img src={logo.src} alt={`${logo.alt} logo`} className="trust-logo-image" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-value">5,000+</div>
            <div className="stat-label">Businesses Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">4.9%</div>
            <div className="stat-label">Trustpilot Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">10×</div>
            <div className="stat-label">Faster Than Manual</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Dedicated Support</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="content-container">
          <div className="section-header">
            <p className="section-eyebrow">AUDIT READINESS</p>
            <h2 className="section-title">
              Why is <span className="highlight-green">Audit</span> Necessary?
            </h2>
            <p className="section-subtitle">
              As your business grows, so do the compliance requirements. Failure to keep up with FTA audits can
              lead to penalties and tarnish your business reputation.
            </p>
          </div>
          
          <div className="problem-grid">
            {auditNecessityPoints.map((problem, index) => (
              <div key={index} className="problem-card">
                <div className="problem-icon">{problem.icon}</div>
                <h3 className="problem-title">{problem.title}</h3>
                <p className="problem-description">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section" id="services">
        <div className="content-container-large">
          <div className="solution-content">
            <div className="solution-left">
              <p className="section-eyebrow">AUDIT SERVICES</p>
              <h2 className="section-title">
                Stop Stressing About <span className="highlight-green">Audits.</span>
              </h2>
              <p className="solution-description">
                Your dedicated team of experts at Finanshels do all the heavy lifting preparing your books for audits.
                Our services cover.
              </p>
              
              <div className="solution-features">
                {auditServices.map((feature, index) => (
                  <div key={index} className="solution-feature">
                    <div className="solution-icon">{feature.icon}</div>
                    <div className="solution-text">
                      <h4 className="solution-feature-title">{feature.title}</h4>
                      <p className="solution-feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="btn-primary">Talk to an Audit Expert</button>
            </div>
            
            <div className="solution-right">
              <div className="audit-report-mock report-alt">
                <div className="report-header">
                  <div className="report-brand">Audit Engagement</div>
                  <div className="report-status">DED, Free Zone &amp; FTA Ready</div>
                </div>

                <div className="report-timeline">
                  <div className="timeline-step completed">
                    <span className="timeline-dot" />
                    <div>
                      <p className="timeline-title">Planning & Risk Assessment</p>
                      <p className="timeline-desc">Entity understanding, scope, and UAE compliance mapping.</p>
                    </div>
                  </div>
                  <div className="timeline-step completed">
                    <span className="timeline-dot" />
                    <div>
                      <p className="timeline-title">Fieldwork & Testing</p>
                      <p className="timeline-desc">Substantive testing with analytics and automated procedures.</p>
                    </div>
                  </div>
                  <div className="timeline-step active">
                    <span className="timeline-dot pulse" />
                    <div>
                      <p className="timeline-title">Reporting</p>
                      <p className="timeline-desc">Draft audit report, management letter, and FTA-ready schedules.</p>
                    </div>
                  </div>
                </div>

                <div className="report-footer">
                  Mock audit report preview — replace with final design asset from Minha.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Section */}
      <section className="why-choose-section" id="why-finanshels">
        <div className="content-container">
          <div className="section-header">
            <p className="section-eyebrow">WHY BUSINESS OWNERS CHOOSE FINANSHELS</p>
            <h2 className="section-title">
              Ready to Strengthen Your Financial Integrity?
            </h2>
            <p className="section-subtitle">
              Contact us today to discuss how our professional audit services can provide the assurance, insights, and credibility your organization needs to thrive.
            </p>
          </div>

          <div className="reason-grid">
            {whyChooseReasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-icon">{reason.icon}</div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="content-container">
          <div className="section-header">
            <p className="section-eyebrow">CLIENT SUCCESS STORIES</p>
            <h2 className="section-title">
              Trusted by <span className="highlight-green">5,000+ UAE Businesses</span>
            </h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what our clients say about working with Finanshels.
            </p>
          </div>
          
          <div className="testimonials-window">
            <div className="testimonials-grid">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="star-icon" fill="#f16610" stroke="#f16610" />
                    ))}
                  </div>
              
                  <div className="testimonial-quote-icon">❝</div>
              
                  <p className="testimonial-quote">{testimonial.quote}</p>
              
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
          
          <div className="google-reviews">
            <div className="google-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="star-icon" fill="#f16610" stroke="#f16610" />
                ))}
              </div>
              <span className="rating-text">4.9/5 on Trustpilot Reviews</span>
              <span className="rating-count">(239 reviews)</span>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="final-cta-section" id="consultation">
        <div className="final-cta-container">
          <div className="final-cta-left">
            <p className="section-eyebrow">GET STARTED TODAY</p>
            <h2 className="cta-title">
              Ready to Stop Stressing<br />
              About Audits?
            </h2>
            <p className="cta-description">
              Join 5,000+ UAE businesses who trust Finanshels with their accounting and audit requirements.
              Set up a free consultation with our experts today!
            </p>
            
            <div className="cta-steps">
              <div className="cta-step">
                <div className="step-number">1</div>
                <span>Book your free consultation</span>
              </div>
              <div className="cta-step">
                <div className="step-number">2</div>
                <span>Get a customized audit assessment</span>
              </div>
              <div className="cta-step">
                <div className="step-number">3</div>
                <span>Get your questions answered by an expert</span>
              </div>
            </div>
          </div>
          
            <div className="final-cta-right">
              <div className="final-consultation-form">
                <h3 className="form-title">Get Your Free Consultation</h3>
                <p className="form-subtitle">Book a 30-minute call with our audit experts. No obligation.</p>
              
              <form>
                <input type="text" placeholder="Your Name *" className="form-input" required />
                <input type="email" placeholder="Email Address *" className="form-input" required />
                <input type="tel" placeholder="Phone Number *" className="form-input" required />
                <input type="text" placeholder="Company Name (Optional)" className="form-input" />
                <button type="submit" className="form-submit">Claim Free Consultation</button>
              </form>
              
              <p className="form-disclaimer">
                By submitting, you agree to receive communications from Finanshels. Your data is secure and will never be shared.
              </p>
              
              <div className="form-badges">
                <div className="badge-item">
                  <FiCheckCircle className="badge-icon" />
                  <span>Pay Only if Satisfied</span>
                </div>
                <div className="badge-item">
                  <FiCheckCircle className="badge-icon" />
                  <span>No Commitment</span>
                </div>
                <div className="badge-item">
                  <FiCheckCircle className="badge-icon" />
                  <span>24h Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewHomePage;
