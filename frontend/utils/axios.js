import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-mern-delta.vercel.app",
  withCredentials: true,
  timeout: 60000,
});

export default API;
