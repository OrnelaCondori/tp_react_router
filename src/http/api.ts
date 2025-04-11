import axios from "axios"
const URL_API = "http://localhost:3000"

export const getCursos = async () => {
    const response = await axios.get(`${URL_API}/cursos`)
    return response.data
}

export const getCursoPorId = async (id: string) => {
    const response = await axios.get(`${URL_API}/cursos/${id}`)
    return response.data
}