import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AppContext, initialInvoiceData } from "../context/AppContext";
import { fetchInvoice } from "../service/invoiceService";
import { Plus } from "lucide-react";
import { formatDate } from "../Utils/formatInvoiceData";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [invoices, setInvoices] = useState([]);
    const { baseURL, setInvoiceData, setSelectedTemplate, setInvoiceTitle } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await fetchInvoice(baseURL);
                setInvoices(response.data);
            } catch (error) {
                toast.error("fail to load invoices")
            }
        }
        fetchInvoices();
    }, [baseURL]);

    const handleViewClick = (invoice) => {
        setInvoiceData(invoice);
        setSelectedTemplate(invoice.template || "template1");
        setInvoiceTitle(invoice.title || "New Invoice");
        navigate('/preview');
    }

    const handleCreacteNew = () => {
        setInvoiceData(initialInvoiceData);
        setSelectedTemplate("template1");
        setInvoiceTitle("New Invoice");
        navigate('/generate');
    }

    return (
        <div className="container py-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                <div onClick={handleCreacteNew}
                    className="card h-100 justify-content-center align-items-center border border-2 border-light shadow-sm cursor-pointer"
                    style={{ minHeight: "270px" }}
                >
                    <Plus size={48} />
                    <p className="mt-3 fw-medium">Create New Invoice</p>
                </div>

                {invoices.map((invoice, idx) => (
                    <div className="col" key={idx}>
                        <div onClick={() => handleViewClick(invoice)}
                            className="card h-100 border border-2 border-light shadow-sm cursor-pointer"
                            style={{ minHeight: "270px" }}
                        >
                            {invoice.thumbnailUrl && (
                                <img src={invoice.thumbnailUrl} alt="Invoice Thumbnail" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                            )}
                            <div className="card-body">
                                <h6>{invoice.title}</h6>
                                <small className="text-muted">
                                    Last Updated: {formatDate(invoice.lastUpdatedAt)}
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;