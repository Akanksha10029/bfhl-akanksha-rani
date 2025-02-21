import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchData = async (jsonData) => {
    try {
        const response = await axios.post(API_URL, jsonData);
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        return { is_success: false, message: "API request failed" };
    }
};
