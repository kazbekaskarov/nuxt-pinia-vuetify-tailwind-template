import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import Maska from 'maska';

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: false,
    components: {
      ...components,
    },
    directives,
    defaults: {
      VForm: {
        validateOn: 'lazy',
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.use(Maska);
});
