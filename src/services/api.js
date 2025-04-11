import axios from "axios";

// If deploying later, replace with deployed backend URL
const API_BASE_URL = "https://aws-polymer-search-backend.vercel.app/";

// Search API with token authentication
export const searchPolymer = async (query) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.warn("No token found – user may not be logged in.");
    return [];
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/search?q=${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    return [];
  }
};
