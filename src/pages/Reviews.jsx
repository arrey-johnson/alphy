import { useState } from 'react'
import './Reviews.css'

function Reviews() {
  const [filter, setFilter] = useState('all')

  const reviews = [
    { name: 'Sarah M.', role: 'Homeowner', text: 'Excellent service! The team was professional and thorough. My house has never looked better. They paid attention to every detail and left everything spotless.', rating: 5, service: 'residential', date: '2 weeks ago' },
    { name: 'John D.', role: 'Property Manager', text: 'Very reliable and punctual. They did an amazing deep clean before we moved in. Highly recommend for move-in/out cleaning services.', rating: 5, service: 'move', date: '1 month ago' },
    { name: 'Emma T.', role: 'Office Manager', text: 'Great attention to detail. Our office has never been cleaner. The team is professional, efficient, and respectful of our workspace.', rating: 5, service: 'commercial', date: '3 weeks ago' },
    { name: 'Michael R.', role: 'Business Owner', text: 'Professional team and affordable prices. They handle our weekly office cleaning and we couldn\'t be happier. Will definitely continue using their services.', rating: 5, service: 'commercial', date: '1 week ago' },
    { name: 'Lisa K.', role: 'Homeowner', text: 'Outstanding cleaning service. They went above and beyond my expectations. The deep clean was thorough and the results were amazing.', rating: 5, service: 'deep', date: '2 months ago' },
    { name: 'David P.', role: 'Facility Manager', text: 'Fantastic service from start to finish. Very impressed with the quality and consistency. They handle our commercial property with care and professionalism.', rating: 5, service: 'commercial', date: '3 weeks ago' },
    { name: 'Rachel W.', role: 'Homeowner', text: 'Best cleaning service I\'ve used! They are thorough, reliable, and always on time. My home sparkles after every visit.', rating: 5, service: 'residential', date: '1 month ago' },
    { name: 'James B.', role: 'Restaurant Owner', text: 'Exceptional deep cleaning service for our restaurant. They understand the hygiene standards required and deliver consistently.', rating: 5, service: 'commercial', date: '2 weeks ago' }
  ]

  const filterOptions = [
    { id: 'all', name: 'All Reviews', icon: '⭐' },
    { id: 'residential', name: 'Residential', icon: '🏠' },
    { id: 'commercial', name: 'Commercial', icon: '🏢' },
    { id: 'deep', name: 'Deep Cleaning', icon: '✨' },
    { id: 'move', name: 'Move In/Out', icon: '📦' }
  ]

  const filteredReviews = filter === 'all' 
    ? reviews 
    : reviews.filter(review => review.service === filter)

  const stats = {
    totalReviews: reviews.length,
    averageRating: 5.0,
    fiveStarPercent: 100,
    recommendPercent: 100
  }

  return (
    <div className="reviews">
      {/* Hero Section */}
      <section className="reviews-hero">
        <div className="container">
          <h1 className="page-title">Customer Reviews</h1>
          <p className="hero-subtitle">See What Our Clients Say About Our Services</p>
          
          {/* Stats Overview */}
          <div className="reviews-stats">
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-value">{stats.averageRating.toFixed(1)}</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📝</div>
              <div className="stat-value">{stats.totalReviews}+</div>
              <div className="stat-label">Total Reviews</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🌟</div>
              <div className="stat-value">{stats.fiveStarPercent}%</div>
              <div className="stat-label">5-Star Reviews</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👍</div>
              <div className="stat-value">{stats.recommendPercent}%</div>
              <div className="stat-label">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="review-filters">
            {filterOptions.map(option => (
              <button
                key={option.id}
                className={`filter-btn ${filter === option.id ? 'active' : ''}`}
                onClick={() => setFilter(option.id)}
              >
                <span className="filter-icon">{option.icon}</span>
                <span>{option.name}</span>
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="reviews-grid">
            {filteredReviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <div className="reviewer-avatar">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="reviewer-name">{review.name}</div>
                      <div className="reviewer-role">{review.role}</div>
                    </div>
                  </div>
                  <div className="review-date">{review.date}</div>
                </div>
                <div className="stars">
                  {'⭐'.repeat(review.rating)}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-badge">{filterOptions.find(opt => opt.id === review.service)?.name || 'Service'}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="review-cta">
            <div className="cta-icon">💬</div>
            <h2>Share Your Experience</h2>
            <p>We'd love to hear from you! Leave us a review and help others discover our services.</p>
            <div className="cta-buttons">
              <a href="https://share.google/nAQK3t3ucsNqiZdbX" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary">Leave a Google Review</button>
              </a>
              <a href="https://www.facebook.com/AlphysServicesLtd" target="_blank" rel="noopener noreferrer">
                <button className="btn-secondary">Review on Facebook</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reviews
