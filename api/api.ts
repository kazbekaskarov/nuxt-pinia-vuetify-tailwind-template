import axios from 'axios';
import { type AxiosInstance } from 'axios';
import * as controller from './index';

class Api {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: getBaseUrl(),
    });

    this.instance.interceptors.request.use(request => {
      if (localStorage['JWT_TOKEN']) {
        request.headers.Authorization = `Bearer ${localStorage['JWT_TOKEN']}`;
      }
      request.baseURL = getBaseUrl();
      request.params = {
        ...request.params,
      };
      return request;
    });
    this.services = new controller.services.ServiceApi(this.instance);
  }
  services: controller.services.ServiceApi;

}

export const api = new Api();

export function getBaseUrl() {
  return import.meta.env.VITE_BASE_URL;
}

