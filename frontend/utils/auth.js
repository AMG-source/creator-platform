import API from "./api";

export const signup = async (userData) => API.post("/auth/signup", userData);
export const login = async (userData) => API.post("/auth/login", userData);