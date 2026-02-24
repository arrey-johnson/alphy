import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:info@alphysservicesltd.com?subject=Contact from ${formData.name} - ${formData.service || 'General Inquiry'}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AService Interested: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <div className="contact-hero-content">
            <div className="hero-badge">
              <span className="badge-icon">⚡</span>
              <span>Response within 2 hours</span>
            </div>
            <h1 className="contact-hero-title">Let's Get Your Space Spotless</h1>
            <p className="contact-hero-subtitle">
              Free quotes, same-day assessments, and friendly service. We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="quick-contact-bar">
        <div className="container">
          <div className="quick-contact-grid">
            <a href="tel:01902239420" className="quick-contact-item">
              <div className="quick-icon">📞</div>
              <div className="quick-content">
                <div className="quick-label">Call Us Now</div>
                <div className="quick-value">01902 239420</div>
              </div>
            </a>
            <a href="https://wa.me/447852145002" className="quick-contact-item" target="_blank" rel="noopener noreferrer">
              <div className="quick-icon">💬</div>
              <div className="quick-content">
                <div className="quick-label">WhatsApp</div>
                <div className="quick-value">07852 145002</div>
              </div>
            </a>
            <a href="mailto:info@alphysservicesltd.com" className="quick-contact-item">
              <div className="quick-icon">✉️</div>
              <div className="quick-content">
                <div className="quick-label">Email Us</div>
                <div className="quick-value">info@alphysservicesltd.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Request a Free Quote</h2>
                <p>Fill out the form below and we'll get back to you within 2 hours during business hours.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <span className="label-icon">👤</span>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <span className="label-icon">✉️</span>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <span className="label-icon">📞</span>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="07XXX XXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">
                      <span className="label-icon">🧹</span>
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="Standard Cleaning">Standard Cleaning</option>
                      <option value="Deep Cleaning">Deep Cleaning</option>
                      <option value="Move In/Out Cleaning">Move In/Out Cleaning</option>
                      <option value="Office Cleaning">Office Cleaning</option>
                      <option value="Carpet Cleaning">Carpet Cleaning</option>
                      <option value="Upholstery Cleaning">Upholstery Cleaning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <span className="label-icon">💬</span>
                    Tell Us About Your Needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Please describe the size of your space, preferred schedule, and any specific requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  <span className="btn-icon">📋</span>
                  <span>Send Request</span>
                  <span className="btn-arrow">→</span>
                </button>

                <div className="form-footer">
                  <div className="form-trust-items">
                    <div className="form-trust-item">
                      <span className="trust-check">✓</span>
                      <span>No obligation</span>
                    </div>
                    <div className="form-trust-item">
                      <span className="trust-check">✓</span>
                      <span>Free quote</span>
                    </div>
                    <div className="form-trust-item">
                      <span className="trust-check">✓</span>
                      <span>Quick response</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="contact-info-section">
              <div className="info-card">
                <div className="info-card-header">
                  <h3>Contact Information</h3>
                  <p>Reach out through any of these channels</p>
                </div>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-content">
                      <div className="info-label">Phone</div>
                      <a href="tel:01902239420" className="info-value">01902 239420</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">💬</div>
                    <div className="info-content">
                      <div className="info-label">WhatsApp</div>
                      <a href="https://wa.me/447852145002" className="info-value" target="_blank" rel="noopener noreferrer">07852 145002</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">✉️</div>
                    <div className="info-content">
                      <div className="info-label">Email</div>
                      <a href="mailto:info@alphysservicesltd.com" className="info-value">info@alphysservicesltd.com</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <div className="info-label">Address</div>
                      <div className="info-value">
                        421 Bilston Road<br />
                        Wolverhampton<br />
                        WV2 2NN
                      </div>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">🕐</div>
                    <div className="info-content">
                      <div className="info-label">Working Hours</div>
                      <div className="info-value">
                        Monday - Sunday<br />
                        08:00 AM - 08:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card areas-card">
                <div className="info-card-header">
                  <h3>Areas We Cover</h3>
                </div>
                <div className="areas-list">
                  <div className="area-item">📍 West Midlands</div>
                  <div className="area-item">📍 East Midlands</div>
                  <div className="area-item">📍 Manchester</div>
                  <div className="area-item">📍 Liverpool</div>
                  <div className="area-item">📍 Northamptonshire</div>
                </div>
              </div>

              <div className="info-card trust-card">
                <div className="trust-badges">
                  <div className="trust-badge">
                    <div className="trust-badge-icon">✓</div>
                    <div className="trust-badge-text">Fully Insured</div>
                  </div>
                  <div className="trust-badge">
                    <div className="trust-badge-icon">⭐</div>
                    <div className="trust-badge-text">4.9★ Rated</div>
                  </div>
                  <div className="trust-badge">
                    <div className="trust-badge-icon">🏆</div>
                    <div className="trust-badge-text">50+ Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
