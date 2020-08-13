import axiosService from "../commons/axiosService";

const END_POINT = "/currency";

export const get = () => {
  return axiosService.get(`${END_POINT}/get`);
};
