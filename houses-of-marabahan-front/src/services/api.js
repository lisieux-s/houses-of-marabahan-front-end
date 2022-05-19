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

async function signIn(data) {
    return await baseAPI.post('/sign-in', data);
}

async function findHouseByName(name) {
    return await baseAPI.get(`/house/${name}`)
}

async function getKinds() {
    return await baseAPI.get('/kinds');
}

async function getItemByName(name) {
    return await baseAPI.get(`item/${name}`);
}

async function getItemById(id) {
    return await baseAPI.get(`item/id/${id}`)
}

const api = {
    findHouseByName,
    signUp,
    signIn,
    getKinds,
    getItemByName,
    getItemById
}
export default api;