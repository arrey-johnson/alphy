import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  const slides = [
    {
      title: 'Enterprise Cleaning That Protects Your Operations',
      subtitle: 'ISO-Compliant Standards',
      description: 'We maintain the hygiene standards that keep your business compliant, productive, and professional.',
      image: '/images/hero/2148112715.jpg',
      cta1: 'Schedule Site Assessment',
      cta2: 'View Service Portfolio',
      badges: ['ISO-Compliant Standards', '£5M Liability Coverage', '99.2% Client Retention']
    },
    {
      title: 'Your Facility. Spotless. Guaranteed. Every Time.',
      subtitle: 'Zero-Tolerance Quality Policy',
      description: 'Stop settling for inconsistent cleaning—get a service that shows up, delivers, and protects your reputation.',
      image: '/images/hero/2149345516.jpg',
      cta1: 'Get Your Custom Quote',
      cta2: 'See Our Work',
      badges: ['Zero-Tolerance Quality Policy', 'Vetted & Background-Checked Teams', '24/7 Emergency Response']
    },
    {
      title: 'Commercial Cleaning. Elevated.',
      subtitle: 'Certified Hygiene Specialists',
      description: 'Premium hygiene solutions designed for businesses that demand excellence without compromise.',
      image: '/images/hero/2149345525.jpg',
      cta1: 'Request Consultation',
      cta2: 'Explore Services',
      badges: ['Certified Hygiene Specialists', 'Fully Bonded & Insured', 'Contract-Grade Service']
    },
    {
      title: 'Trusted by 500+ Commercial Clients',
      subtitle: 'Same-Day Response Available',
      description: 'Fixed pricing, consistent quality, and a 100% satisfaction guarantee backed by contract.',
      image: '/images/hero/2150520639.jpg',
      cta1: 'Call Now',
      cta2: 'WhatsApp Us',
      badges: ['Same-Day Response', 'Fixed Contract Pricing', '100% Satisfaction Guarantee']
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    // Progress bar animation
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + (100 / 50) // 100% over 5 seconds (50 intervals of 100ms)
      })
    }, 100)

    return () => {
      clearInterval(timer)
      clearInterval(progressTimer)
    }
  }, [slides.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Touch swipe support
  useEffect(() => {
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    }

    const handleSwipe = () => {
      if (touchStartX - touchEndX > 50) {
        nextSlide()
      }
      if (touchEndX - touchStartX > 50) {
        prevSlide()
      }
    }

    const slider = document.querySelector('.hero-slider')
    if (slider) {
      slider.addEventListener('touchstart', handleTouchStart)
      slider.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', handleTouchStart)
        slider.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setProgress(0) // Reset progress when manually changing slides
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0) // Reset progress when manually changing slides
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0) // Reset progress when manually changing slides
  }
  const services = [
    {
      title: 'House Cleaning',
      description: 'Professional residential cleaning for a spotless home',
      image: '/images/services/20668.jpg',
      badge: 'Popular'
    },
    {
      title: 'Office & Commercial',
      description: 'Keep your workplace clean and professional',
      image: '/images/services/2148112715.jpg',
      badge: 'Business'
    },
    {
      title: 'Deep Cleaning',
      description: 'Thorough cleaning for every corner of your space',
      image: '/images/services/2149345523.jpg',
      badge: 'Premium'
    },
    {
      title: 'Move-In/Move-Out',
      description: 'Perfect cleaning for moving transitions',
      image: '/images/services/2149345535.jpg',
      badge: 'Specialized'
    },
    {
      title: 'Upholstery Cleaning',
      description: 'Refresh your furniture and fabrics',
      image: '/images/services/2150359024.jpg',
      badge: 'Expert'
    },
    {
      title: 'Carpet Cleaning',
      description: 'Deep clean carpets for a fresh look',
      image: '/images/services/2150520639.jpg',
      badge: 'Deep Clean'
    },
    {
      title: 'Recurring Services',
      description: 'Regular scheduled cleaning to maintain your space',
      image: '/images/services/2151340149.jpg',
      badge: 'Flexible'
    },
    {
      title: 'Custom Plans',
      description: 'Tailored cleaning solutions for your unique needs',
      image: '/images/services/21780.jpg',
      badge: 'Tailored'
    }
  ]

  const reasons = [
    {
      title: 'Reliable and Punctual',
      description: 'We show up on time and get the job done right',
      icon: '/images/icons/reliable.svg'
    },
    {
      title: 'Experienced and Trained Staff',
      description: 'Our team is skilled, professional and detail-oriented',
      icon: '/images/icons/experienced.svg'
    },
    {
      title: 'High Quality Cleaning Products',
      description: 'We use safe and effective products for spotless finish',
      icon: '/images/icons/quality.svg'
    },
    {
      title: 'Customised Services',
      description: 'We tailor our cleaning to meet your specific needs',
      icon: '/images/icons/custom.svg'
    },
    {
      title: 'Affordable and Transparent Pricing',
      description: 'No hidden fees, just honest pricing',
      icon: '/images/icons/affordable.svg'
    },
    {
      title: 'Customer Satisfaction Guaranteed',
      description: 'Your happiness is our top priority',
      icon: '/images/icons/satisfaction.svg'
    }
  ]

  return (
    <div className="home">
      <section className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''} ${index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1) ? 'prev' : ''}`}
            >
              <div className="slide-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
              <div className="slide-overlay"></div>
              <div className="slide-particles"></div>
              <div className="container slide-content">
                <div className="slide-badge">
                  <span className="badge-icon">✨</span>
                  <span className="badge-text">Professional Cleaning Services</span>
                </div>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <p className="slide-description">{slide.description}</p>
                <div className="slide-features">
                  {slide.badges.map((badge, badgeIndex) => (
                    <div key={badgeIndex} className="feature-item">
                      <span className="feature-icon">✓</span>
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
                <div className="slide-buttons">
                    {index === 0 && (
                      <>
                        <Link to="/contact" className="hero-button hero-button-primary">
                          <span className="button-content">
                            <span className="button-icon">📋</span>
                            <span className="button-text">
                              <span className="button-label">{slide.cta1}</span>
                              <span className="button-sublabel">Free Site Visit</span>
                            </span>
                          </span>
                          <span className="button-arrow">→</span>
                        </Link>
                        <Link to="/services" className="hero-button hero-button-secondary">
                          <span className="button-content">
                            <span className="button-icon">📁</span>
                            <span className="button-text">
                              <span className="button-label">{slide.cta2}</span>
                              <span className="button-sublabel">Our Solutions</span>
                            </span>
                          </span>
                          <span className="button-arrow">→</span>
                        </Link>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <Link to="/contact" className="hero-button hero-button-primary">
                          <span className="button-content">
                            <span className="button-icon">💼</span>
                            <span className="button-text">
                              <span className="button-label">{slide.cta1}</span>
                              <span className="button-sublabel">Fixed Pricing</span>
                            </span>
                          </span>
                          <span className="button-arrow">→</span>
                        </Link>
                        <Link to="/gallery" className="hero-button hero-button-secondary">
                          <span className="button-content">
                            <span className="button-icon">📸</span>
                            <span className="button-text">
                              <span className="button-label">{slide.cta2}</span>
                              <span className="button-sublabel">Before & After</span>
                            </span>
                          </span>
                          <span className="button-arrow">→</span>
                        </Link>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <Link to="/contact" className="hero-button hero-button-primary">
                          <span className="button-content">
                            <span className="button-icon">📞</span>
                            <span className="button-text">
                              <span className="button-label">{slide.cta1}</span>
                              <span className="button-sublabel">Expert Advice</span>
                            </span>
                          </span>
                          <span className="button-arrow">→</span>
                        </Link>
                        <Link to="/services" className="hero-button hero-button-secondary">
                          <span className="button-content">
                            <span className="button-icon">🧹</span>
                            <span className="button-text">
                              <span className="button-label">{slide.cta2}</span>
                              <span className="button-sublabel">Full Range</span>
                            </span>
                          </span>
                          <span className="button-arrow">→</span>
                        </Link>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <a href="tel:01902239420" className="hero-button hero-button-primary">
                          <span className="button-content">
                            <span className="button-icon">📞</span>
                            <span className="button-text">
                              <span className="button-label">{slide.cta1}</span>
                              <span className="button-sublabel">01902 239420</span>
                            </span>
                          </span>
                          <span className="button-arrow">→</span>
                        </a>
                        <a href="https://wa.me/447852145002" className="hero-button hero-button-whatsapp">
                          <span className="button-content">
                            <span className="button-icon">💬</span>
                            <span className="button-text">
                              <span className="button-label">{slide.cta2}</span>
                              <span className="button-sublabel">Quick Reply</span>
                            </span>
                          </span>
                          <span className="button-arrow">→</span>
                        </a>
                      </>
                    )}
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="slider-arrow slider-arrow-left" onClick={prevSlide} aria-label="Previous slide">
          ‹
        </button>
        <button className="slider-arrow slider-arrow-right" onClick={nextSlide} aria-label="Next slide">
          ›
        </button>

        {/* Dots Navigation */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="slider-progress" style={{ width: `${progress}%` }}></div>
      </section>

      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Main Services</h2>
          <p className="section-subtitle">Professional cleaning solutions tailored to your needs</p>
          <div className="services-grid-images">
            {services.map((service, index) => (
              <Link to="/services" key={index} className="service-image-card">
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-image" />
                  {service.badge && (
                    <span className="service-badge">{service.badge}</span>
                  )}
                  <div className="service-overlay">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <span className="service-arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services"><button className="btn-primary">View All Services</button></Link>
          </div>
        </div>
      </section>

      <section className="section section-alt why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose ALPHY'S SERVICES LTD</h2>
          <p className="section-subtitle">Your trusted partner for professional cleaning services</p>
          
          <div className="trust-indicators">
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <div className="trust-text">Fully Insured</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">⭐</div>
              <div className="trust-text">5-Star Rated</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🏆</div>
              <div className="trust-text">Award Winning</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">💚</div>
              <div className="trust-text">Eco-Friendly</div>
            </div>
          </div>

          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-number">{`0${index + 1}`}</div>
                <div className="reason-icon-wrapper">
                  <img src={reason.icon} alt={reason.title} className="reason-icon" />
                </div>
                <div className="reason-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-wrapper">
            <div className="stats-header">
              <h2 className="stats-title">Growing Business, Proven Results</h2>
              <p className="stats-subtitle">Real numbers from our journey so far</p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Satisfied Clients</div>
                <div className="stat-description">And growing every month</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-number">4.9★</div>
                <div className="stat-label">Google Rating</div>
                <div className="stat-description">Based on verified reviews</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🏢</div>
                <div className="stat-number">200+</div>
                <div className="stat-label">Projects Completed</div>
                <div className="stat-description">Residential & commercial</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✓</div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Satisfaction Guarantee</div>
                <div className="stat-description">We stand behind our work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-background-shapes">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
          <div className="cta-shape cta-shape-3"></div>
        </div>
        
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">
              <span className="cta-badge-icon">✨</span>
              <span className="cta-badge-text">Limited Time Offer</span>
            </div>
            
            <h2 className="cta-title">Ready to Experience a Cleaner Space?</h2>
            <p className="cta-text">
              Contact us today for a free quote and let us transform your space into a spotless haven. 
              Professional cleaning services you can trust.
            </p>
            
            <div className="cta-features">
              <div className="cta-feature">
                <span className="cta-feature-icon">⚡</span>
                <span className="cta-feature-text">Quick Response</span>
              </div>
              <div className="cta-feature">
                <span className="cta-feature-icon">💰</span>
                <span className="cta-feature-text">Free Quote</span>
              </div>
              <div className="cta-feature">
                <span className="cta-feature-icon">🎯</span>
                <span className="cta-feature-text">Same Day Service</span>
              </div>
              <div className="cta-feature">
                <span className="cta-feature-icon">✓</span>
                <span className="cta-feature-text">100% Guaranteed</span>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="tel:01902239420" className="cta-button-wrapper">
                <button className="btn-primary cta-btn-large">
                  <span className="btn-icon">📞</span>
                  <span className="btn-content">
                    <span className="btn-label">Call Now</span>
                    <span className="btn-sublabel">01902 239420</span>
                  </span>
                </button>
              </a>
              
              <a href="https://wa.me/447852145002" className="cta-button-wrapper">
                <button className="btn-whatsapp cta-btn-large">
                  <span className="btn-icon">💬</span>
                  <span className="btn-content">
                    <span className="btn-label">WhatsApp Us</span>
                    <span className="btn-sublabel">Quick Reply</span>
                  </span>
                </button>
              </a>
              
              <Link to="/contact" className="cta-button-wrapper">
                <button className="btn-secondary cta-btn-large">
                  <span className="btn-icon">✉️</span>
                  <span className="btn-content">
                    <span className="btn-label">Get a Quote</span>
                    <span className="btn-sublabel">Free Estimate</span>
                  </span>
                </button>
              </Link>
            </div>

            <div className="cta-trust">
              <div className="cta-trust-item">
                <span className="cta-trust-number">500+</span>
                <span className="cta-trust-label">Happy Clients</span>
              </div>
              <div className="cta-trust-divider"></div>
              <div className="cta-trust-item">
                <span className="cta-trust-number">5★</span>
                <span className="cta-trust-label">Average Rating</span>
              </div>
              <div className="cta-trust-divider"></div>
              <div className="cta-trust-item">
                <span className="cta-trust-number">24/7</span>
                <span className="cta-trust-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
