import * as request from './request';


// move to constants file
const baseURL = 'http://localhost:3030/jsonstore/nftcolection';

const getAll = async() => {
  const data = Object.values(await request.get(baseURL));
  return data;
};

const getOneById = async(id) => {
  const data = await request.get(`${baseURL}/${id}`);
  return data;
};

const create = async (nftData) => {
  const data = await request.post(baseURL, nftData);
  return nftData;
};

export default { getAll, getOneById, create };