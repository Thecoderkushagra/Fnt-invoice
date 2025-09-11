import { createContext, useState } from "react";

export const AppContext = createContext();

export const initialInvoiceData = {
    title: "New Invoice",
    billing: { name:"", phone:"", address:"" },
    shipping: { name:"", phone:"", address:"" },
    invoice: { name:"", date:"", dueDate:"" },
    account: { name:"", number:"", ifsccode:"" },
    company: { name:"", number:"", address:"" },
    tax:0,
    notes:"",
    items: [
        { name:"", qty:"", amount:"", description:"", total:"" }
    ],
    logo:""
}

export const AppContextProvider = ({ children }) => {
    const [invoiceTitle, setInvoiceTitle] = useState("New Invoice");
    const [invoiceData, setInvoiceData] = useState(initialInvoiceData);
    const [selectedTemplate, setSelectedTemplate] = useState("Template1")
    const baseURL = "http://localhost:8080";


    const contextValue = {
        invoiceTitle,setInvoiceTitle,
        invoiceData,setInvoiceData,
        selectedTemplate,setSelectedTemplate,
        initialInvoiceData,
        baseURL
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
