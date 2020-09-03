import axios from "axios";

const API_ENDPOINT = "http://localhost:8080/api";
// const API_ENDPOINT = "https://financial-manage.herokuapp.com/api";

class AxiosService {
  constructor() {
    const token = JSON.parse(localStorage.getItem("profile"))?.token || "";
    //van gui token cu
    // cho nay em khong thay doi token khi logout -> loi // e cũng nghĩ v nhưng không biết để cho nào cho hợp lý ạ
    const instance = axios.create({
      baseURL: API_ENDPOINT,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  updateToken(token) {
    this.instance.defaults.headers.Authorization = `Bearer ${token}`;
    return this;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }
}

export default new AxiosService();
