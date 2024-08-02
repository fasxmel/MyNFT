import * as request from "./request"

const baseUrl = "http://localhost:3030/data/comments";

const create = (nftId, text) => request.post(baseUrl, {nftId, text});

const getAll = (nftId) => {
    const result = request.get(baseUrl + `?where=nftId%3D%22${nftId}%22&sortBy=_createdOn%20desc`);
    console.log(result);
    return result;
}


export default { create, getAll };