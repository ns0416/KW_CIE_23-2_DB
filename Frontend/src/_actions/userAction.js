import { REGISTER_USER, LOGIN_USER,IS_LOGGED } from "./types";
import { request } from "../utils/axios";
import axios from "axios";

const USER_URL = "/rest"; // !!!!!!request url

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

export function checkLogin() {
  const data = request("get", USER_URL + "/service/getUserInfo");
  //const data = axios.get(USER_URL + "/service/getUserInfo");
  return {
    type: IS_LOGGED,
    payload: data,
  };
}