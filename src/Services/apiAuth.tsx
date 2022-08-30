import axios from "axios";
import getTokenFromLocalStorage from "../CustomHooks/tokenHook";


const apiAuth = axios.create({
  baseURL: 'https://44.199.200.211:3320/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getTokenFromLocalStorage()}`
  }
})

export default apiAuth;
