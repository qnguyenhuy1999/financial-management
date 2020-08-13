import axios from "axios";

const API_ENDPOINT = "http://localhost:8080/api";

class AxiosService {
  constructor() {
    const token = JSON.parse(localStorage.getItem("profile"))?.token || "";
    //login reload lai logout moi khong bi loi
    const instance = axios.create({
      baseURL: API_ENDPOINT,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
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
