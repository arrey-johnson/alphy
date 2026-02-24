import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">🧹</div>
              <h3>ALPHY'S SERVICES LTD</h3>
            </div>
            <p className="footer-tagline">Where cleanliness meets care</p>
            <p className="footer-description">
              Professional residential and commercial cleaning services you can trust. 
              Serving West Midlands and beyond with excellence since day one.
            </p>
            <div className="footer-badges">
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>Fully Insured</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">⭐</span>
                <span>5-Star Rated</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">🏆</span>
                <span>Award Winning</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/services">House Cleaning</Link></li>
                <li><Link to="/services">Office Cleaning</Link></li>
                <li><Link to="/services">Deep Cleaning</Link></li>
                <li><Link to="/services">Move-In/Out</Link></li>
                <li><Link to="/services">Carpet Cleaning</Link></li>
                <li><Link to="/services">Upholstery Cleaning</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact Info</h4>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">📞</span>
                  <a href="tel:01902239420">01902 239420</a>
                </li>
                <li>
                  <span className="contact-icon">💬</span>
                  <a href="https://wa.me/447852145002">07852 145002</a>
                </li>
                <li>
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:info@alphysservicesltd.com">info@alphysservicesltd.com</a>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>421 Bilston Road<br/>Wolverhampton WV2 2NN</span>
                </li>
                <li>
                  <span className="contact-icon">🕐</span>
                  <span>Mon-Sun: 08:00 AM - 08:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="footer-column footer-cta-column">
              <h4>Areas We Cover</h4>
              <ul>
                <li>West Midlands</li>
                <li>East Midlands</li>
                <li>Manchester</li>
                <li>Liverpool</li>
                <li>Northamptonshire</li>
              </ul>
              <div className="footer-cta">
                <div className="footer-cta-badge">
                  <span className="cta-badge-icon">⚡</span>
                  <span>Same-Day Response</span>
                </div>
                <h5 className="footer-cta-title">Ready to Get Started?</h5>
                <p className="footer-cta-text">Free site assessment • No obligation quote</p>
                <div className="footer-cta-buttons">
                  <Link to="/contact" className="footer-btn primary">
                    <span className="btn-icon">📋</span>
                    <span className="btn-content">
                      <span className="btn-main">GET FREE QUOTE</span>
                      <span className="btn-sub">Response in 2 hours</span>
                    </span>
                    <span className="btn-arrow">→</span>
                  </Link>
                  <a href="tel:01902239420" className="footer-btn secondary">
                    <span className="btn-icon">📞</span>
                    <span className="btn-text">CALL NOW</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/alphysservices" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/AlphysServicesLtd" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://share.google/nAQK3t3ucsNqiZdbX" target="_blank" rel="noopener noreferrer" className="social-icon google">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Alphy's Services Ltd. All rights reserved.
          </p>
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
