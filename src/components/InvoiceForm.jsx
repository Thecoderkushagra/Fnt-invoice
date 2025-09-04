import { Trash2 } from "lucide-react";

const InvoiceForm = () => {
    return (
        <div className="incoiceform container py-4">
            <div className="mb-4">
                <h5>Company Logo</h5>
                <div className="mt-3">
                    <input type="file" name="logo" className="form-control" accept="image/*" />
                </div>
            </div>

            <div className="mb-4">
                <h5>Your Company</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company Phone" />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Company Address" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h5>Bill to</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Address" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <div className="d-flex justify-content-between align-item-center mb-2">
                    <h5>Ship to</h5>
                    <div className="form-check" >
                        <input type="checkbox" className="form-check-input" />
                        <label htmlFor="sameAsBilling" className="form-check-lable">
                            Same as Billing
                        </label>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Shipping Address" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h5>Invoice Information</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="invoiceNumber" className="form-lable mb-2">Invoice Number</label>
                        <input type="text" disabled className="form-control" placeholder="Invoice Number" id="invoiceNumber" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDate" className="form-lable mb-2">Invoice Date</label>
                        <input type="date" className="form-control" id="invoiceDate" />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDueDate" className="form-lable mb-2">Invoice Due Date</label>
                        <input type="date" className="form-control" id="invoiceDueDate" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h5>Item Detail</h5>
                <div className="card p-3 mb-3">
                    <div className="row g-3 mb-2">
                        <div className="col-md-3">
                            <input type="text" className="form-control" placeholder="Item Name" />
                        </div>
                        <div className="col-md-3">
                            <input type="number" className="form-control" placeholder="Quantity" />
                        </div>
                        <div className="col-md-3">
                            <input type="number" placeholder="Amount" className="form-control" />
                        </div>
                        <div className="col-md-3">
                            <input type="number" className="form-control" placeholder="Total" />
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        <textarea className="form-control" placeholder="Description"></textarea>
                        <button className="btn btn-outline-danger" type="button">
                            <Trash2 size={18}/>
                        </button>
                    </div>
                </div>
                <button className="btn btn-primary" type="button" style={{background:"#5d00dfc3",borderColor: "#5d00dfc3"}}>Add Item</button>
            </div>

            <div className="mb-4">
                <h5>Bank Account Details</h5>
                <div className="row g-3">
                    <div className="col-md-4">                       
                        <input type="text" className="form-control" placeholder="Account holder Name" />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Account Number"/>
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Branch/IFSC code"/>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h5>Totals</h5>
                <div className="w-100 w-md-50">
                    <div className="d-flex justify-content-between">
                        <span>Subtotal</span>
                        <span>${1000.00}</span>
                    </div>
                    <div className="d-flex justify-content-between align-item-center my-2">
                        <label htmlFor="taxTnput" className="me-2">Taxt Rate %</label>
                        <input type="number" id="taxInput" className="form-control w-50 text-end" placeholder="2"/>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Tax Amount</span>
                        <span>${1000.00}</span>
                    </div>
                    <div className="d-flex justify-content-between fw-bold mt-2">
                        <span>Grand Total</span>
                        <span>${10000.00}</span>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h5>Notes:</h5>
                <div className="w-100">
                    <textarea name="notes" className="form-control" rows={3}></textarea>
                </div>
            </div>

        </div>
    )
}
export default InvoiceForm;