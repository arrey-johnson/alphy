import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 'standard',
      title: 'Standard Cleaning',
      icon: '🏠',
      image: '/images/services/20668.jpg',
      tagline: 'Consistent Maintenance for Everyday Cleanliness',
      description: 'Designed to keep your home or office consistently clean, fresh and organised. Focuses on high-traffic areas and commonly used surfaces to maintain a healthy, tidy environment. Ideal for weekly, bi-weekly or monthly upkeep.',
      price: 'From £25/hour',
      popular: false,
      features: [
        'High-traffic area focus',
        'Weekly/bi-weekly schedules',
        'Prevents dirt buildup',
        'Flexible timing options'
      ],
      areas: [
        {
          name: 'Kitchen',
          icon: '🍳',
          items: ['Wiping and sanitizing countertops', 'Cleaning exterior surfaces of appliances', 'Scrubbing sink and polishing fixtures', 'Wiping cabinet fronts', 'Cleaning stovetop surface', 'Taking out trash', 'Sweeping and mopping floors']
        },
        {
          name: 'Bathrooms',
          icon: '🚿',
          items: ['Cleaning and disinfecting toilets', 'Scrubbing sinks and countertops', 'Cleaning mirrors', 'Wiping down showers and tubs', 'Emptying trash', 'Sweeping and mopping floors']
        },
        {
          name: 'Living Areas',
          icon: '🛋️',
          items: ['Dusting furniture and surfaces', 'Wiping light switches', 'Making beds (if requested)', 'Sweeping and mopping floors', 'General tidying']
        },
        {
          name: 'Throughout',
          icon: '✨',
          items: ['Emptying trash bins', 'Removing cobwebs', 'Spot cleaning glass', 'Floor care throughout']
        }
      ]
    },
    {
      id: 'deep',
      title: 'Deep Cleaning',
      icon: '✨',
      image: '/images/services/2149345523.jpg',
      tagline: 'Comprehensive Top-to-Bottom Sanitization',
      description: 'Detailed cleaning service that goes far beyond regular maintenance. Targets built-up dirt, grime, bacteria, and hidden dust in areas that aren\'t cleaned daily or weekly. Perfect for seasonal refreshes or special occasions.',
      price: 'From £35/hour',
      popular: true,
      features: [
        'Targets hidden dirt & grime',
        'Includes hard-to-reach areas',
        'Deep sanitization',
        'Seasonal refresh ideal'
      ],
      areas: [
        {
          name: 'Kitchen',
          icon: '🍳',
          items: ['Scrubbing and sanitizing countertops', 'Cleaning inside/outside appliances', 'Degreasing stovetop and backsplash', 'Cleaning cabinet fronts', 'Scrubbing sink and fixtures', 'Cleaning baseboards', 'Removing built-up grease']
        },
        {
          name: 'Bathrooms',
          icon: '🚿',
          items: ['Scrubbing tile and grout', 'Removing soap scum and stains', 'Disinfecting toilet thoroughly', 'Deep cleaning shower/tub', 'Cleaning mirrors and fixtures', 'Sanitizing high-touch areas', 'Cleaning vents and baseboards']
        },
        {
          name: 'Living Areas',
          icon: '🛋️',
          items: ['Dusting all surfaces thoroughly', 'Cleaning baseboards and trim', 'Wiping doors and frames', 'Vacuuming under furniture', 'Cleaning window sills', 'Removing cobwebs']
        },
        {
          name: 'Throughout',
          icon: '✨',
          items: ['Detailed vent dusting', 'Spot cleaning walls', 'Thorough floor cleaning', 'Trash removal', 'Sanitizing surfaces']
        }
      ]
    },
    {
      id: 'move',
      title: 'Move-In/Move-Out Cleaning',
      icon: '📦',
      image: '/images/services/2149345535.jpg',
      tagline: 'Property Transition Perfection',
      description: 'Detailed top-to-bottom service designed to prepare a property for its next chapter. Ensures the space is spotless, sanitized and ready for new occupants. Essential for landlords, tenants, and property managers.',
      price: 'Custom Quote',
      popular: false,
      features: [
        'Complete property reset',
        'Inside cabinets & drawers',
        'Appliance deep clean',
        'Landlord-approved standards'
      ],
      areas: [
        {
          name: 'Kitchen',
          icon: '🍳',
          items: ['Cleaning inside cabinets/drawers', 'Cleaning inside refrigerator/oven', 'Degreasing stovetop/backsplash', 'Sanitizing countertops/sinks', 'Polishing fixtures', 'Cleaning baseboards']
        },
        {
          name: 'Bathrooms',
          icon: '🚿',
          items: ['Deep scrubbing showers/tubs', 'Disinfecting toilets completely', 'Cleaning inside cabinets', 'Removing soap scum buildup', 'Polishing mirrors and fixtures']
        },
        {
          name: 'Living Areas',
          icon: '🛋️',
          items: ['Cleaning inside closets', 'Wiping doors and trim', 'Cleaning baseboards/sills', 'Spot cleaning walls', 'Vacuuming and mopping']
        },
        {
          name: 'Throughout',
          icon: '✨',
          items: ['Cleaning interior windows', 'Thorough floor cleaning', 'Trash removal', 'Final inspection']
        }
      ]
    },
    {
      id: 'upholstery',
      title: 'Upholstery Cleaning',
      icon: '🛋️',
      image: '/images/services/2150359024.jpg',
      tagline: 'Professional Fabric Care & Restoration',
      description: 'Professional cleaning for all types of upholstered furniture to keep them fresh, extend their lifespan, and maintain a healthy indoor environment. Safe for all fabric types.',
      price: 'From £45/item',
      popular: false,
      features: [
        'All fabric types',
        'Stain removal',
        'Odor elimination',
        'Extends furniture life'
      ],
      items: [
        { name: 'Sofas & Armchairs', icon: '🛋️' },
        { name: 'Dining Room Chairs', icon: '🪑' },
        { name: 'Ottomans & Footstools', icon: '🔲' },
        { name: 'Headboards', icon: '🛏️' },
        { name: 'Office Seating', icon: '💼' }
      ]
    }
  ]

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">Our Professional Services</h1>
          <p className="hero-subtitle">Enterprise-Grade Cleaning Solutions Tailored to Your Needs</p>
          
          <div className="services-quick-nav">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`quick-nav-btn ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <span className="nav-icon">{service.icon}</span>
                <span className="nav-text">{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-section">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} className={`service-detail ${activeService === index ? 'active' : ''}`}>
              {/* Service Image Hero */}
              <div className="service-image-hero">
                <img src={service.image} alt={service.title} className="service-hero-img" />
                <div className="service-image-overlay">
                  <div className="service-icon-large">{service.icon}</div>
                </div>
              </div>

              <div className="service-header">
                <div className="service-header-left">
                  <div>
                    <div className="service-title-group">
                      <h2>{service.title}</h2>
                      {service.popular && <span className="popular-badge">Most Popular</span>}
                    </div>
                    <p className="service-tagline">{service.tagline}</p>
                  </div>
                </div>
                <div className="service-price">{service.price}</div>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-features-grid">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="feature-badge">
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {service.areas && (
                <div className="service-areas">
                  <h3 className="areas-title">What's Included</h3>
                  <div className="areas-grid">
                    {service.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="area-card">
                        <div className="area-header">
                          <span className="area-icon">{area.icon}</span>
                          <h4>{area.name}</h4>
                        </div>
                        <ul className="area-list">
                          {area.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.items && (
                <div className="service-items-section">
                  <h3 className="areas-title">We Clean</h3>
                  <div className="items-grid">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="item-card">
                        <span className="item-icon">{item.icon}</span>
                        <span className="item-name">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="service-cta">
                <Link to="/contact" className="service-cta-btn">
                  <span className="cta-icon">📋</span>
                  <span className="cta-text">
                    <span className="cta-main">Request Quote for {service.title}</span>
                    <span className="cta-sub">Free consultation • Same-day response</span>
                  </span>
                  <span className="cta-arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="section additional-services">
        <div className="container">
          <h2 className="section-title">Additional Services Available</h2>
          <div className="additional-grid">
            <div className="additional-card">
              <div className="additional-icon">🏢</div>
              <h3>Commercial Cleaning</h3>
              <p>Office buildings, retail spaces, and commercial properties</p>
            </div>
            <div className="additional-card">
              <div className="additional-icon">🧼</div>
              <h3>Carpet Cleaning</h3>
              <p>Deep carpet cleaning and stain removal services</p>
            </div>
            <div className="additional-card">
              <div className="additional-icon">🪟</div>
              <h3>Window Cleaning</h3>
              <p>Interior and exterior window cleaning available</p>
            </div>
            <div className="additional-card">
              <div className="additional-icon">🎯</div>
              <h3>Custom Plans</h3>
              <p>Tailored cleaning solutions for unique requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section services-cta-section">
        <div className="container">
          <div className="services-cta-box">
            <h2>Need a Custom Cleaning Solution?</h2>
            <p>Every space is unique. Let's discuss your specific requirements and create a tailored cleaning plan.</p>
            <div className="cta-buttons-row">
              <Link to="/contact" className="btn-primary-large">Schedule Free Consultation</Link>
              <a href="tel:01902239420" className="btn-secondary-large">Call 01902 239420</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
