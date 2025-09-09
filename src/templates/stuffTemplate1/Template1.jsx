import "./Template1.css";

const Template1 = ({ data }) => {
  return (
    <div className="invoice template1">
      {/* Header */}
      <div className="invoice-header">
        <h2>{data.title || "Invoice"}</h2>
        {data.companyLogo && <img src={data.companyLogo || "Logo"} alt="logo" className="company-logo" />}
      </div>

      {/* Company & Invoice Info */}
      <div className="company-invoice">
        <div>
          <h5>{data.companyName}</h5>
          <p>{data.companyAddress}</p>
          <p>{data.companyPhone}</p>
        </div>
        <div className="text-right">
          <p><b>Invoice #:</b> {data.invoiceName}</p>
          <p><b>Date:</b> {data.invoiceDate}</p>
          <p><b>Due:</b> {data.invoiceDueDate}</p>
        </div>
      </div>

      {/* Billing & Shipping */}
      <div className="billing-shipping">
        <div>
          <h6>Bill To:</h6>
          <p>{data.billingName}</p>
          <p>{data.billingAddress}</p>
          <p>{data.billingPhone}</p>
        </div>
        <div>
          <h6>Ship To:</h6>
          <p>{data.shippingName}</p>
          <p>{data.shippingAddress}</p>
          <p>{data.shippingPhone}</p>
        </div>
      </div>

      {/* Items */}
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.items.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{data.currentSymbol}{item.amount.toFixed(2)}</td>
              <td>{data.currentSymbol}{(item.qty * item.amount).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="totals">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td className="text-right">{data.currentSymbol}{data.subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Tax ({data.tax}%)</td>
              <td className="text-right">{data.currentSymbol}{data.taxAmmount.toFixed(2)}</td>
            </tr>
            <tr className="total-row">
              <td>Total</td>
              <td className="text-right">{data.currentSymbol}{data.total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notes */}
      {data.notes && (
        <div className="notes">
          <p><b>Notes:</b> {data.notes}</p>
        </div>
      )}

      {/* Footer */}
      <div className="footer">
        <small>
          Account: {data.accountName} | {data.accountNumber} | IFSC: {data.accountIfsc}
        </small>
      </div>
    </div>
  );
};

export default Template1;