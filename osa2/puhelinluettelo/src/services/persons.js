import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return (
        axios
          .get(baseUrl)
          .then(response => response.data)
    )
}

const create = (newObject, id) => {
    let request;
    if(id===-1){
        request = axios.post(baseUrl, newObject)
    }else{
        request = axios.put(`${baseUrl}/${id}`, newObject)
    }
    return request.then(response => response.data)
}

const delet = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll,
    create,
    delet
}