import * as request from './request';


// move to constants file
//const baseURL = 'http://localhost:3030/jsonstore/nftcolection';
const baseURL = 'http://localhost:3030/data/nftcolection';
const getAll = async () => {
  const data = Object.values(await request.get(baseURL));
  return data;
};

const getOneById = async(nftId) => request.get(`${baseURL}/${nftId}`);


const create = (nftData) =>  request.post(`${baseURL}`, nftData);
 


export default { getAll, getOneById, create };