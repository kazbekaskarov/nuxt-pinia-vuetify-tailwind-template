import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
import { type RouteLocationNormalized } from 'vue-router';
import * as types from '~/api/controllers/services/types';
import { type ServiceStore } from './types';
import { api } from '~/api/api';

export const useServiceStore = defineStore({
  id: 'service',
  state: (): ServiceStore => ({
    api: api.services,
    origin: import.meta.env.VITE_BASE_URL,
    toast: useToast(),
    pageLoading: false,
    overlayLoading: false,
    JWT_TOKEN: '',
    modal: {
      type: 'success',
      show: false,
      header: '',
      text: '',
      rowData: [],
      buttonText: '',
      secondaryButtonText: '',
      onClick: () => {},
      onClickSecondaryButton: () => {},
    },
  }),
  getters: {
  },
  actions: {

  },
});

