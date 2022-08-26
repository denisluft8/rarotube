import axios from "axios";
import getTokenFromLocalStorage from "../CustomHooks/tokenHook";

const apiAuth = axios.create();

apiAuth.defaults.baseURL = "https://44.199.200.211:3320";

apiAuth.interceptors.request.use(
  async (config: any) => {
    config.url = `${apiAuth.defaults.baseURL}/${config.url}`;
    const token = getTokenFromLocalStorage();
    if (token !== "") {
      config.headers.Authorizarion = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default apiAuth;
