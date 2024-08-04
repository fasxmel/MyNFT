import * as request from "./request"

const baseUrl = "http://localhost:3030/data/comments";

const create = (nftId, text) => request.post(baseUrl, {nftId, text});

const getAll = (nftId) => {
    const params = new URLSearchParams({
        where: `nftId="${nftId}"`,
        load: `author=_ownerId:users`
    });

    // const result = request.get(baseUrl + `?where=nftId%3D%22${nftId}%22&sortBy=_createdOn%20desc`);
   
    return request.get(baseUrl + `?${params.toString()}`);
}


export default { create, getAll };