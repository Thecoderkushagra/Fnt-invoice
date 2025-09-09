import { Trash2 } from "lucide-react";
import { useContext, useEffect } from "react";
import { AppContext} from "../context/AppContext";

const InvoiceForm = () => {
    const { invoiceData, setInvoiceData } = useContext(AppContext)

    const addItem = () => {
        setInvoiceData((prev) => ({
            ...prev,
            items: [
                ...prev.items,
                { name: "", qty: "", amount: "", description: "", total: "" }
            ]
        }))
    }

    const deleteItem = (index) => {
        const items = invoiceData.items.filter((_, i) => i !== index);
        setInvoiceData((prev) => ({ ...prev, items }));
    }

    // Fixed function name and logic
    const handleChange = (section, field, value) => {
        setInvoiceData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value }
        }));
    }

    // Handle simple field changes (non-nested)
    const handleSimpleChange = (field, value) => {
        setInvoiceData((prev) => ({
            ...prev,
            [field]: value
        }));
    }

    // Handle item changes with automatic total calculation
    const handleItemChange = (index, field, value) => {
        setInvoiceData((prev) => {
            const updatedItems = prev.items.map((item, i) => {
                if (i === index) {
                    const updatedItem = { ...item, [field]: value };
                    
                    // Auto-calculate total when qty or amount changes
                    if (field === 'qty' || field === 'amount') {
                        const qty = parseFloat(field === 'qty' ? value : updatedItem.qty) || 0;
                        const amount = parseFloat(field === 'amount' ? value : updatedItem.amount) || 0;
                        updatedItem.total = (qty * amount).toFixed(2);
                    }
                    
                    return updatedItem;
                }
                return item;
            });
            
            return {
                ...prev,
                items: updatedItems
            };
        });
    }

    // Handle "Same as Billing" checkbox
    const handleSameAsBilling = (checked) => {
        if (checked) {
            setInvoiceData((prev) => ({
                ...prev,
                shipping: { ...prev.billing }
            }));
        } else {
            setInvoiceData((prev) => ({
                ...prev,
                shipping: { name: "", phone: "", address: "" }
            }));
        }
    }

    const calculateTotal = () => {
        const subtotal = invoiceData.items.reduce((sum, item) => {
            return sum + (parseFloat(item.total) || 0);
        }, 0);
        const taxRate = parseFloat(invoiceData.tax) || 0;
        const taxAmount = (subtotal * taxRate) / 100;
        const grandTotal = subtotal + taxAmount;
        return { subtotal, taxAmount, grandTotal }; 
    }

    const { subtotal, taxAmount, grandTotal } = calculateTotal();

    // Fixed logo upload function
    const handleLogoUpload = (e) => {
        const file = e.target.files[0]; // Fixed: files instead of file
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setInvoiceData((prev) => ({
                    ...prev,
                    logo: reader.result
                }))
            }
            reader.readAsDataURL(file);
        }
    }

    // Fixed useEffect - corrected property names and logic
    useEffect(() => {
        if(!invoiceData.invoice.number){
            const randomNumber = `INV-${Math.floor(100000 + Math.random() * 900000)}`
            setInvoiceData((prev) => ({
                ...prev,
                invoice: {...prev.invoice, number: randomNumber} 
            }))
        }
    }, [invoiceData.invoice.number, setInvoiceData]); 

    return (
        <div className="invoiceform container py-4">
            <div className="mb-4">
                <h5>Company Logo</h5>
                <div className="mt-3">
                    <input type="file" name="logo" className="form-control" accept="image/*"
                        onChange={handleLogoUpload} />
                </div>
            </div>

            <div className="mb-4">
                <h5>Your Company</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company Name"
                            onChange={(e) => handleChange("company", "name", e.target.value)}
                            value={invoiceData.company.name} />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company Phone"
                            onChange={(e) => handleChange("company", "number", e.target.value)}
                            value={invoiceData.company.number} />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Company Address"
                            onChange={(e) => handleChange("company", "address", e.target.value)}
                            value={invoiceData.company.address} />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h5>Bill to</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name"
                            onChange={(e) => handleChange("billing", "name", e.target.value)}
                            value={invoiceData.billing.name} />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone Number"
                            onChange={(e) => handleChange("billing", "phone", e.target.value)}
                            value={invoiceData.billing.phone} />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Address"
                            onChange={(e) => handleChange("billing", "address", e.target.value)}
                            value={invoiceData.billing.address} />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5>Ship to</h5>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="sameAsBilling"
                            onChange={(e) => handleSameAsBilling(e.target.checked)} />
                        <label htmlFor="sameAsBilling" className="form-check-label">
                            Same as Billing
                        </label>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name"
                            onChange={(e) => handleChange("shipping", "name", e.target.value)}
                            value={invoiceData.shipping.name} />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone Number"
                            onChange={(e) => handleChange("shipping", "phone", e.target.value)}
                            value={invoiceData.shipping.phone} />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Shipping Address"
                            onChange={(e) => handleChange("shipping", "address", e.target.value)}
                            value={invoiceData.shipping.address} />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h5>Invoice Information</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="invoiceNumber" className="form-label mb-2">Invoice Number</label>
                        <input type="text" disabled className="form-control" id="invoiceNumber"
                            value={invoiceData.invoice.number} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDate" className="form-label mb-2">Invoice Date</label>
                        <input type="date" className="form-control" id="invoiceDate"
                            onChange={(e) => handleChange("invoice", "date", e.target.value)}
                            value={invoiceData.invoice.date} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDueDate" className="form-label mb-2">Invoice Due Date</label>
                        <input type="date" className="form-control" id="invoiceDueDate"
                            onChange={(e) => handleChange("invoice", "dueDate", e.target.value)}
                            value={invoiceData.invoice.dueDate} />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h5>Item Detail</h5>
                {invoiceData.items.map((item, index) => (
                    <div key={index} className="card p-3 mb-3">
                        <div className="row g-3 mb-2">
                            <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="Item Name"
                                    onChange={(e) => handleItemChange(index, "name", e.target.value)}
                                    value={item.name} />
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" placeholder="Quantity"
                                    onChange={(e) => handleItemChange(index, "qty", e.target.value)}
                                    value={item.qty} />
                            </div>
                            <div className="col-md-3">
                                <input type="number" placeholder="Amount" className="form-control"
                                    onChange={(e) => handleItemChange(index, "amount", e.target.value)}
                                    value={item.amount} />
                            </div>
                            <div className="col-md-3">
                                <input type="number" className="form-control" placeholder="Total"
                                    value={item.total}
                                    readOnly
                                    style={{ backgroundColor: '#f8f9fa' }} />
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <textarea className="form-control" placeholder="Description"
                                onChange={(e) => handleItemChange(index, "description", e.target.value)}
                                value={item.description}></textarea>
                            {invoiceData.items.length > 1 && (
                                <button className="btn btn-outline-danger" type="button" onClick={() => deleteItem(index)}>
                                    <Trash2 size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}
                <button onClick={addItem} className="btn btn-primary" type="button" style={{ background: "#5d00dfc3", borderColor: "#5d00dfc3" }}>Add Item</button>
            </div>

            <div className="mb-4">
                <h5>Bank Account Details</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Account holder Name"
                            onChange={(e) => handleChange("account", "name", e.target.value)}
                            value={invoiceData.account.name} />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Account Number"
                            onChange={(e) => handleChange("account", "number", e.target.value)}
                            value={invoiceData.account.number} />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" placeholder="Branch/IFSC code"
                            onChange={(e) => handleChange("account", "ifsccode", e.target.value)}
                            value={invoiceData.account.ifsccode} />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h5>Totals</h5>
                <div className="w-100 w-md-50">
                    <div className="d-flex justify-content-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-2">
                        <label htmlFor="taxInput" className="me-2">Tax Rate %</label>
                        <input type="number" id="taxInput" className="form-control w-50 text-end" placeholder="2"
                            onChange={(e) => handleSimpleChange("tax", parseFloat(e.target.value) || 0)}
                            value={invoiceData.tax} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Tax Amount</span>
                        <span>${taxAmount.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between fw-bold mt-2">
                        <span>Grand Total</span>
                        <span>${grandTotal.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <h5>Notes:</h5>
                <div className="w-100">
                    <textarea name="notes" className="form-control" rows={3}
                        onChange={(e) => handleSimpleChange("notes", e.target.value)}
                        value={invoiceData.notes}></textarea>
                </div>
            </div>
        </div>
    )
}

export default InvoiceForm;