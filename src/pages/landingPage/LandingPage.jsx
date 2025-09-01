import Logo from '../../components/Logo';

const LandingPage = () => {
  const steps = [
    {
      number: 1,
      heading: "Enter Details",
      content: "Quickly fill your client information, item descriptions, quantities and prices. Our intuitive form makes it a breeze.",
      bgColor: "bg-primary-subtle",
      numberBg: "bg-primary"
    },
    {
      number: 2,
      heading: "Choose Template", 
      content: "Browse our gallery of professionally designed templates. pick one that matches your brand and style.",
      bgColor: "bg-success-subtle",
      numberBg: "bg-success"
    },
    {
      number: 3,
      heading: "Preview Invoice",
      content: "See exactly how your invoice will look before sending it. Make any last-minute adjustments with ease.",
      bgColor: "bg-warning-subtle", 
      numberBg: "bg-warning"
    },
    {
      number: 4,
      heading: "Download & Save",
      content: "Download your PDF, send it directly via email, or save it for your records and future reference.",
      bgColor: "bg-info-subtle",
      numberBg: "bg-info"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div 
        className="d-flex flex-column align-items-center justify-content-center text-center position-relative overflow-hidden"
        style={{ 
          minHeight: '90vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        {/* Animated Background Elements */}
        <div 
          className="position-absolute"
          style={{
            top: '10%',
            left: '10%',
            width: '200px',
            height: '200px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="position-absolute"
          style={{
            top: '60%',
            right: '15%',
            width: '150px',
            height: '150px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        ></div>
        <div 
          className="position-absolute"
          style={{
            bottom: '20%',
            left: '20%',
            width: '100px',
            height: '100px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '50%',
            animation: 'float 10s ease-in-out infinite'
          }}
        ></div>

        {/* Main Content */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11">
              
              {/* Main Heading */}
              <h1 
                className="display-1.8 fw-bold text-white mb-4"
                style={{ 
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  lineHeight: '1.2'
                }}
              >
                Effortless Invoicing.
                <span style={{ color: '#ffd700' }}>Professional Results.</span>
              </h1>

              {/* Subheading */}
              <p 
                className="lead mb-5 text-white"
                style={{ 
                  fontSize: '1.3rem', 
                  maxWidth: '800px',
                  margin: '0 auto 3rem auto',
                  opacity: '0.95',
                  lineHeight: '1.5'
                }}
              >
                Stop wrestling with spreadsheets and wasting time on outdated tools. Quick Invoices helps you create, customize, and send professional invoices in just minutes—so you can focus on your business, not paperwork.
              </p>

              {/* Feature Highlights */}
              <div className="row mb-5 text-white">
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <div 
                      className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        width: '50px', 
                        height: '50px',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>⚡</span>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Lightning Fast</h6>
                      <small className="opacity-75">Create invoices in under 2 minutes</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <div 
                      className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        width: '50px', 
                        height: '50px',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>🎨</span>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Beautiful Templates</h6>
                      <small className="opacity-75">20+ professional designs</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <div 
                      className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        width: '50px', 
                        height: '50px',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <span style={{ fontSize: '1.5rem' }}>📱</span>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Mobile Ready</h6>
                      <small className="opacity-75">Works perfectly on any device</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button
                  className="btn btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg"
                  style={{ 
                    background: '#ffd700',
                    borderColor: '#ffd700',
                    color: '#333',
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255,215,0,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }}
                >
                  🚀 Generate Your First Invoice
                </button>

                <button
                  className="btn btn-lg rounded-pill px-5 py-3 fw-bold"
                  style={{ 
                    background: 'rgba(255,255,255,0.15)',
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: '#fff',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.25)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.15)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  📖 Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </div>

      {/* Get Started Section */}
      <div className="py-5 px-4">
        <div className="container">
          {/* Main Heading */}
          <h2 className="display-4 fw-bold text-center text-dark mb-5">
            Get Started in 4 Simple Steps
          </h2>
          
          {/* Steps Grid */}
          <div className="row g-4">
            {steps.map((step) => (
              <div key={step.number} className="col-12 col-md-6 col-lg-3">
                <div 
                  className={`${step.bgColor} rounded-3 p-4 text-center h-100 shadow-sm`}
                  style={{ 
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.classList.add('shadow');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.classList.remove('shadow');
                  }}
                >
                  {/* Step Number Circle */}
                  <div 
                    className={`${step.numberBg} rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4`}
                    style={{ width: '64px', height: '64px' }}
                  >
                    <span className="text-white fs-3 fw-bold">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Step Heading */}
                  <h3 className="h5 fw-bold text-dark mb-3 text-center">
                    {step.heading}
                  </h3>
                  
                  {/* Step Content */}
                  <p className="text-muted text-center mb-0" style={{ lineHeight: '1.6' }}>
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose MakeMyInvoices Section */}
      <div className="py-5 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {/* Main Heading */}
          <h2 className="display-4 fw-bold text-center text-dark mb-5">
            Why Choose MakeMyInvoices
          </h2>

          {/* Row 1 - Easy to fill Invoice details (Image Left) */}
          <div className="row align-items-center mb-5 py-4">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Easy Invoice Form" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-12 col-lg-6">
              <h3 className="h2 fw-bold text-dark mb-4">Easy to Fill Invoice Details</h3>
              <p className="lead text-muted" style={{ lineHeight: '1.6' }}>
                Say goodbye to complicated forms and confusing layouts. Our streamlined interface guides you through every step of the invoicing process. Simply enter your client's information, add your services or products, and watch as your professional invoice takes shape. With smart auto-suggestions and validation, you'll never miss important details again.
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">✓ Auto-save functionality prevents data loss</li>
                <li className="mb-2">✓ Smart field validation ensures accuracy</li>
                <li className="mb-2">✓ Client information saved for future use</li>
              </ul>
            </div>
          </div>

          {/* Row 2 - Beautiful Dashboard (Image Right) */}
          <div className="row align-items-center mb-5 py-4">
            <div className="col-12 col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Beautiful Dashboard" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-12 col-lg-6 order-lg-1">
              <h3 className="h2 fw-bold text-dark mb-4">Beautiful Dashboard</h3>
              <p className="lead text-muted" style={{ lineHeight: '1.6' }}>
                Manage all your invoices from one elegant, intuitive dashboard. Track payment status, view analytics, and organize your business finances with ease. Our clean, modern interface puts everything you need at your fingertips, making invoice management a pleasure rather than a chore.
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">✓ Real-time payment tracking</li>
                <li className="mb-2">✓ Revenue analytics and insights</li>
                <li className="mb-2">✓ Quick search and filtering options</li>
              </ul>
            </div>
          </div>

          {/* Row 3 - Invoice Preview with Action Button (Image Left) */}
          <div className="row align-items-center mb-5 py-4">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Invoice Preview" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-12 col-lg-6">
              <h3 className="h2 fw-bold text-dark mb-4">Invoice Preview with Action Button</h3>
              <p className="lead text-muted" style={{ lineHeight: '1.6' }}>
                See exactly how your invoice will appear to your clients before sending. Our live preview feature shows you every detail in real-time, ensuring your invoices always look professional and error-free. Make instant edits, adjust formatting, and perfect your brand presentation with just a few clicks.
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">✓ Real-time preview updates</li>
                <li className="mb-2">✓ Mobile-responsive design preview</li>
                <li className="mb-2">✓ One-click editing and adjustments</li>
              </ul>
            </div>
          </div>

          {/* Row 4 - Send Invoice Instantly (Image Right) */}
          <div className="row align-items-center py-4">
            <div className="col-12 col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Send Invoice" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
            <div className="col-12 col-lg-6 order-lg-1">
              <h3 className="h2 fw-bold text-dark mb-4">Send Invoice Instantly</h3>
              <p className="lead text-muted" style={{ lineHeight: '1.6' }}>
                Skip the hassle of email attachments and manual sending. With one click, send professional invoices directly to your clients' inboxes. Track delivery status, set up automatic reminders, and get paid faster with integrated payment options that make it easy for clients to pay immediately.
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2">✓ Instant email delivery</li>
                <li className="mb-2">✓ Automatic payment reminders</li>
                <li className="mb-2">✓ Multiple payment gateway integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ready to start */}
      <div className="d-flex flex-column align-items-center justify-content-center text-center position-relative overflow-hidden"
        style={{ 
          minHeight: '50vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}>

          <div className="col-lg-10 col-md-11">
              
              {/* Main Heading */}
              <h1 
                className="display-1.8 fw-bold text-white mb-4"
                style={{ 
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  lineHeight: '1.2'
                }}
              >
                Ready to Steamline your Invoicing?
              </h1> 
              <p 
                className="lead text-white"
                style={{ 
                  fontSize: '1.3rem', 
                  maxWidth: '800px',
                  margin: '0 auto 3rem auto',
                  opacity: '0.95',
                  lineHeight: '1.5'
                }}
              >
                Join thousands of freelancers and small bussinesses who trused MakeMyInvoice. Start creating proffesinal invoices today — its fast easy and effecticve!
              </p>

              <button
                  className="btn btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg"
                  style={{ 
                    background: '#ffd700',
                    borderColor: '#ffd700',
                    color: '#333',
                    transform: 'scale(1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255,215,0,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }}
                >
                Start Getting Invoices Now
                </button>              
              </div>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center text-center position-relative overflow-hidden"
      style={{ 
          minHeight: '20vh',
          background: '#dbdbdbdb',
        }}>
        <Logo />
        <p className='mt-3'>&copy; 2025 MakeMyInvoice. All rights reserved.
          <br />
          Crafted with care for freelancer and small bussinesses.
        </p>
      </div>

    </>
  )
}

export default LandingPage