import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/api/"
})

export const usersAPI = {
    getUsers(page: number) {
        return instance.get(`user?page=${page}`)
            .then(response => {
                return response.data
            })
    },
    addMessage() {
        return instance.get(`message`)
            .then(response => {
                return response.data
            })
    }
}

