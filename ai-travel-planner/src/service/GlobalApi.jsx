import axios from "axios";

const BASE_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json`;

// Fetch Places Details
export const GetPlacesDetails = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query, // Search query string
        key: import.meta.env.VITE_NAME_TOAL, // API key from environment variables
      },
    });
    console.log("Places API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching places details:", error.message);
    if (error.response) {
      console.error("Server responded with status:", error.response.status);
      console.error("Response data:", error.response.data);
    }
    throw error; // Rethrow error for further handling
  }
};
