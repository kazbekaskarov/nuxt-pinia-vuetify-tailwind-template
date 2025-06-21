import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin(nuxtApp => {
  const options = {
    transition: 'Vue-Toastification__fade',
    maxToasts: 3,
    newestOnTop: true,
    position: 'top-center',
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.1,
    showCloseButtonOnHover: true,
    hideProgressBar: true,
    closeButton: false,
    icon: true,
    rtl: false,
  };
  nuxtApp.vueApp.use(Toast, options);
});
