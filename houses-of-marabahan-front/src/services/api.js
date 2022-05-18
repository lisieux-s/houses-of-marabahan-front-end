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

async function findHouseByName(name) {
    return await baseAPI.get(`/house/${name}`)
}

async function getKinds() {
    return await baseAPI.get('/kinds');
}

const api = {
    findHouseByName,
    signUp,
    getKinds
}
export default api;