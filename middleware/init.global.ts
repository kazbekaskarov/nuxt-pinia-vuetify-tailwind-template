export default defineNuxtRouteMiddleware(async to => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, 1);
});
