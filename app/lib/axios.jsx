const { default: axios } = require("axios");

const api = axios.create({
    baseURL: "https://yt-summarizer-api-uw5d.onrender.com",
    headers:{
        "Content-Type":"application/json",
    }
})

export default api;