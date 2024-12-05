import axios from "axios"

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/tareas/api/v1/tareas/" 
})

export const getAllTasks = () => { 
return  api.get("/")
}
export const createTask = (task) => {
    return api.post("/", task);
}