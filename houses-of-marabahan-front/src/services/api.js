import axios from 'axios';

const baseAPI = axios.create({
  baseURL: 'http://localhost:5000/',
});

function getConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

async function signUp(data) {
    await baseAPI.post('/sign-up', data);
}

const api = {
    signUp
}
export default api;