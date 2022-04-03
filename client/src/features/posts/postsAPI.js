import { axiosInstance } from "../../config/axios";
import { requests } from "../../config/requests";

//post service
export const PostsService = {

  // Create post request
  create: (data) => {
    console.log(data);
    return axiosInstance
      .post(requests.postapi.create, data, { credentials: "include" })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },

  // Get all posts request
  getPosts: () => {
    return axiosInstance
      .get(requests.postapi.getAll, { credentials: "include" })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
};