import axiosService from "../commons/axiosService";

const END_POINT = "/budget";

export const get = () => {
  return axiosService.get(`${END_POINT}/get`);
};

export const edit = (data) => {
  return axiosService.post(`${END_POINT}/edit`, data);
};
