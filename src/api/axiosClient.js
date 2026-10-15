import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
});

const isAuthRequest = (url = "") => url.startsWith("/auth");

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && !isAuthRequest(config.url)) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && !isAuthRequest(error.config?.url)) {
      localStorage.removeItem("token");
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  }
);

export default axiosClient;