const { default: axios } = require("axios");
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
    baseURL: `${API_BASE}`,
    headers:{
        "Content-Type":"application/json",
    }
})

export default api;