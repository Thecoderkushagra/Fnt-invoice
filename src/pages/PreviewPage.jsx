import { useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { templates } from "../assets/asset";
import { ArrowBigLeft, Download, Mail, Save, Trash } from "lucide-react";
import InvoicePreview from "../components/InvoicePreview";

const PreviewPage = () => {
    const previewRef = useRef();
    const { selectedTemplate, invoiceData } = useContext(AppContext);

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
                    >
                        {lable}
                    </button>
                ))}
            </div>

            {/* list of action buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                <button
                    className="
                    btn btn-primary 
                    d-flex 
                    align-item-center 
                    justify-content-center
                    gap-2"
                >
                    <Save /> Save and Exit
                </button>

                <button
                    className="
                    btn btn-danger 
                    d-flex 
                    align-item-center 
                    justify-content-center
                    gap-2"
                >
                    <Trash /> Delete Invoice
                </button>

                <button className="
                    btn btn-secondary 
                    d-flex 
                    align-item-center 
                    justify-content-center
                    gap-2"
                >
                    <ArrowBigLeft/>Back to Dashboard
                </button>

                <button className="
                    btn btn-info 
                    d-flex 
                    align-item-center 
                    justify-content-center
                    gap-2"
                >
                    <Mail /> Send Email
                </button>

                <button className="
                    btn btn-success 
                    d-flex 
                    align-item-center 
                    justify-content-center
                    gap-2"
                >
                    <Download /> Download PDF
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