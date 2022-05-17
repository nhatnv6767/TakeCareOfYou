import axios from '../axios'

const handleLogin = (email, password) => {
    //goi den server Nodejs
    return axios.post('/api/login')
}

module.exports = {
    handleLogin: handleLogin,
}