import { axiosInstance } from "../../config/axios";
import { requests } from "../../config/requests";

//post service
export const PostsService = {
  // create request
  create: (data) => {
    return axiosInstance
      .post(requests.apipost.create, data, { credentials: "include" })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

};