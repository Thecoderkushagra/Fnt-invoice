import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
};

export const AppContextProvider = ({ children }) => {
    const [invoiceTitle, setInvoiceTitle] = useState("New Invoice");
    const [invoiceData, setInvoiceData] = useState(initialInvoiceData);
    const [selectedTemplate, setSelectedTemplate] = useState("Template1");
    const [haveAcc, setHaveAcc] = useState(true);
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const baseURL = "http://localhost:8080";
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const savedUser = localStorage.getItem("userData");
        if (token) {
            setIsAuthenticated(true);
            if (savedUser) setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (token, userData) => {
        localStorage.setItem("authToken", token);
        localStorage.setItem("userData", JSON.stringify({ name: userData }));
        setUser({ name: userData });
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
        setUser(null);
        setIsAuthenticated(false);
        navigate("/")
    };

    const contextValue = {
        invoiceTitle, setInvoiceTitle,
        invoiceData, setInvoiceData,
        selectedTemplate, setSelectedTemplate,
        initialInvoiceData,
        haveAcc, setHaveAcc,
        user, isAuthenticated,
        login, logout,
        baseURL
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
