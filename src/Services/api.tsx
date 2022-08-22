import axios from "axios";

const api = axios.create({
  baseURL: "https://44.199.200.211:3320/",
});

export default api;
