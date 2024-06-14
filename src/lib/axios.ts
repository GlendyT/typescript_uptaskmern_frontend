import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use( config => {
    const token = localStorage.getItem("AUTH_TOKEN")
    if(token) {
        config.headers.Authorization = ` Bearer ${token}`
    }
    return config
})

export default api

//TODO: REQUEST ANTES DE LA PETICION HTTP Y ENVIA EL TOKEN
//TODO: RESPONSE SE EJECUTA DESPUES DE LA PETICION