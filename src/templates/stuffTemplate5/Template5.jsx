import "./Template5.css";

const Template5 = ({ data }) => {
  return (
    <div className="invoice template5">
      {/* Header */}
      <div className="header">
        <div className="company-info">
          {data.companyLogo && <img src={data.companyLogo} alt="logo" />}
          <h2>{data.companyName}</h2>
          <p>{data.companyAddress}</p>
          <p>{data.companyPhone}</p>
        </div>
        <div className="invoice-info">
          <h2>Invoice</h2>
          <p><b>Invoice #:</b> {data.invoiceName}</p>
          <p><b>Date:</b> {data.invoiceDate}</p>
          <p><b>Due:</b> {data.invoiceDueDate}</p>
        </div>
      </div>

      {/* Billing & Shipping */}
      <div className="addresses">
        <div>
          <h5>Billed To</h5>
          <p>{data.billingName}</p>
          <p>{data.billingAddress}</p>
          <p>{data.billingPhone}</p>
        </div>
        <div>
          <h5>Shipped To</h5>
          <p>{data.shippingName}</p>
          <p>{data.shippingAddress}</p>
          <p>{data.shippingPhone}</p>
        </div>
      </div>

      {/* Items */}
      <table className="items">
        <thead>
          <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.items && Array.isArray(data.items) && data.items.length > 0 ? (
            data.items.map((item, i) => (
              <tr key={i}>
                <td><b>{item.name || "N/A"}</b>: {item.description || "N/A"}</td>
                <td>{item.qty || 0}</td>
                <td>${parseFloat(item.amount || 0).toFixed(2)}</td>
                <td>${parseFloat(item.total || 0).toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Totals */}
      <div className="totals">
        <p>Subtotal: {data.currentSymbol}{data.subtotal.toFixed(2)}</p>
        <p>Tax ({data.tax}%): {data.currentSymbol}{data.taxAmmount.toFixed(2)}</p>
        <h3>Total: {data.currentSymbol}{data.total.toFixed(2)}</h3>
      </div>

      {/* Footer */}
      <div className="footer">
        <h5>Bank Account Details</h5>
        <p>Account Holder: {data.accountName}</p>
        <p>Account Number: {data.accountNumber}</p>
        <p>IFSC/Branch Code: {data.accountIfsc}</p>
      </div>

      {/* Notes */}
      {data.notes && (
        <div className="notes">
          <p><b>Notes:</b> {data.notes}</p>
        </div>
      )}
    </div>
  );
};

export default Template5;
