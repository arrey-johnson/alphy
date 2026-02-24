import './Legal.css'

function PrivacyPolicy() {
  return (
    <div className="legal">
      <section className="section">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="legal-content">
            <h2>1. Introduction</h2>
            <p>
              Alphy's Services Ltd ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Address and location information</li>
              <li>Service preferences and booking details</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and manage our cleaning services</li>
              <li>Process bookings and payments</li>
              <li>Communicate with you about our services</li>
              <li>Improve our services and customer experience</li>
              <li>Send promotional materials (with your consent)</li>
            </ul>

            <h2>4. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>5. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>

            <h2>6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Alphy's Services Ltd<br />
              421 Bilston Road<br />
              Wolverhampton<br />
              WV2 2NN<br />
              Email: info@alphysservicesltd.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
