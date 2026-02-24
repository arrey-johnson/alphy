import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What areas do you cover?',
      answer: 'We provide services across West Midlands, East Midlands, Manchester, Liverpool, and Northamptonshire.'
    },
    {
      question: 'What are your working hours?',
      answer: 'We operate Monday through Sunday from 08:00 AM to 08:00 PM.'
    },
    {
      question: 'Do you provide cleaning supplies and equipment?',
      answer: 'Yes, we bring all necessary cleaning supplies and equipment. We use high-quality, safe, and effective products.'
    },
    {
      question: 'How do I book a cleaning service?',
      answer: 'You can book by calling us at 01902 239420, WhatsApp at 07852 145002, or through our contact form.'
    },
    {
      question: 'Do you offer one-time cleaning services?',
      answer: 'Yes, we offer both one-time and recurring cleaning services to suit your needs.'
    },
    {
      question: 'Can I customize my cleaning plan?',
      answer: 'Absolutely! We tailor our services to meet your specific needs and preferences.'
    },
    {
      question: 'Are your staff trained and experienced?',
      answer: 'Yes, our team is skilled, professional, and detail-oriented with extensive training in cleaning services.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Please contact us directly to discuss our cancellation policy. We strive to be flexible and understanding.'
    },
    {
      question: 'Do you offer commercial cleaning?',
      answer: 'Yes, we provide both residential and commercial cleaning services including offices and business spaces.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing is affordable and transparent. Contact us for a free quote tailored to your specific needs.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq">
      <section className="section">
        <div className="container">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="intro">
            Find answers to common questions about our cleaning services. 
            If you don't see your question here, feel free to contact us.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
