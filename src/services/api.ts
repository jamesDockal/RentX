import axios from "axios";

export const api = axios.create({
  baseURL: "http://172.30.144.1:3333",
});
