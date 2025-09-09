import { forwardRef } from "react";
import { formatInvoiceData } from "../Utils/formatInvoiceData";
import Template1 from "../templates/stuffTemplate1/Template1";

const InvoicePreview = forwardRef(({invoiceData, template}, ref ) => {

    const formatedData = formatInvoiceData(invoiceData);

    return (
        <div ref={ref} className="invoice-preview container px-2 py-2 overflow-x-auto">
            {/* <Template1 data={formatedData}/> */}
            invoice present here
        </div>
    )
});

export default InvoicePreview;