import { createContext, useState } from "react";

export const AppContext = createContext();

export const initialInvoiceData = {
    title: "New Invoice",
    billing: { name: "", phone: "", address: "" },
    shipping: { name: "", phone: "", address: "" },
    invoice: { name: "", date: "", dueDate: "" },
    account: { name: "", number: "", ifsccode: "" },
    company: { name: "", number: "", address: "" },
    tax: 0,
    notes: "",
    items: [
        { name: "", qty: "", amount: "", description: "", total: "" }
    ],
    logo: ""
}

export const AppContextProvider = ({ children }) => {
    const [invoiceTitle, setInvoiceTitle] = useState("New Invoice");
    const [invoiceData, setInvoiceData] = useState(initialInvoiceData);
    const [selectedTemplate, setSelectedTemplate] = useState("Template1");
    const[ haveAcc, setHaveAcc] = useState(true);
    // const [user, setUser] = useState(null);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    const baseURL = "http://localhost:8080";

    // useEffect(() => {// Load token from localStorage if available
    //     const token = localStorage.getItem("authToken");
    //     if (token) {
    //         setIsAuthenticated(true); // Optionally call backend to get user details
    //     }
    // }, []);

    // const login = (token, userData) => {
    //     localStorage.setItem("authToken", token);
    //     setUser(userData);
    //     setIsAuthenticated(true);
    // };

    // const logout = () => {
    //     localStorage.removeItem("authToken");
    //     setUser(null);
    //     setIsAuthenticated(false);
    // };


    const contextValue = {
        invoiceTitle, setInvoiceTitle,
        invoiceData, setInvoiceData,
        selectedTemplate, setSelectedTemplate,
        initialInvoiceData,
        haveAcc, setHaveAcc,
        baseURL, 
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
