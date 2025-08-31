import './LandingPage.css'

const LandingPage = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ minHeight: '80vh' }}>
        <h1 className="col-lg-10 col-md-10 mx-auto mb-4">
          Effortless Invoicing. Professional Results.
        </h1>

        <p className="lead mb-5" style={{ fontSize: '1.2rem', maxWidth: '900px' }}>
          Stop wrestling with spreadsheets and wasting time on outdated tools. Quick Invoices helps you create, customize, and send professional invoices in just minutes—so you can focus on your business, not paperwork. Get paid faster, stay organized, and impress your clients with clean, modern designs that make invoicing effortless.
        </p>

        <div className="d-flex gap-3">
          <button
            className="btn rounded-pill px-4"
            style={{ background: "#5d00dfc3", borderColor: "#5d00dfc3", color: "#fff" }}
          >
            Generate Your First Invoice
          </button>

          <button
            className="btn rounded-pill px-4"
            style={{ background: "#e2e2e3c3", borderColor: "#e2e2e3c3", color: "black" }}
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  )
}

export default LandingPage
