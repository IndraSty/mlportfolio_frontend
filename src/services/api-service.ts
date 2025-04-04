import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const apiConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const BaseService = axios.create(apiConfig);

const ApiService = {
  async fetchData<Response = unknown, Request = Record<string, unknown>>(
    param: AxiosRequestConfig<Request>
  ): Promise<AxiosResponse<Response>> {
    try {
      param.headers = {
        ...param.headers,
        "X-API-KEY": API_KEY,
      };

      const response = await BaseService(param);
      return response;
    } catch (errors) {
      console.log(errors);
      return Promise.reject(errors);
    }
  },
};

export default ApiService;
