import axiosService from "../commons/axiosService";

const END_POINT = "/auth";

export const login = (data) => {
  return axiosService.post(`${END_POINT}/login`, data);
};

export const register = (data) => {
  return axiosService.post(`${END_POINT}/register`, data);
};

export const logout = () => {
  return axiosService.post(`${END_POINT}/logout`);
};
