import axios from "axios";

export const uploadInvoiceThumbnail = async (imageData) => {
  try {
    const formData = new FormData();
    formData.append("file", imageData);
    formData.append("upload_preset", "invoices-tumbnail"); // ✅ FIXED
    // No need to send cloud_name in formData

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/df7hpse7r/image/upload",
      formData
    );

    return response.data.secure_url;
  } catch (error) {
    console.error("Cloudinary upload failed:", error.response?.data || error.message);
    throw error; // propagate error so handelSaveAndExit can catch it
  }
};
