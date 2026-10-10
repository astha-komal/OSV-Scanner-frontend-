import axios from "axios";

const axiosClient = axios.create({
     baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
});

// Attach the JWT to every request once the user's signed in.
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// If the token's expired/invalid, the backend returns 401 - send the user
// back to sign in instead of showing a confusing error.
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  }
);

export default axiosClient;