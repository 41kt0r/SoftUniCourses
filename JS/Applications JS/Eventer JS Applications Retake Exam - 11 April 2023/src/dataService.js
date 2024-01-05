import { api } from "./api.js";

const dataEndpoints = {
    getAll: "data/events?sortBy=_createdOn%20desc",
    getSingle: 'data/events',
}

async function getAllEvents() {
    return api.get(dataEndpoints.getAll)
}

async function getSingleEvent(id) {
    return api.get(dataEndpoints.getSingle + "/" + id)
}

async function createEvent(data) {
    return api.post(dataEndpoints.getSingle, data)
}

async function updateEvent(id, data) {
    return api.put(dataEndpoints.getSingle + "/" + id, data)
}

async function delEvent(id) {
    return api.del(dataEndpoints.getSingle + "/" + id)
}

async function go(eventId) {
    return await api.post(`data/going`, eventId);
}

async function getTotalGoes(eventId) {
    return await api.get(`data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`);
}

async function didUserGo(eventId, userId) {
    return await api.get(`data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

export const dataService = {
    getAllEvents,
    createEvent,
    getSingleEvent,
    updateEvent,
    delEvent,
    go,
    getTotalGoes,
    didUserGo
}