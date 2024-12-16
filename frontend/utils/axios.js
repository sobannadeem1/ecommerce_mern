import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-mern-delta.vercel.app",
});

export default API;
