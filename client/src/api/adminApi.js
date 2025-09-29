import axios from "axios";

export const fetchServerStatus = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/admin/status");
    return response.data;
  } catch (error) {
    throw error;
  }
};
