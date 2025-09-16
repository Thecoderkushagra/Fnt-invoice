import axios from "axios";

export const saveInvoice = (baseUrl, payload) => {
    return axios.post(`${baseUrl}/invoice/saveInvoice`, payload);
}

export const fetchInvoice = (baseUrl) => {
    return axios.get(`${baseUrl}/invoice/seeInvoices`);
}

export const deleteInvoice = (baseUrl,id) => {
    return axios.delete(`${baseUrl}/invoice/${id}`);
}

export const sendEmail = (baseUrl, payload) => {
    return axios.post(`${baseUrl}/invoice/sendPdf`, payload);
}