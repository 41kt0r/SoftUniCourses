import { api } from "./api.js"

const dataEndpoints = {
    getAll: "data/products?sortBy=_createdOn%20desc",
    getSingle: "data/products/"
}

async function getAllProducts() {
    return api.get(dataEndpoints.getAll);
}

function getSingleProduct(id) {
    return api.get(dataEndpoints.getSingle + id);
}

function createProduct(data) {
    return api.post(dataEndpoints.getSingle, data)
}

async function delProduct(id) {
    return api.del(dataEndpoints.getSingle + id);
}

async function updateProduct(id, data) {
    return api.put(dataEndpoints.getSingle + id, data)
}

// bonus
//  async function buy(productId) {
//     return api.post('data/bought', {productId})
// }

//  async function getBuys(productId) {
//     return api.get(`data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`) 
// }

//  async function getOwnBuy(productId, userId) {
//     return api.get(`/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
// }
 


export const dataService = {
    getAllProducts,
    getSingleProduct,
    createProduct,
    delProduct,
    updateProduct,
    // buy,
    // getBuys,
    // getOwnBuy
}