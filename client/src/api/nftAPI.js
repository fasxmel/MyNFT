import * as request from './request';


// move to constants file
const baseURL = 'http://localhost:3030/jsonstore/nftcolection';

const getAll = () => request.get(baseURL);


export default { getAll }