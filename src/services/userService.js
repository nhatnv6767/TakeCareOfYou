import axios from '../axios'

const handleLoginApi = (userEmail, userPassword) => {
    //goi den server Nodejs
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

export { handleLoginApi }