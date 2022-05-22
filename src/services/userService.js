import axios from '../axios'

const handleLoginApi = (userEmail, userPassword) => {
    //goi den server Nodejs
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log('Check data from service: ', data)
    return axios.post('/api/create-new-user', data)
}

export { handleLoginApi, getAllUsers, createNewUserService }