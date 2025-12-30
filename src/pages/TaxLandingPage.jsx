import {
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiShield,
  FiClock,
  FiMessageCircle,
  FiPhoneCall
} from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TaxLandingPage.css';
import { taxMenu, taxPages } from '../content/taxPages';

const TaxLandingPage = ({ pageKey }) => {
  const page = taxPages[pageKey] || taxPages.overview;
  const otherServices = taxMenu.filter((service) => service.key !== page.key);
  const [openFaq, setOpenFaq] = useState('');

  useEffect(() => {
    setOpenFaq(page.faq?.[0]?.question || '');
  }, [pageKey, page.faq]);

  const toggleFaq = (question) => {
    setOpenFaq((prev) => (prev === question ? '' : question));
  };

  return (
    <div className="lp-page modern" style={{ '--accent': page.accent || '#f16610' }}>
      <section className="hero-block">
        <div className="hero-bg" />
        <div className="lp-container hero-wrap">
          <div className="hero-copy">
            <div className="hero-tag">{page.heroEyebrow} / UAE desk</div>
            <h1>{page.heroTitle}</h1>
            <p className="hero-sub">{page.heroSubtitle}</p>
            <div className="hero-bullets">
              {page.heroBullets?.map((item) => (
                <span key={item}>
                  <FiCheck /> {item}
                </span>
              ))}
            </div>
            <div className="cta-row">
              <a className="btn-primary" href={page.primaryCta?.href}>
                {page.primaryCta?.label || 'Talk to us'}
                <FiArrowRight />
              </a>
              {page.secondaryCta?.href && (
                <a className="btn-ghost" href={page.secondaryCta.href}>
                  {page.secondaryCta.label}
                  <FiArrowRight />
                </a>
              )}
            </div>
            <div className="hero-note">
              <FiShield /> Penalty-aware, audit-ready workflows.
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-stats">
              {page.stats?.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <p className="stat-big">{stat.value}</p>
                  <p className="stat-small">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="panel-steps">
              <p className="panel-label">{page.heroCardTitle}</p>
              {page.heroCardPoints?.map((point) => (
                <div key={point} className="panel-line">
                  <span className="line-dot" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="panel-actions">
              <a href="https://wa.me/971521549572?text=I%20need%20help%20with%20tax%20services." target="_blank" rel="noreferrer">
                <FiMessageCircle /> WhatsApp duty manager
              </a>
              <a href="tel:+971521549572">
                <FiPhoneCall /> Call us
              </a>
              <div className="panel-meta">
                <FiClock /> Under 24 hrs • Mainland + Free zones
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-section bright">
        <div className="lp-container section-top">
          <div>
            <p className="eyebrow">What we deliver</p>
            <h2>End-to-end, same pod</h2>
          </div>
        </div>
        <div className="lp-container service-cards">
          {page.services?.map((service, idx) => (
            <div key={service.title} className="service-card">
              <div className="card-top">
                <span className="card-id">0{idx + 1}</span>
                <span className="card-tag">Included</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-section process-block">
        <div className="lp-container section-top">
          <div>
            <p className="eyebrow">Process</p>
            <h2>How we move</h2>
          </div>
        </div>
        <div className="lp-container process-rail">
          {page.process?.map((step, idx) => (
            <div key={step.title} className="rail-item">
              <div className="rail-id">{idx + 1}</div>
              <div>
                <p className="rail-title">{step.title}</p>
                <p className="rail-body">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-section deliver-block">
        <div className="lp-container deliver-grid">
          <div className="deliver-card">
            <p className="eyebrow">Deliverables</p>
            <h3>What you get</h3>
            <ul>
              {page.deliverables?.map((item) => (
                <li key={item}>
                  <FiCheck /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="deliver-card alt">
            <p className="eyebrow">Why Finanshels</p>
            <div className="why">
              <div>
                <p className="why-title">Live updates</p>
                <p>WhatsApp + email threads with timestamps and next steps.</p>
              </div>
              <div>
                <p className="why-title">Penalty watch</p>
                <p>Calendar reminders routed to duty managers before deadlines.</p>
              </div>
              <div>
                <p className="why-title">FTA-first</p>
                <p>Registered agents drafting with audit defense in mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lp-section faq-section">
        <div className="lp-container section-top">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2>Short answers</h2>
          </div>
          <div className="faq-note">
            <FiMessageCircle /> Email hello@finanshels.com — 1 business day response.
          </div>
        </div>
        <div className="lp-container faq-grid">
          {page.faq?.map((item, idx) => {
            const isOpen = openFaq === item.question;
            return (
              <div key={item.question} className={`faq-card ${isOpen ? 'open' : ''}`}>
                <button onClick={() => toggleFaq(item.question)} aria-expanded={isOpen}>
                  <span className="faq-id">0{idx + 1}</span>
                  <span className="faq-q">{item.question}</span>
                  <FiChevronDown className="faq-chevron" />
                </button>
                <div className="faq-body" aria-hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="lp-section related-section">
        <div className="lp-container section-top">
          <div>
            <p className="eyebrow">Need something else?</p>
            <h2>Hop to another desk</h2>
          </div>
        </div>
        <div className="lp-container related-chips">
          {otherServices.map((service) => (
            <Link key={service.path} to={service.path}>
              <span>{service.label}</span>
              <FiArrowRight />
            </Link>
          ))}
        </div>
      </section>

      <section className="lp-section final-banner">
        <div className="lp-container banner-inner">
          <div>
            <p className="eyebrow">Get started</p>
            <h2>Ready to keep penalties off your plate?</h2>
            <p className="lead">Send license + revenue range + next deadline. We respond in under 24 hours.</p>
          </div>
          <div className="cta-row">
            <a className="btn-primary" href={page.primaryCta?.href}>
              {page.primaryCta?.label || 'Book a consult'}
              <FiArrowRight />
            </a>
            {page.secondaryCta?.href && (
              <a className="btn-ghost" href={page.secondaryCta.href}>
                {page.secondaryCta.label}
                <FiArrowRight />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxLandingPage;
