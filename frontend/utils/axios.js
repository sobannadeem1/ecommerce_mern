import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-mern-delta.vercel.app",
  timeout: 60000,
});

export default API;
