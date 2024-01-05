import { api } from "./api.js";

const dataEndpoints = {
    getAll: "data/characters?sortBy=_createdOn%20desc",
    getSingleForCreate: "data/characters",
    getSingle: "data/characters/",

}

async function getAllCharacters() {
    return api.get(dataEndpoints.getAll)
}

async function createCharacter(data) {
    return api.post(dataEndpoints.getSingleForCreate, data)
}

async function getSingleGeroyche(id) {
    return api.get(dataEndpoints.getSingle + id)
}

async function deleteGeroyche(id) {
    return api.del(dataEndpoints.getSingle + id)
}

async function updateGeroyche(id,data) {
    return api.put(dataEndpoints.getSingle + id, data)
}

async function likeGeroyche(characterId) {
    return api.post("data/useful", {characterId})
}
 
async function getLikesByGeroyche(characterId) {
    return api.get(`data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`)
}

async function getMyLikesByGeroycheId(characterId, userId) {
    return api.get(`data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export const dataService = {
    getAllCharacters,
    createCharacter,
    getSingleGeroyche,
    deleteGeroyche,
    updateGeroyche,
    likeGeroyche,
    getLikesByGeroyche,
    getMyLikesByGeroycheId
}