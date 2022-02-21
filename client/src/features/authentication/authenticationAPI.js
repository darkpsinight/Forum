import { axiosInstance } from "../../config/axios";
import { requests } from "../../config/requests";

//authentication service
export const AuthenticationService = {
  // register request
  register: (data) => {
    return axiosInstance
      .post(requests.register, data)
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
      .post(requests.login, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};
