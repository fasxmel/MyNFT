import * as request from './request';

const baseURL = 'http://localhost:3030/data/nftcolection';


// TODO: manege the not otorizated user all Nfts
const getAll = async () => {
   const data = Object.values(await request.get(baseURL));
   return data;
};

const getOneById = async(nftId) => request.get(`${baseURL}/${nftId}`);


const create = (nftData) =>  request.post(`${baseURL}`, nftData);
 


export default { getAll, getOneById, create };