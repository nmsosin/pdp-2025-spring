import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com", // Указать свой API URL
  timeout: 10000, // 10 секунд таймаут
  headers: {
    "Content-Type": "application/json",
  },
});