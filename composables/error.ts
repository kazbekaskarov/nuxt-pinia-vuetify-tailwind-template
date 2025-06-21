import axios from 'axios';

export const handleAxiosError = async (error: any) => {
  const serviceStore = useServiceStore();
  if (axios.isAxiosError(error)) {
    let message = error.response?.data?.message;
    serviceStore.toast.error(message ?? 'На сервере произошла ошибка');
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('JWT_TOKEN');
      // navigate to some page :)
    }
  }
  console.error(error);
  serviceStore.overlayLoading = false;
};
