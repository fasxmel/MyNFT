import * as request from "./request";

const baseUrl = "http://localhost:3030/jsonstore/users";

export const login = (loginData) => request.post(`${baseUrl}/login`, loginData);
