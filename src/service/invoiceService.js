import axios from "axios";

export const saveInvoice = (baseUrl, payload, token) => {
    return axios.post(`${baseUrl}/invoice/saveInvoice`, payload, 
        {headers: {Authorization: `Bearer ${token}`}}
    );
}

export const fetchInvoice = (baseUrl, token) => {
    return axios.get(`${baseUrl}/invoice/seeInvoices`,
        {headers: {Authorization: `Bearer ${token}`}}
    );
}

export const deleteInvoice = (baseUrl, id, token) => {
    return axios.delete(`${baseUrl}/invoice/${id}`,
        {headers: {Authorization: `Bearer ${token}`}}
    );
}

export const sendEmail = (baseUrl, payload, token) => {
    return axios.post(`${baseUrl}/invoice/sendPdf`, payload,
        {headers: {Authorization: `Bearer ${token}`}}
    );
}

export const SignupApi = (baseUrl, payload) => {
    return axios.post(`${baseUrl}/public/signup`, payload)
}

export const varifyOtpApi = (baseUrl, payload) => {
    return axios.post(`${baseUrl}/public/varify-otp`, payload)
}

export const loginUserApi = (baseUrl, payload) => {
    return axios.post(`${baseUrl}/public/login`, payload)
}