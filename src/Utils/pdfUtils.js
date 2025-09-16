import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const generatePdfFromElement = async (
  element,
  filename = "invoice.pdf",
  returnBlob
) => {
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#fff",
    scrollY: -window.scrollY,
  });

  const imgData = canvas.toDataURL("image/jpeg");
  const pdf = new jsPDF("p", "pt", "a4");
  const imgProps = pdf.getImageProperties(imgData);

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

  if (returnBlob) {
    // ✅ Return a proper Blob so FormData can handle it
    const pdfBlob = pdf.output("blob");
    return new File([pdfBlob], filename, { type: "application/pdf" });
  } else {
    pdf.save(filename); 
  }
};
