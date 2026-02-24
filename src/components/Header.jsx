import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.header') && !event.target.closest('.nav')) {
        setIsMenuOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <a href="tel:01902239420" className="top-bar-item">
                <span className="top-icon">📞</span>
                <span>01902 239420</span>
              </a>
              <a href="mailto:info@alphysservicesltd.com" className="top-bar-item">
                <span className="top-icon">✉️</span>
                <span>info@alphysservicesltd.com</span>
              </a>
            </div>
            <div className="top-bar-right">
              <span className="top-bar-text">Follow Us:</span>
              <div className="top-social-icons">
                <a href="https://www.instagram.com/alphysservices" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/AlphysServicesLtd" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://share.google/nAQK3t3ucsNqiZdbX" target="_blank" rel="noopener noreferrer" className="top-social-icon" aria-label="Google">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo" onClick={handleLinkClick}>
              <div className="logo-content">
                <span className="logo-icon">✨</span>
                <h1>ALPHY'S SERVICES</h1>
              </div>
            </Link>
            
            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              {/* Desktop Navigation */}
              <div className="nav-desktop">
                <Link to="/" className={isActive('/') ? 'active' : ''} onClick={handleLinkClick}>Home</Link>
                <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={handleLinkClick}>About</Link>
                <Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={handleLinkClick}>Services</Link>
                <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''} onClick={handleLinkClick}>Gallery</Link>
                <Link to="/reviews" className={isActive('/reviews') ? 'active' : ''} onClick={handleLinkClick}>Reviews</Link>
                <Link to="/faq" className={isActive('/faq') ? 'active' : ''} onClick={handleLinkClick}>FAQs</Link>
                <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={handleLinkClick}>Contact</Link>
                <Link to="/contact" className="nav-cta-btn" onClick={handleLinkClick}>
                  <span className="cta-icon">📋</span>
                  <span>GET FREE QUOTE</span>
                </Link>
              </div>
              
              {/* Mobile Navigation */}
              <div className="nav-mobile">
                <div className="nav-header">
                  <div className="nav-logo">
                    <span className="logo-icon">✨</span>
                    <h3>ALPHY'S SERVICES</h3>
                  </div>
                  <button 
                    className="nav-close"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                  >
                    ×
                  </button>
                </div>
                <div className="nav-content">
                  <Link to="/" className={isActive('/') ? 'active' : ''} onClick={handleLinkClick}>Home</Link>
                  <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={handleLinkClick}>About</Link>
                  <Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={handleLinkClick}>Services</Link>
                  <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''} onClick={handleLinkClick}>Gallery</Link>
                  <Link to="/reviews" className={isActive('/reviews') ? 'active' : ''} onClick={handleLinkClick}>Reviews</Link>
                  <Link to="/faq" className={isActive('/faq') ? 'active' : ''} onClick={handleLinkClick}>FAQs</Link>
                  <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={handleLinkClick}>Contact</Link>
                  
                  <div className="mobile-cta-section">
                    <Link to="/contact" className="mobile-cta-btn" onClick={handleLinkClick}>
                      <span className="cta-icon">📋</span>
                      <span className="cta-text">
                        <span className="cta-main">GET FREE QUOTE</span>
                        <span className="cta-sub">Response in 2 hours</span>
                      </span>
                    </Link>
                    <a href="tel:01902239420" className="mobile-call-btn" onClick={handleLinkClick}>
                      <span className="cta-icon">📞</span>
                      <span>CALL NOW</span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Backdrop for mobile menu */}
        {isMenuOpen && <div className="nav-backdrop" onClick={toggleMenu}></div>}
      </header>
    </>
  )
}

export default Header
