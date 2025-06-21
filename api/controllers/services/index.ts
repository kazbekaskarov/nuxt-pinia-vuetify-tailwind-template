import { type AxiosInstance } from 'axios';
import * as types from './types';

export class ServiceApi {
  private request: AxiosInstance;

  constructor(request: AxiosInstance) {
    this.request = request;
  }
}

