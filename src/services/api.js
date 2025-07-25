import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3002',
});

api.interceptors.request.use((config) => {
  const useData = localStorage.getItem('devburger:userData');

  const token = useData && JSON.parse(useData).token;
  // if (token) {
  config.headers.Authorization = `Bearer ${token}`;
  // }

  return config; // ← ESSA LINHA É ESSENCIAL!
});



