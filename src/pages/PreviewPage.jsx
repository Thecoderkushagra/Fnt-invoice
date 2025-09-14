import { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { templates } from "../assets/asset";
import { ArrowBigLeft, Download, Loader, Mail, Save, Trash } from "lucide-react";
import InvoicePreview from "../components/InvoicePreview";
import { deleteInvoice, saveInvoice } from "../service/invoiceService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { uploadInvoiceThumbnail } from "../service/cloudnaryService";
import html2canvas from "html2canvas";
import { generatePdfFromElement } from "../Utils/pdfUtils";

const PreviewPage = () => {
    const previewRef = useRef();
    const { selectedTemplate, invoiceData, setSelectedTemplate, baseURL } = useContext(AppContext);
    const [loding, setLoding] = useState(false);
    const [downloading, setDownloading] = useState(false);
    const navigate = useNavigate();

    const handelSaveAndExit = async () => {
        try {
            setLoding(true);
            const canvas = await html2canvas(previewRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#fff',
                scrollY: -window.scrollY,
            });
            const imageData = canvas.toDataURL("image/png");
            const thumbnailUrl = await uploadInvoiceThumbnail(imageData);
            const payload = {
                ...invoiceData,
                thumbnailUrl,
                template: selectedTemplate
            }
            const response = await saveInvoice(baseURL, payload);
            if (response.status === 200) {
                toast.success("Invoice saved Successfully")
                navigate("/dashboard");
            } else {
                toast.error("Something went wrong")
            }
        } catch (error) {
            console.log(error);
            toast.error("Fail to save invoice")
        } finally {
            setLoding(false);
        }
    }

    const handleDelete = async () => {
        if (!invoiceData.id) {
            toast.error("Cannot delete invoice — missing ID.");
            return;
        }

        try {
            setLoding(true); // optional: reuse loading state to disable buttons
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
            setLoding(false);
        }
    };

    const handleDownloadPdf = async () => {
        if (!previewRef.current) return;
        try {
            setDownloading(true);
            await generatePdfFromElement(previewRef.current, `invoice_${Date.now}.pdf`);
        } catch (error) {
            toast.error("Fail to generate invoices")
        } finally {
            setDownloading(false);
        }
    };

    return (
        <div className="previewpage container-fluid d-flex flex-column p-3 min-vh-100">
            {/* action button */}
            <div className="d-flex gap-2 flex-wrap justify-content-center">
                {templates.map(({ id, lable }) => (
                    <button
                        key={id}
                        className=
                        {`btn btn-sm rounded-pill p-2 
                        ${selectedTemplate === id ? "btn-warning" : "btn-outline-secondary"}`
                        }
                        onClick={() => setSelectedTemplate(id)}
                    >
                        {lable}
                    </button>
                ))}
            </div>

            {/* list of action buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                <button
                    className="btn btn-primary gap-2
                    d-flex align-item-center justify-content-center"
                    onClick={handelSaveAndExit} disabled={loding}
                >
                    {loding && <Loader className="me-2 spin-animation" />}
                    {loding ? "Saving..." : (
                        <>
                            <Save /> Save and Exit
                        </>
                    )}
                </button>

                {invoiceData.id && <button
                    className="btn btn-danger gap-2
                    d-flex align-item-center justify-content-center"
                    onClick={handleDelete}
                >
                    <Trash /> Delete Invoice
                </button>
                }

                <button className="
                    btn btn-secondary gap-2
                    d-flex align-item-center justify-content-center"
                    onClick={() => navigate("/dashboard")}
                >
                    <ArrowBigLeft />Back to Dashboard
                </button>

                <button className="
                    btn btn-info gap-2
                    d-flex align-item-center justify-content-center"
                >
                    <Mail /> Send Email
                </button>

                <button className="
                    btn btn-success gap-2
                    d-flex align-item-center justify-content-center"
                    onClick={handleDownloadPdf} disabled={loding}
                >
                    {loding && <Loader className="me-2 spin-animation" />}
                    {loding ? "Downloading..." : (
                        <>
                            <Download /> Download PDF
                        </>
                    )}                  
                </button>
            </div>

            <div className="flex-grow-1 overflow-auto d-flex justify-content-center align-item-start bg-light py-3">
                <div ref={previewRef} className="invoice-preview"
                >
                    <InvoicePreview invoiceData={invoiceData} template={selectedTemplate} />
                </div>
            </div>
        </div>
    );
};

export default PreviewPage;