import axios from "axios";

const API = axios.create({
    baseURL: "https://www.dnd5eapi.co"
})

export default API;