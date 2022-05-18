import axios from '../axios'

const handleLoginApi = (email, password) => {
    //goi den server Nodejs
    return axios.post('/api/login', { email, password })
}

export { handleLoginApi }