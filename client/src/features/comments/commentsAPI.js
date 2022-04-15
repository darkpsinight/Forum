import { axiosInstance } from "../../config/axios";
import { requests } from "../../config/requests";

//post service
export const CommentsService = {

    // Create post request
    create: (data) => {
        console.log(data);
        return axiosInstance
            .post(requests.commentsapi.create, data, { credentials: "include" })
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err;
            });
    },
};