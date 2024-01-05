import { api } from "./api.js"

const dataEndpoints = {
    getAll: "/data/facts?sortBy=_createdOn%20desc", 
    singleFact: "/data/facts/"
}

async function getAllFacts() {
    return api.get(dataEndpoints.getAll)
}

async function createFact(data) {
    return api.post(dataEndpoints.singleFact, data)
}

async function getSingleFact(id) {
    return api.get(dataEndpoints.singleFact + id)
}

async function delFact(id) {
    return api.del(dataEndpoints.singleFact + id)
}

async function updateFact(id, data) {
    return api.put(dataEndpoints.singleFact + id, data)
}

export const dataService = {
    getAllFacts,
    createFact,
    getSingleFact,
    delFact,
updateFact
}