import axios from 'axios';

const baseAPI = axios.create({
  baseURL: 'http://localhost:5000',
});

function getConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function signUp(data) {
  await baseAPI.post('/sign-up', data);
}

async function signIn(data) {
  return await baseAPI.post('/sign-in', data);
}

async function findHouseByName(name) {
  return await baseAPI.get(`/house/${name}`);
}

async function getStorage(id) {
  return await baseAPI.get(`/house/${id}/storage`);
}

async function getKinds() {
  return await baseAPI.get('/kinds');
}

async function createItem(data) {
  await baseAPI.post('/items/create', data);
}

async function editItem(data, id) {
  await baseAPI.put(`/item/${id}/edit`, data);
}

async function getAllItems() {
  return await baseAPI.get('/items');
}

async function getItemByName(name) {
  return await baseAPI.get(`/item/${name}`);
}

async function getItemById(id) {
  return await baseAPI.get(`/item/${id}`);
}

async function moveToInventory(body) {
  console.log(body)
  await baseAPI.post('/move-to-inventory', body);
}
async function getInventory(characterId) {
  await baseAPI.get(`/character/${characterId}/get/inventory`)
}

async function createCharacter(data, id, token) {
  getConfig(token);
  await baseAPI.post(`/house/${id}/create/character`, data, token);
}

async function getActiveCharacter(id, token) {
  getConfig(token);
  return await baseAPI.get(`/house/${id}/get/active-character`, token);
}

async function setActiveCharacter(houseId, characterId, token) {
  getConfig(token);
  return await baseAPI.put(`/house/${houseId}/set/active-character`, { characterId }, token)
}

async function findCharactersByHouse(id) {
  return await baseAPI.get(`house/${id}/characters`);
}

async function getAllCategories() {
  return await baseAPI.get('/categories');
}

async function createCategory(data) {
  await baseAPI.post('/categories/create', data);
}

const api = {
  findHouseByName,
  signUp,
  signIn,
  getStorage,
  getKinds,
  createItem,
  editItem,
  getAllItems,
  getItemByName,
  getItemById,
  moveToInventory,
  getInventory,
  createCharacter,
  getActiveCharacter,
  setActiveCharacter,
  findCharactersByHouse,
  getAllCategories,
  createCategory,
};
export default api;
