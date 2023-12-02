import { REGISTER_USER, LOGIN_USER } from "./types";
import { request } from "../utils/axios";

const USER_URL = "/api/user"; // !!!!!!request url

export function registerUser(dataToSubmit) {
    const data = request("post", USER_URL + "/register", dataToSubmit);
  
    return {
      type: REGISTER_USER,
      payload: data,
    };
}

export function loginUser(dataToSubmit) {
    const data = request("post", USER_URL + "/login", dataToSubmit);
    return {
      type: LOGIN_USER,
      payload: data,
    };
}