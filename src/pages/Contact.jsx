import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    const mailtoLink = `mailto:info@alphysservicesltd.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  return (
    <div className="contact">
      <section className="section">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="intro">
            Get in touch with us for a free quote or to schedule a cleaning service. 
            We're here to answer all your questions.
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              
              <div className="info-item">
                <h3>📞 Phone</h3>
                <p><a href="tel:01902239420">01902 239420</a></p>
              </div>

              <div className="info-item">
                <h3>📱 WhatsApp</h3>
                <p><a href="https://wa.me/447852145002">07852 145002</a></p>
              </div>

              <div className="info-item">
                <h3>✉️ Email</h3>
                <p><a href="mailto:info@alphysservicesltd.com">info@alphysservicesltd.com</a></p>
              </div>

              <div className="info-item">
                <h3>📍 Address</h3>
                <p>421 Bilston Road<br />Wolverhampton<br />WV2 2NN</p>
              </div>

              <div className="info-item">
                <h3>🕐 Working Hours</h3>
                <p>Monday - Sunday<br />08:00 AM - 08:00 PM</p>
              </div>

              <div className="info-item">
                <h3>📍 Areas Covered</h3>
                <p>West Midlands, East Midlands, Manchester, Liverpool, Northamptonshire</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
