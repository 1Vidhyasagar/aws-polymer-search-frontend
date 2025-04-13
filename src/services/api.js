import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // ✅ include /api

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

export const loginUser = async (form) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, form);
  return response.data;
};

export const registerUser = async (form) => {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, form);
  return response.data;
};
