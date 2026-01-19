import axios from "axios";

const API = axios.create({
  baseURL: "https://reqres.in/api",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export function postWorkintech(payload) {
  return API.post("/workintech", payload);
}
