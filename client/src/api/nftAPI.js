import * as request from './request';

const baseURL = 'http://localhost:3030/data/nftcolection';

const getAll = async () => {
   const data = Object.values(await request.get(baseURL));
   return data;
};

const getOneById = async (nftId) => request.get(`${baseURL}/${nftId}`);

const create = (nftData) =>  request.post(`${baseURL}`, nftData);

const deleteById = async (nftId) => request.del(`${baseURL}/${nftId}`);
 
const edit = async (nftId, nftData) => request.put(`${baseURL}/${nftId}`, nftData);

export default { getAll, getOneById, create, deleteById, edit };