import * as request from "./request";

const baseUrl = "http://localhost:3030/users";

export const login = (email, password) => request.post(`${baseUrl}/login`, { email, password });

export const register = (email, password, username) => request.post(`${baseUrl}/register`, { email, password, username });
