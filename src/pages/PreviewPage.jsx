import { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { templates } from "../assets/asset";
import { ArrowBigLeft, Download, Loader, Mail, Save, Trash } from "lucide-react";
import InvoicePreview from "../components/InvoicePreview";
import { deleteInvoice, saveInvoice, sendEmail } from "../service/invoiceService"; 
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { uploadInvoiceThumbnail } from "../service/cloudnaryService";
import html2canvas from "html2canvas";
import { generatePdfFromElement } from "../Utils/pdfUtils";

const PreviewPage = () => {
    const previewRef = useRef();
    const { selectedTemplate, invoiceData, setSelectedTemplate, baseURL } = useContext(AppContext);

    const [loading, setLoading] = useState(false);
    const [downloading, setDownloading] = useState(false);
    const [showEmailDialog, setShowEmailDialog] = useState(false);
    const [emailAddress, setEmailAddress] = useState("");
    const [sendingEmail, setSendingEmail] = useState(false);

    const navigate = useNavigate();

    const handleSaveAndExit = async () => {
        try {
            setLoading(true);
            const canvas = await html2canvas(previewRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#fff",
                scrollY: -window.scrollY,
            });

            const imageData = canvas.toDataURL("image/png");
            const thumbnailUrl = await uploadInvoiceThumbnail(imageData);

            const payload = {
                ...invoiceData,
                thumbnailUrl,
                template: selectedTemplate,
            };

            const response = await saveInvoice(baseURL, payload);
            if (response.status === 200) {
                toast.success("Invoice saved successfully");
                navigate("/dashboard");
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            console.error("Error saving invoice:", error);
            toast.error("Failed to save invoice");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!invoiceData.id) {
            toast.error("Cannot delete invoice — missing ID.");
            return;
        }

        try {
            setLoading(true);
            const response = await deleteInvoice(baseURL, invoiceData.id);

            if (response.status === 200 || response.status === 204) {
                toast.success("Invoice deleted successfully.");
                navigate("/dashboard");
            } else {
                toast.error("Unable to delete invoice.");
            }
        } catch (error) {
            console.error("Failed to delete invoice:", error);
            toast.error("Failed to delete invoice.");
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadPdf = async () => {
        if (!previewRef.current) return;
        try {
            setDownloading(true);
            await generatePdfFromElement(previewRef.current, `invoice_${Date.now()}.pdf`, false);
        } catch (error) {
            console.error("Error generating PDF:", error);
            toast.error("Failed to generate invoice PDF");
        } finally {
            setDownloading(false);
        }
    };

    const handleOpenEmailDialog = () => {
        setShowEmailDialog(true);
        setEmailAddress("");
    };

    const handleCloseEmailDialog = () => {
        setShowEmailDialog(false);
        setEmailAddress("");
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSendEmail = async () => {
        if (!emailAddress.trim()) {
            toast.error("Please enter a valid email address");
            return;
        }
        if (!validateEmail(emailAddress)) {
            toast.error("Please enter a valid email format");
            return;
        }
        try {
            setSendingEmail(true);
            const pdfBlob = await generatePdfFromElement(
                previewRef.current,
                `invoice_${Date.now()}.pdf`,
                true
            );
            if (!pdfBlob) {
                toast.error("Failed to generate PDF");
                return;
            }
            const payload = new FormData();
            payload.append("pdfFile", pdfBlob);
            payload.append("recipientEmail", emailAddress);

            const response = await sendEmail(baseURL, payload);
            if (response.status === 200) {
                toast.success(`Invoice sent successfully to ${emailAddress}`);
                handleCloseEmailDialog();
            } else {               
                toast.error("Failed to send email");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error("Failed to send email. Please try again.");
        } finally {
            setSendingEmail(false);
        }
    };

    return (
        <div className="previewpage container-fluid d-flex flex-column p-3 min-vh-100">
            {/* Template Selection */}
            <div className="d-flex gap-2 flex-wrap justify-content-center">
                {templates.map(({ id, lable }) => (
                    <button
                        key={id}
                        className={`btn btn-sm rounded-pill p-2 ${
                            selectedTemplate === id ? "btn-warning" : "btn-outline-secondary"
                        }`}
                        onClick={() => setSelectedTemplate(id)}
                    >
                        {lable}
                    </button>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                <button
                    className="btn btn-primary gap-2 d-flex align-items-center justify-content-center"
                    onClick={handleSaveAndExit}
                    disabled={loading}
                >
                    {loading && <Loader className="me-2 spin-animation" />}
                    {loading ? "Saving..." : <><Save /> Save and Exit</>}
                </button>

                {invoiceData.id && (
                    <button
                        className="btn btn-danger gap-2 d-flex align-items-center justify-content-center"
                        onClick={handleDelete}
                        disabled={loading}
                    >
                        <Trash /> Delete Invoice
                    </button>
                )}

                <button
                    className="btn btn-secondary gap-2 d-flex align-items-center justify-content-center"
                    onClick={() => navigate("/dashboard")}
                >
                    <ArrowBigLeft /> Back to Dashboard
                </button>

                <button
                    className="btn btn-info gap-2 d-flex align-items-center justify-content-center"
                    onClick={handleOpenEmailDialog}
                >
                    <Mail /> Send Email
                </button>

                {showEmailDialog && (
                    <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title d-flex align-items-center gap-2">
                                        <Mail size={20} /> Send Invoice via Email
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={handleCloseEmailDialog}
                                        disabled={sendingEmail}
                                        aria-label="Close"
                                    >
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="emailInput" className="form-label">
                                            Recipient Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailInput"
                                            placeholder="Enter email address"
                                            value={emailAddress}
                                            onChange={(e) => setEmailAddress(e.target.value)}
                                            disabled={sendingEmail}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") handleSendEmail();
                                            }}
                                        />
                                    </div>
                                    <div className="text-muted small">
                                        The invoice will be sent as a PDF attachment to the specified email address.
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={handleCloseEmailDialog}
                                        disabled={sendingEmail}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary d-flex align-items-center gap-2"
                                        onClick={handleSendEmail}
                                        disabled={sendingEmail || !emailAddress.trim()}
                                    >
                                        {sendingEmail && <Loader size={16} className="spin-animation" />}
                                        {sendingEmail ? "Sending..." : <><Mail size={16} /> Send Email</>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    className="btn btn-success gap-2 d-flex align-items-center justify-content-center"
                    onClick={handleDownloadPdf}
                    disabled={downloading}
                >
                    {downloading && <Loader className="me-2 spin-animation" />}
                    {downloading ? "Downloading..." : <><Download /> Download PDF</>}
                </button>
            </div>

            {/* Invoice Preview */}
            <div className="flex-grow-1 overflow-auto d-flex justify-content-center align-items-start bg-light py-3">
                <div ref={previewRef} className="invoice-preview">
                    <InvoicePreview invoiceData={invoiceData} template={selectedTemplate} />
                </div>
            </div>
        </div>
    );
};

export default PreviewPage;
