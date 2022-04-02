import { axiosInstance } from "../../config/axios";
import { requests } from "../../config/requests";

//authentication service
export const AuthenticationService = {
  // register request
  register: (data) => {
    return axiosInstance
      .post(requests.userapi.register, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  // login request
  login: (data) => {
    return axiosInstance
      .post(requests.userapi.login, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  // logout request
  logout: () => {
    return axiosInstance
      .post(requests.userapi.logout, { credentials: "include" })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  // getMe request
  getMe: () => {
    return axiosInstance
      .get(requests.userapi.getme, { credentials: "include" })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  // uploadAvatar request
  uploadAvatar: (data) => {
    return axiosInstance
      .put(requests.userapi.avatar, data, { credentials: "include" })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  // update request
  update: (data) => {
    return axiosInstance
      .put(requests.userapi.update, data, { credentials: "include" })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

};