import axios from 'axios'

export const apiClient = (baseURL, withCredentials = false) => {
    return axios.create({
        baseURL,
        withCredentials,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
}