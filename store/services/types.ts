import { api } from '~/api/api';
import { useToast } from 'vue-toastification';
import * as controllerTypes from '~/api/controllers/services/types';
import type { ModalTypes } from '~/components/ModalWindow.vue';
const toast = useToast();

export type ServiceStore = {
  api: typeof api.services;
  origin: string;
  toast: typeof toast;
  pageLoading: boolean;
  overlayLoading: boolean;
  JWT_TOKEN: string;

  modal: {
    type: ModalTypes;
    show: boolean;
    header: string;
    text?: string;
    buttonText: string;
    rowData?: { text: string; value: string }[];
    secondaryButtonText?: string;
    onClick: () => void;
    onClickSecondaryButton?: () => void;
  };
};
