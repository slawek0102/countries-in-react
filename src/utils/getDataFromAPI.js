import axios from "axios/index";


export const getDataFromAPI = (HTTPAddress) => {
    return axios.get(HTTPAddress)
        .then((response) => {
            return response.data
        }).catch((error) => {
            console.error(error)
        })
};
