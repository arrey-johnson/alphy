import { useState } from 'react'
import './Gallery.css'

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🏢' },
    { id: 'office', name: 'Office Cleaning', icon: '💼' },
    { id: 'residential', name: 'Residential', icon: '🏠' },
    { id: 'deep', name: 'Deep Cleaning', icon: '✨' },
    { id: 'commercial', name: 'Commercial', icon: '🏭' }
  ]

  // Placeholder gallery items - replace with real images when available
  const galleryItems = [
    { id: 1, category: 'office', title: 'Corporate Office - Before & After', image: '/images/services/2148112715.jpg', description: 'Complete office deep clean' },
    { id: 2, category: 'residential', title: 'Luxury Home Cleaning', image: '/images/services/20668.jpg', description: 'Premium residential service' },
    { id: 3, category: 'deep', title: 'Kitchen Deep Clean', image: '/images/services/2149345523.jpg', description: 'Professional kitchen sanitization' },
    { id: 4, category: 'commercial', title: 'Retail Space Maintenance', image: '/images/services/2149345535.jpg', description: 'Regular commercial cleaning' },
    { id: 5, category: 'office', title: 'Meeting Room Refresh', image: '/images/services/2150359024.jpg', description: 'Conference room detailing' },
    { id: 6, category: 'residential', title: 'Move-Out Cleaning', image: '/images/services/2150520639.jpg', description: 'End of tenancy clean' },
    { id: 7, category: 'deep', title: 'Bathroom Restoration', image: '/images/services/2151340149.jpg', description: 'Deep bathroom cleaning' },
    { id: 8, category: 'commercial', title: 'Warehouse Cleaning', image: '/images/services/21780.jpg', description: 'Industrial space cleaning' }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1 className="page-title">Our Work Gallery</h1>
          <p className="hero-subtitle">See the Quality and Attention to Detail We Bring to Every Project</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image-wrapper">
                  <img src={item.image} alt={item.title} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="gallery-badge">View Project</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="gallery-notice">
            <div className="notice-icon">📸</div>
            <h3>More Photos Coming Soon!</h3>
            <p>
              We're currently collecting professional before-and-after photos of our recent projects. 
              Check back soon to see more examples of our exceptional cleaning services.
            </p>
          </div>

          {/* Stats Section */}
          <div className="gallery-stats">
            <div className="stat-item">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.2%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
