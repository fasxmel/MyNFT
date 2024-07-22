import * as request from "./request"

const baseUrl = "http://localhost:3030/jsonstore/nftcolection";

const create = (nftId, username, text) => request.post(`${baseUrl}/${nftId}/comments`, {username, text});

const getAll = async (nftId) => {
    const result = await request.get(`${baseUrl}/${nftId}/comments`);

    const nftComments = Object.values(result);
    return nftComments;
}


export default { create, getAll };