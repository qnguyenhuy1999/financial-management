import axiosService from "../commons/axiosService";

const END_POINT = "/category";

export const get = () => {
  return axiosService.get(`${END_POINT}/get`);
};
