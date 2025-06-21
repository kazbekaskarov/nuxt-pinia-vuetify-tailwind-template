export default defineNuxtPlugin(() => {
    const serviceStore = useServiceStore();
  
    return {
      provide: {
        serviceStore,
      },
    };
  });
  