import axiosService from "../commons/axiosService";

const END_POINT = "/transaction";

export const get = () => {
  return axiosService.get(`${END_POINT}/get`);
};

export const create = (data) => {
  return axiosService.post(`${END_POINT}/create`, data);
};
