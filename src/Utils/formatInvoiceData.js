export const formatInvoiceData = (invoiceData) => {
    const {
        title,
        company = {},
        invoice = {},
        account = {},
        billing = {},
        shipping = {},
        tax = 0,
        notes = "",
        items = [],
        logo = ""
    } = invoiceData || {};

    const currentSymbol = "$";
    const subtotal = items.reduce((acc, item) => acc + (item.qty * item.amount), 0);
    const taxAmmount = subtotal * (tax / 100);
    const total = subtotal + taxAmmount;

    return {
        title,

        companyName: company.name,
        companyAddress: company.address,
        companyPhone: company.phone,
        companyLogo: logo,

        // Billing
        billingName: billing.name,
        billingPhone: billing.phone,
        billingAddress: billing.address,

        // Shipping
        shippingName: shipping.name,
        shippingPhone: shipping.phone,
        shippingAddress: shipping.address,

        // Invoice
        invoiceName: invoice.name,
        invoiceDate: invoice.date,
        invoiceDueDate: invoice.dueDate,

        // Account
        accountName: account.name,
        accountNumber: account.number,
        accountIfsc: account.ifsccode,

        currentSymbol,
        tax,
        notes,
        items,
        subtotal,
        taxAmmount,
        total
    };
};