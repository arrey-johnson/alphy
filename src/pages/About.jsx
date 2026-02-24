import './About.css'
import { Link } from 'react-router-dom'

function About() {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence in Every Detail',
      description: "We don't just rush jobs. We clean with care, precision and pride from baseboards to boardrooms",
      stat: '99.2%',
      statLabel: 'Quality Score'
    },
    {
      icon: '🤝',
      title: 'Trust and Reliability',
      description: 'We show up on time and our clients know they can depend on us.',
      stat: '500+',
      statLabel: 'Happy Clients'
    },
    {
      icon: '💼',
      title: 'Customer-First Service',
      description: 'Every space is different. Every client matters. We customise our services to meet your specific needs',
      stat: '24/7',
      statLabel: 'Support Available'
    }
  ]

  const milestones = [
    { year: 'Founded', title: 'The Beginning', description: 'Started with a simple belief: a clean space changes everything' },
    { year: 'Growth', title: 'Building Trust', description: 'Word spread. Happy customers became loyal clients. Referrals fueled our expansion' },
    { year: 'Today', title: 'Industry Leader', description: 'Professional cleaning service known for quality, consistency and affordability' },
    { year: 'Future', title: 'Full Certification', description: 'Working towards complete insurance and ISO certification' }
  ]

  const team = [
    { role: 'Certified Cleaners', count: '15+', icon: '👥' },
    { role: 'Years Experience', count: '10+', icon: '📅' },
    { role: 'Projects Completed', count: '2000+', icon: '✓' },
    { role: 'Client Retention', count: '95%', icon: '🏆' }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About ALPHY'S SERVICES LTD</h1>
          <p className="hero-tagline">Where Cleanliness Meets Care</p>
          
          <div className="about-intro">
            <div className="intro-content">
              <h2>Every Great Business Begins With a Simple Idea</h2>
              <p>
                Ours began with the belief that a clean space changes everything. Not just the appearance, 
                but the productivity, health, and peace of mind of everyone who enters.
              </p>
              <p>
                With determined efforts and a strong work ethic, our business quickly grew into a trusted 
                cleaning service built on reliability, integrity and attention to detail.
              </p>
            </div>
            <div className="intro-stats">
              {team.map((item, index) => (
                <div key={index} className="stat-box">
                  <div className="stat-icon">{item.icon}</div>
                  <div className="stat-number">{item.count}</div>
                  <div className="stat-label">{item.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p className="section-intro">
            We saw a need for more than just cleaning. Clients wanted consistency. They wanted professionals who 
            respected their homes, offices and time. They wanted peace of mind. So we built our business around 
            three core values:
          </p>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className="value-stat">
                  <div className="stat-number">{value.stat}</div>
                  <div className="stat-label">{value.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-section">
        <div className="container">
          <h2 className="section-title">Why Businesses Choose Us</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">🛡️</div>
              <h3>Fully Insured & Bonded</h3>
              <p>£5M liability coverage for complete peace of mind</p>
            </div>
            <div className="why-item">
              <div className="why-icon">✓</div>
              <h3>Background-Checked Staff</h3>
              <p>Every team member is vetted and professionally trained</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🌟</div>
              <h3>Quality Guarantee</h3>
              <p>100% satisfaction backed by our service contract</p>
            </div>
            <div className="why-item">
              <div className="why-icon">💚</div>
              <h3>Eco-Friendly Products</h3>
              <p>Safe, effective cleaning solutions for your space</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📋</div>
              <h3>Customized Plans</h3>
              <p>Tailored cleaning schedules to fit your needs</p>
            </div>
            <div className="why-item">
              <div className="why-icon">⚡</div>
              <h3>Same-Day Response</h3>
              <p>Emergency cleaning services available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section about-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-badge-top">
              <span className="badge-icon">⚡</span>
              <span>Limited Availability</span>
            </div>
            <h2>Ready to Experience Enterprise-Grade Cleaning?</h2>
            <p>Join 500+ businesses that trust us to maintain their professional standards. Same-day site assessments available.</p>
            
            <div className="cta-features-inline">
              <div className="feature-inline">
                <span className="feature-check">✓</span>
                <span>Free Site Assessment</span>
              </div>
              <div className="feature-inline">
                <span className="feature-check">✓</span>
                <span>Fixed Contract Pricing</span>
              </div>
              <div className="feature-inline">
                <span className="feature-check">✓</span>
                <span>Same-Day Response</span>
              </div>
              <div className="feature-inline">
                <span className="feature-check">✓</span>
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>

            <div className="cta-buttons-enhanced">
              <a href="tel:01902239420" className="cta-btn cta-btn-primary">
                <span className="btn-icon-large">📞</span>
                <span className="btn-text-group">
                  <span className="btn-main-text">Call Now for Immediate Service</span>
                  <span className="btn-sub-text">01902 239420 • Available 7 Days a Week</span>
                </span>
                <span className="btn-arrow">→</span>
              </a>
              
              <Link to="/contact" className="cta-btn cta-btn-secondary">
                <span className="btn-icon-large">📋</span>
                <span className="btn-text-group">
                  <span className="btn-main-text">Schedule Site Assessment</span>
                  <span className="btn-sub-text">Free Consultation • No Obligation Quote</span>
                </span>
                <span className="btn-arrow">→</span>
              </Link>
              
              <a href="https://wa.me/447852145002" className="cta-btn cta-btn-whatsapp">
                <span className="btn-icon-large">💬</span>
                <span className="btn-text-group">
                  <span className="btn-main-text">WhatsApp Us</span>
                  <span className="btn-sub-text">Quick Response • Instant Quote</span>
                </span>
                <span className="btn-arrow">→</span>
              </a>
            </div>

            <div className="cta-trust-bar">
              <div className="trust-item-inline">
                <span className="trust-icon-small">🛡️</span>
                <span>£5M Insured</span>
              </div>
              <div className="trust-divider">•</div>
              <div className="trust-item-inline">
                <span className="trust-icon-small">✓</span>
                <span>Background Checked</span>
              </div>
              <div className="trust-divider">•</div>
              <div className="trust-item-inline">
                <span className="trust-icon-small">⭐</span>
                <span>5.0 Rating</span>
              </div>
              <div className="trust-divider">•</div>
              <div className="trust-item-inline">
                <span className="trust-icon-small">🏆</span>
                <span>500+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
