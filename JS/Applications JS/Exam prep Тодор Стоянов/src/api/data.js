import { del, get, post, put } from "./api.js";

const endpoints = {
    'albums': "/data/albums",
    'getAllAlbums': "/data/albums?sortBy=_createdOn%20desc&distinct=name",
    'singleAlbum': "/data/albums/",
    'search': "/data/albums?where=name"
}

export async function createAlbum(data) {
    return post(endpoints.albums, data);
}

export async function getAllAlbums() {
    return get(endpoints.getAllAlbums)
}

export async function getdetailsById(id) {
    return get(endpoints.singleAlbum + id);
}

export async function deleteAlbumById(id) {
    return del(endpoints.singleAlbum + id); 
}

export async function updateAlbum(id, data) {
    return put(endpoints.singleAlbum + id, data);
}

// /data/albums?where=name%20LIKE%20%22${query}%22
export async function searchAlbum(query) {
    return get(`/data/albums?where=name%20LIKE%20%22${query}%22`)
}