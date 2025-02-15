import { BACKEND_URL } from "./env";

//AUTH ENDPOINTS
export const API_URL = BACKEND_URL + "/api";
export const REGISTER_URL = API_URL + "/auth/register";
export const LOGIN_URL = API_URL + "/auth/login";

//PROJECT ENDPOINTS
export const PROJECT_URL = API_URL + "/project";
export const CREATE_PROJECT_URL = PROJECT_URL + "/";
export const GET_ALL_PROJECT_URL = PROJECT_URL + "/";
export const GET_PROJECT_URL = PROJECT_URL + "/";
