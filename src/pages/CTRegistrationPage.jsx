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
  FiChevronDown,
  FiMessageCircle
} from 'react-icons/fi';
import { useEffect, useState } from 'react';
import './CTRegistrationPage.css';

const CTRegistrationPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = `function ZFAdvLead(){}
ZFAdvLead.utmPValObj = ZFAdvLead.utmPValObj || {};

ZFAdvLead.utmPNameArr = new Array('utm_source','utm_medium','utm_campaign','utm_term','utm_content');ZFAdvLead.utmcustPNameArr = new Array();ZFAdvLead.isSameDomain = false;

ZFAdvLead.prototype.zfautm_sC = function( paramName,path,domain,secure ){
  var value = ZFAdvLead.utmPValObj[paramName];
  if ( typeof value !== "undefined" && value !== null ){
    var cookieStr = paramName + "=" + encodeURIComponent( value );
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+7);
    cookieStr += "; expires=" + exdate.toGMTString();
    cookieStr += "; path=/";
    if ( domain ) {
      cookieStr += "; domain=" + encodeURIComponent( domain );
    }
    if ( secure ) {
      cookieStr += "; secure";
    }
    document.cookie = cookieStr;
  }
};
ZFAdvLead.prototype.zfautm_ini = function (){
  this.zfautm_bscPCap();
  var url_search = document.location.search;
  for (var i = 0; i < ZFAdvLead.utmcustPNameArr.length ; i ++){
    var zf_pN = ZFAdvLead.utmcustPNameArr[i];
    var zf_pV;
    if ( zf_pN == 'referrername' ) {
      zf_pV = ( document.URL || '' ).slice( 0, 1500 );
    } else {
      zf_pV = this.zfautm_gP(url_search, zf_pN);
      if (zf_pV == undefined || zf_pV == ''){
          zf_pV = this.zfautm_gC(zf_pN);
      }
    }
    if ( typeof zf_pV !== "undefined" && zf_pV !== null & zf_pV != "" ) {
      ZFAdvLead.utmPValObj[ zf_pN ] = zf_pV;
    }
  }
  for (var pkey in ZFAdvLead.utmPValObj) {
    this.zfautm_sC(pkey);
  }
};
ZFAdvLead.prototype.zfautm_bscPCap = function () {
  var trafSrc = this.zfautm_calcTrafSrc();
  if ( trafSrc.source != "" ) {
    ZFAdvLead.utmPValObj.utm_source = trafSrc.source;
  }
  if ( trafSrc.medium != "" ) {
    ZFAdvLead.utmPValObj.utm_medium = trafSrc.medium;
  }
  if ( trafSrc.campaign != "" ) {
    ZFAdvLead.utmPValObj.utm_campaign = trafSrc.campaign;
  }
  if ( trafSrc.term != "" ) {
    ZFAdvLead.utmPValObj.utm_term = trafSrc.term;
  }
  if ( trafSrc.content != "" ) {
    ZFAdvLead.utmPValObj.utm_content = trafSrc.content;
  }
}
ZFAdvLead.prototype.zfautm_calcTrafSrc = function() {
  var u1='', u2='', u3='', u4='', u5='';
  var search_engines = [['bing', 'q'], ['google', 'q'], ['yahoo', 'q'], ['baidu', 'q'], ['yandex', 'q'], ['ask', 'q']];
  var ref = document.referrer;
  ref = ref.substr(ref.indexOf('//')+2);
  ref_domain = ref;
  ref_path = '/';
  ref_search = '';

  var url_search = document.location.search;
  if(url_search.indexOf('utm_source') > -1 || url_search.indexOf('utm_medium') > -1 || url_search.indexOf('utm_campaign') > -1 || url_search.indexOf('utm_term') > -1 || url_search.indexOf('utm_content') > -1) {
    u1 = this.zfautm_gP(url_search, 'utm_source');
    u2 = this.zfautm_gP(url_search, 'utm_medium');
    u3 = this.zfautm_gP(url_search, 'utm_campaign');
    u4 = this.zfautm_gP(url_search, 'utm_term');
    u5 = this.zfautm_gP(url_search, 'utm_content');
  } else if ( this.zfautm_gP(url_search, 'gclid')) {
    u1 = 'Google Ads';
    u2 = 'cpc';
    u3 = '(not set)';
    if ( !ZFAdvLead.utmcustPNameArr.includes('gclid') ) {
      ZFAdvLead.utmcustPNameArr.push('gclid');
    }
  } else if(ref) {
    var r_u1 = this.zfautm_gC('utm_source');
    var r_u2 = this.zfautm_gC('utm_medium');
    var r_u3 = this.zfautm_gC('utm_campaign');
    var r_u4 = this.zfautm_gC('utm_term');
    var r_u5 = this.zfautm_gC('utm_content');
    if ( typeof r_u1 === "undefined" && typeof r_u2 === "undefined" && typeof r_u3 === "undefined" && typeof r_u4 === "undefined" && typeof r_u5 === "undefined") {
      if (ref.indexOf('/') > -1) {
        ref_domain = ref.substr(0,ref.indexOf('/'));
        ref_path = ref.substr(ref.indexOf('/'));
        if (ref_path.indexOf('?') > -1) {
          ref_search = ref_path.substr(ref_path.indexOf('?'));
          ref_path = ref_path.substr(0, ref_path.indexOf('?'));
        }
      }
      u2 = 'referral';
      u1 = ref_domain;
      for (var i=0; i<search_engines.length; i++){
        if(ref_domain.indexOf(search_engines[i][0]) > -1){
          u2 = 'organic';
          u1 = search_engines[i][0];
          u4 = this.zfautm_gP(ref_search, search_engines[i][1]) || '(not provided)';
          break;
        }
      }
    } else {
      if ( typeof r_u1 !== "undefined" ) {
        u1 = r_u1;
      }
      if ( typeof r_u2 !== "undefined" ) {
          u2 = r_u2;
      }
      if ( typeof r_u3 !== "undefined" ) {
        u3 = r_u3;
      }
      if ( typeof r_u4 !== "undefined" ) {
        u4 = r_u4;
      }
      if ( typeof r_u5 !== "undefined" ) {
        u5 = r_u5;
      }
    }
  } else {
    var r_u1 = this.zfautm_gC('utm_source');
    var r_u2 = this.zfautm_gC('utm_medium');
    var r_u3 = this.zfautm_gC('utm_campaign');
    var r_u4 = this.zfautm_gC('utm_term');
    var r_u5 = this.zfautm_gC('utm_content');
    if ( typeof r_u1 === "undefined" && typeof r_u2 === "undefined" && typeof r_u3 === "undefined" && typeof r_u4 === "undefined" && typeof r_u5 === "undefined") {
      var locRef = document.URL;
      locRef = locRef.substr(locRef.indexOf('//')+2);
      if (locRef.indexOf('/') > -1) {
        locRef = locRef.substr(0,locRef.indexOf('/'));
      }
      u1 = locRef;
      u2 = 'referral';
    } else {
      if ( typeof r_u1 !== "undefined" ) {
        u1 = r_u1;
      }
      if ( typeof r_u2 !== "undefined" ) {
        u2 = r_u2;
      }
      if ( typeof r_u3 !== "undefined" ) {
        u3 = r_u3;
      }
      if ( typeof r_u4 !== "undefined" ) {
        u4 = r_u4;
      }
      if ( typeof r_u5 !== "undefined" ) {
        u5 = r_u5;
      }
    }
  }
  return {
    'source'  : u1,
    'medium'  : u2,
    'campaign': u3,
    'term'    : u4,
    'content' : u5
  };
}
ZFAdvLead.prototype.zfautm_gP = function(s, q) {
  try{
      var match = s.match('[?&]' + q + '=([^&]+)');
      if ( match ) {
        if ( match[1].length > 199 ) {
          var raw = decodeURIComponent(match[1]);
          raw = raw.replace(/[^A-Za-z0-9_]/g, '');
          return raw.slice( 0, 199 );
        } else {
          return decodeURIComponent(match[1]);
        }

      } else {
        return '';
      }
  } catch(e){
    return '';
  }
}
ZFAdvLead.prototype.zfautm_gC = function( cookieName ){
  var cookieArr = document.cookie.split('; ');
  for ( var i = 0 ; i < cookieArr.length ; i ++ ){
    var cookieVals = cookieArr[i].split('=');
      if ( cookieVals[0] === cookieName && cookieVals[1] ) {
        return decodeURIComponent(cookieVals[1]);
      }
  }
};
ZFAdvLead.prototype.zfautm_gC_enc = function( cookieName ){
  var cookieArr = document.cookie.split('; ');
  for ( var i = 0 ; i < cookieArr.length ; i ++ ){
    var cookieVals = cookieArr[i].split('=');
      if ( cookieVals[0] === cookieName && cookieVals[1] ) {
        return cookieVals[1];
      }
  }
};
ZFAdvLead.prototype.zfautm_iframeSprt = function () {
  var zf_frame = document.getElementsByTagName("iframe");
  for(var i = 0; i < zf_frame.length; ++i){
    if((zf_frame[i].src).indexOf('formperma') > 0 ){
      var zf_src = zf_frame[i].src;
      for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
        var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
        utmPm = ( ZFAdvLead.isSameDomain && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
        var utmPmregex = new RegExp("[?&]" + utmPm + "=");
        if ( ! utmPmregex.test(zf_src) ) {
          var utmVal = this.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
          if ( typeof utmVal !== "undefined" ) {
            if ( utmVal != "" ){
              if(zf_src.indexOf('?') > 0){
                zf_src = zf_src+'&'+utmPm+'='+ utmVal;
              }else{
                zf_src = zf_src+'?'+utmPm+'='+ utmVal;
              }
            }
          }
        }
      }
      if ( zf_frame[i].src.length < zf_src.length ) {
        zf_frame[i].src = zf_src;
      }
    }
  }
};
ZFAdvLead.prototype.zfautm_DHtmlSprt = function () {
  var zf_formsArr = document.forms;
  for ( var frmInd = 0 ; frmInd < zf_formsArr.length ; frmInd ++ ) {
    var zf_form_act = zf_formsArr[frmInd].action;
      if ( zf_form_act && zf_form_act.indexOf('formperma') > 0 ){
        for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
          var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
          var utmVal = this.zfautm_gC( ZFAdvLead.utmPNameArr[ prmIdx ] );
          if ( typeof utmVal !== "undefined" ) {
            if ( utmVal != "" ) {
              var fieldObj = zf_formsArr[frmInd][utmPm];
            if ( fieldObj ) {
              fieldObj.value = utmVal;
            }
          }
        }
      }
    }
  }
};
ZFAdvLead.prototype.zfautm_jsEmbedSprt = function ( id ) {
  document.getElementById('zforms_iframe_id').removeAttribute("onload");
  var jsEmbdFrm = document.getElementById("zforms_iframe_id");
  var embdSrc = jsEmbdFrm.src;
  for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
    var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
    utmPm = ( ZFAdvLead.isSameDomain && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
    var utmVal = this.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
    if ( typeof utmVal !== "undefined" ) {
      if ( utmVal != "" ) {
        if(embdSrc.indexOf('?') > 0){
                    embdSrc = embdSrc+'&'+utmPm+'='+utmVal;
        }else{
            embdSrc = embdSrc+'?'+utmPm+'='+utmVal;
        }
      }
    }
  }
  jsEmbdFrm.src = embdSrc;
};
var zfutm_zfAdvLead = new ZFAdvLead();
zfutm_zfAdvLead.zfautm_ini();
if( document.readyState == "complete" ){
    zfutm_zfAdvLead.zfautm_iframeSprt();
    zfutm_zfAdvLead.zfautm_DHtmlSprt();
} else {
  window.addEventListener('load', function (){
        zfutm_zfAdvLead.zfautm_iframeSprt();
        zfutm_zfAdvLead.zfautm_DHtmlSprt();
  }, false);
}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  const testimonialStats = [
    { label: 'Avg. satisfaction', value: '4.9/5', description: 'Across tax registration and advisory', icon: <FiStar /> },
    { label: 'Registrations', value: '6,000+', description: 'TRNs secured without penalties', icon: <FiFileText /> },
    { label: 'Faster turnaround', value: '48h', description: 'Typical TRN in 48 hours', icon: <FiZap /> },
  ];

  const testimonialsForGrid = testimonials.slice(0, 3);

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
              
              <ul className="hero-features" aria-label="Why choose us">
                <li>
                  <FiShield className="hero-features-icon" aria-hidden />
                  <span>FTA-compliant agents</span>
                </li>
                <li>
                  <FiZap className="hero-features-icon" aria-hidden />
                  <span>48-hour registration</span>
                </li>
                <li>
                  <FiCheckCircle className="hero-features-icon" aria-hidden />
                  <span>Compliance guaranteed</span>
                </li>
              </ul>
              
              <div className="hero-ctas">
                <a href="#register" className="btn-primary">
                  <span>Register Now</span>
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
                <p className="hero-form-subtitle">Start your registration process today</p>
                <form
                  className="hero-registration-form"
                  action="https://forms.zohopublic.com/finanshelsllc/form/GetYourFreeConsultation1/formperma/dfkCQAWxxG7Af5rE7gRIOAip2GcR6W3qEvskjOo60sc/htmlRecords/submit"
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
                  <input type="email" name="Email" maxLength={255} placeholder="Email *" required />
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
          </div>
          
          <div className="hero-trust">
            <p className="trust-label">Trusted by 6,000+ businesses in the UAE</p>
            <div className="logo-marquee">
              <div className="logo-track">
                {clientLogos.map((logo, index) => (
                  <div key={logo.alt} className="logo-item">
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

      {/* Solution Section - 4 Step Process */}
      <section className="solution-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">HOW IT WORKS</span>
            <h2 className="section-title">
              Simple <span className="highlight">4-Step Process</span>
            </h2>
            <p className="section-description">
              From consultation to registration, we handle everything — so you stay compliant and focus on growing your business.
            </p>
          </div>
          
          <div className="solution-layout">
            {/* 4-Step Process */}
            <div className="process-column">
              <div className="process-grid">
                <div className="process-step">
                  <div className="step-number-badge">1</div>
                  <div className="step-content">
                    <h3 className="step-title">Free Consultation</h3>
                    <p className="step-description">Submit your details and get a free consultation with our FTA-registered tax agents with sector specialists.</p>
                    <div className="step-icon">
                      <FiUsers />
                    </div>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number-badge">2</div>
                  <div className="step-content">
                    <h3 className="step-title">Document Preparation</h3>
                    <p className="step-description">We review your documents, ensure compliance, and prepare your complete FTA registration application.</p>
                    <div className="step-icon">
                      <FiFileText />
                    </div>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number-badge">3</div>
                  <div className="step-content">
                    <h3 className="step-title">FTA Registration</h3>
                    <p className="step-description">We submit your application to the FTA portal and handle all communication with authorities.</p>
                    <div className="step-icon">
                      <FiShield />
                    </div>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number-badge">4</div>
                  <div className="step-content">
                    <h3 className="step-title">Ongoing Compliance</h3>
                    <p className="step-description">Receive your TRN within 48 hours. Get ongoing support with corporate tax + VAT in one recurring pod.</p>
                    <div className="step-icon">
                      <FiCheckCircle />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Track Record Card */}
            <div className="track-record-column">
              <div className="track-record-card">
                <div className="track-record-badge">
                  <FiTrendingUp className="badge-icon" />
                  <span>Our Track Record</span>
                </div>
                
                <div className="track-record-stats">
                  <div className="stat-item">
                    <div className="stat-number">2,400+</div>
                    <div className="stat-label">Entities registered for corporate tax & VAT</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <div className="stat-number">99.6%</div>
                    <div className="stat-label">On-time filing rate across UAE</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <div className="stat-number">18 hrs</div>
                    <div className="stat-label">Average response time to FTA notices</div>
                  </div>
                </div>

                <div className="track-divider"></div>

                {/* What's Included */}
                <div className="whats-included-content">
                  <h3 className="whats-included-title">WHAT'S INCLUDED:</h3>
                  <div className="included-items">
                    <div className="included-item">
                      <FiCheckCircle className="check-icon" />
                      <span>FTA-registered tax agents with sector specialists</span>
                    </div>
                    <div className="included-item">
                      <FiCheckCircle className="check-icon" />
                      <span>Corporate tax + VAT in one recurring pod</span>
                    </div>
                    <div className="included-item">
                      <FiCheckCircle className="check-icon" />
                      <span>Penalty watch, reminders, and document vault included</span>
                    </div>
                  </div>
                  
                  <a href="#register" className="get-started-btn">
                    <span>Get Started</span>
                    <FiArrowRight className="btn-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Redesigned */}
      <section className="pricing-section-v2">
        <div className="container">
          <header className="pricing-v2-header">
            <span className="pricing-v2-badge">Tax Registration</span>
            <h2 className="pricing-v2-title">One plan. Everything included.</h2>
            <p className="pricing-v2-lead">
              Transparent pricing. No hidden fees. 100% FTA approval guaranteed or money back.
            </p>
          </header>

          <div className="pricing-v2-alert">
            <FiAlertCircle className="pricing-v2-alert-icon" />
            <div>
              <strong className="pricing-v2-alert-title">Corporate Tax Registration Deadline Approaching</strong>
              <p className="pricing-v2-alert-text">Avoid penalties up to AED 10,000. Register before the deadline.</p>
            </div>
          </div>

          <div className="pricing-v2-card">
            <div className="pricing-v2-card-inner">
              <div className="pricing-v2-main">
                <div className="pricing-v2-name-row">
                  <span className="pricing-v2-popular">Most chosen</span>
                  <h3 className="pricing-v2-name">Corporate Tax Registration</h3>
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
                  Complete FTA-compliant registration with expert support. TRN within 48 hours.
                </p>
                <a href="#register" className="pricing-v2-cta">
                  <span>Register now</span>
                  <FiArrowRight />
                </a>
                <ul className="pricing-v2-trust" aria-label="Guarantees">
                  <li><FiCheckCircle /> 100% FTA approval or money back</li>
                  <li><FiClock /> TRN within 48 hours</li>
                </ul>
              </div>
              <div className="pricing-v2-included">
                <h4 className="pricing-v2-included-title">What&apos;s included</h4>
                <ul className="pricing-v2-checklist">
                  <li><FiCheckCircle className="pricing-v2-check-icon" /> CT Registration</li>
                  <li><FiCheckCircle className="pricing-v2-check-icon" /> SMB Relief Consultation</li>
                  <li><FiCheckCircle className="pricing-v2-check-icon" /> TRN within 48 hours</li>
                  <li><FiCheckCircle className="pricing-v2-check-icon" /> Compliance Checklist</li>
                  <li><FiCheckCircle className="pricing-v2-check-icon" /> Compliance Documentation</li>
                  <li><FiCheckCircle className="pricing-v2-check-icon" /> 30 mins Free Tax Consultation</li>
                </ul>
              </div>
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
              Don&apos;t just take our word for it. Here&apos;s what our clients say about working with Finanshels.
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
            {testimonialsForGrid.map((testimonial) => (
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

      {/* FAQ Section - Redesigned */}
      <section className="faq-section-v2">
        <div className="container">
          <header className="faq-v2-header">
            <span className="faq-v2-badge">FAQ</span>
            <h2 className="faq-v2-title">Tax Registration FAQs</h2>
            <p className="faq-v2-lead">
              Everything you need to know about UAE Corporate Tax registration.
            </p>
          </header>

          <div className="faq-v2-list" role="list">
            {[
              { q: 'Who needs to register for UAE Corporate Tax?', a: 'All UAE businesses including mainland companies, free zone entities, and foreign companies with a permanent establishment in the UAE must register for Corporate Tax. This includes LLCs, sole establishments, and branches of foreign companies.' },
              { q: 'What is the deadline for Corporate Tax registration?', a: 'The FTA has set specific deadlines based on your license issuance date. Late registration can result in penalties up to AED 10,000. Contact us immediately to confirm your deadline and avoid penalties.' },
              { q: 'How long does CT registration take?', a: 'With Finanshels, your Corporate Tax registration is typically completed within 48 hours. We prepare all required documents, submit your application to the FTA, and ensure approval on the first attempt.' },
              { q: 'What documents are required for CT registration?', a: "You'll need your trade license, Emirates ID of owners/partners, MOA/AOA, passport copies, and proof of address. Our team will guide you through the exact requirements for your business type." },
              { q: 'What is the Corporate Tax rate in UAE?', a: 'The standard Corporate Tax rate is 9% on taxable income exceeding AED 376,000. Income up to AED 376,000 is taxed at 0%. Qualifying Free Zone businesses may benefit from 0% on qualifying income.' },
              { q: 'Do you handle ongoing tax compliance after registration?', a: 'Yes! We offer comprehensive packages that include annual CT filing, quarterly VAT returns, tax planning, and ongoing compliance monitoring. Your dedicated tax advisor ensures you never miss a deadline.' }
            ].map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-v2-item ${isOpen ? 'faq-v2-open' : ''}`} role="listitem">
                  <button
                    type="button"
                    className="faq-v2-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`ct-reg-faq-answer-${idx}`}
                  >
                    <span className="faq-v2-number">{String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="faq-v2-question" id={`ct-reg-faq-question-${idx}`}>{item.q}</h3>
                    <FiChevronDown className="faq-v2-chevron" aria-hidden />
                  </button>
                  <div id={`ct-reg-faq-answer-${idx}`} className="faq-v2-answer-wrapper" role="region" aria-labelledby={`ct-reg-faq-question-${idx}`} aria-hidden={!isOpen}>
                    <p className="faq-v2-answer">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="faq-v2-contact">
            <p className="faq-v2-contact-text">Still have questions?</p>
            <a href="mailto:connect@finanshels.com" className="faq-v2-contact-link">
              <FiMessageCircle />
              <span>connect@finanshels.com</span>
            </a>
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
                <form
                  className="registration-form"
                  action="https://forms.zohopublic.com/finanshelsllc/form/GetYourFreeConsultation1/formperma/dfkCQAWxxG7Af5rE7gRIOAip2GcR6W3qEvskjOo60sc/htmlRecords/submit"
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
