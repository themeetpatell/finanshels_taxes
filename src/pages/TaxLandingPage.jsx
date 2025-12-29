import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiFolder,
  FiMessageCircle,
  FiShield,
  FiTrendingUp,
  FiZap,
  FiUsers,
  FiAward,
  FiAlertCircle
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './TaxLandingPage.css';
import { taxMenu, taxPages } from '../content/taxPages';

const TaxLandingPage = ({ pageKey }) => {
  const page = taxPages[pageKey] || taxPages.overview;
  const otherServices = taxMenu.filter((service) => service.key !== page.key);

  return (
    <div className="tax-page" style={{ '--accent': page.accent || '#f16610' }}>
      {/* Hero Section - Ultra Modern */}
      <section className="tax-hero">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="tax-container hero-wrap">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot" />
              {page.heroEyebrow}
            </div>
            <h1 className="hero-title">{page.heroTitle}</h1>
            <p className="hero-subtitle">{page.heroSubtitle}</p>

            <div className="hero-bullet-grid">
              {page.heroBullets?.map((bullet) => (
                <div key={bullet} className="hero-bullet">
                  <FiCheckCircle className="bullet-icon" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <div className="hero-ctas">
              <a className="btn-solid" href={page.primaryCta?.href}>
                {page.primaryCta?.label || 'Talk to us'}
                <FiArrowRight className="btn-icon" />
              </a>
              {page.secondaryCta?.href && (
                <a className="btn-ghost" href={page.secondaryCta.href}>
                  {page.secondaryCta.label}
                  <FiArrowRight className="btn-icon" />
                </a>
              )}
            </div>

            <div className="hero-meta">
              <div className="meta-chip">
                <span className="meta-label">Response</span>
                <span className="meta-value">Under 24 hours</span>
              </div>
              <div className="meta-chip">
                <span className="meta-label">Availability</span>
                <span className="meta-value">7 days a week</span>
              </div>
              <div className="meta-chip">
                <span className="meta-label">Coverage</span>
                <span className="meta-value">Mainland + Free zones</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card wide">
              <div className="card-header">
                <div>
                  <p className="card-label">{page.heroCardTitle}</p>
                  <p className="card-title">Fast, defensible compliance.</p>
                </div>
                <FiShield className="card-icon" />
              </div>
              <div className="card-points alt">
                {page.heroCardPoints?.map((point) => (
                  <div key={point} className="card-point">
                    <span className="point-dot" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-card mini">
              <div className="card-header">
                <div>
                  <p className="card-label">Response promise</p>
                  <p className="card-title">Under 24 hours.</p>
                </div>
                <FiClock className="card-icon" />
              </div>
              <p className="panel-text">Need it faster? WhatsApp us and we route it to the duty manager.</p>
              <div className="panel-meta">
                <div>
                  <span className="meta-label">Availability</span>
                  <span className="meta-value">7 days a week</span>
                </div>
                <div>
                  <span className="meta-label">Coverage</span>
                  <span className="meta-value">Mainland + Free zones</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="tax-stats">
        <div className="tax-container stat-belt">
          {page.stats?.map((stat) => (
            <div key={stat.label} className="stat-chip">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - Redesigned */}
      <section className="tax-section">
        <div className="tax-container section-header">
          <div>
            <p className="section-eyebrow">WHAT WE DO</p>
            <h2 className="section-title">{page.label}</h2>
            <p className="section-subtitle">
              Clear scope, transparent deliverables, and a team that has already seen your exact scenario.
            </p>
          </div>
          <div className="chip">FTA-focused • Penalty aware • Founder friendly</div>
        </div>

        <div className="tax-container service-rail">
          {page.services?.map((service, idx) => (
            <div key={service.title} className="service-lane">
              <div className="lane-left">
                <div className="lane-count">{idx + 1}</div>
                <div className="lane-line" />
              </div>
              <div className="lane-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-footer">
                  <span>Included in scope</span>
                  <FiArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="tax-section gradient-section">
        <div className="tax-container split-grid">
          <div>
            <p className="section-eyebrow">PROCESS</p>
            <h2 className="section-title">How we keep you compliant</h2>
            <p className="section-subtitle">
              Practical, transparent steps so you always know what we are doing and what we need from you.
            </p>

            <div className="process-rail">
              {page.process?.map((step, index) => (
                <div key={step.title} className="process-card">
                  <div className="process-node">
                    <span>{index + 1}</span>
                  </div>
                  <div className="process-body">
                    <h4>{step.title}</h4>
                    <p>{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="deliverables-card">
            <div className="card-header">
              <div>
                <p className="card-label">DELIVERABLES</p>
                <p className="card-title">What you receive</p>
              </div>
              <FiFolder className="card-icon" />
            </div>
            <ul>
              {page.deliverables?.map((item) => (
                <li key={item}>
                  <FiCheckCircle />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="note">
              We also maintain a clean evidence pack for future auditors and investors.
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="tax-section">
        <div className="tax-container section-header">
          <div>
            <p className="section-eyebrow">NEED SOMETHING ELSE?</p>
            <h2 className="section-title">Explore other tax services</h2>
            <p className="section-subtitle">
              Independent landing pages, one team. Jump to the exact support you need.
            </p>
          </div>
        </div>
        <div className="tax-container related-row">
          {otherServices.map((service) => (
            <Link key={service.path} to={service.path} className="related-chip">
              <span>{service.label}</span>
              <FiArrowRight />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="tax-section faq-section">
        <div className="tax-container faq-grid">
          <div>
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">Common questions</h2>
            <p className="section-subtitle">Short answers from the team that will actually do the work.</p>
            <div className="contact-chip">
              <FiMessageCircle />
              <span>Still unclear? Email hello@finanshels.com and we will respond within one business day.</span>
            </div>
          </div>
          <div className="faq-list">
            {page.faq?.map((item) => (
              <div key={item.question} className="faq-item">
                <div className="faq-question">
                  <FiShield />
                  <h4>{item.question}</h4>
                </div>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="tax-section cta-section">
        <div className="tax-container cta-card">
          <div>
            <p className="section-eyebrow">GET STARTED</p>
            <h2 className="section-title">Ready to move forward?</h2>
            <p className="section-subtitle">
              Send us your license, revenue range, and next deadline. We will confirm scope and pricing fast.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn-solid" href={page.primaryCta?.href}>
              {page.primaryCta?.label || 'Book a call'}
              <FiArrowRight className="btn-icon" />
            </a>
            {page.secondaryCta?.href && (
              <a className="btn-ghost" href={page.secondaryCta.href}>
                {page.secondaryCta.label}
                <FiArrowRight className="btn-icon" />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxLandingPage;
