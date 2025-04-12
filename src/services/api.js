import axios from "axios";

// 🔁 Point to your deployed backend
const API_BASE_URL = "https://aws-polymer-search-backend-gx9o.vercel.app/api";

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

// Optionally add login/register APIs if not already present
export const loginUser = async (form) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, form);
  return response.data;
};

export const registerUser = async (form) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, form);
  return response.data;
};
