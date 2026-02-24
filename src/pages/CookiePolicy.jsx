import './Legal.css'

function CookiePolicy() {
  return (
    <div className="legal">
      <section className="section">
        <div className="container">
          <h1>Cookie Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="legal-content">
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>

            <h2>2. Types of Cookies We Use</h2>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic 
              functions like page navigation and access to secure areas of the website.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously.
            </p>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization, 
              such as remembering your preferences.
            </p>

            <h2>3. Managing Cookies</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies that are 
              already on your computer and you can set most browsers to prevent them from being placed. 
              However, if you do this, you may have to manually adjust some preferences every time you 
              visit our site.
            </p>

            <h2>4. Third-Party Cookies</h2>
            <p>
              We may use third-party services such as Google Analytics that also use cookies. These 
              services have their own privacy policies and cookie policies.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy
