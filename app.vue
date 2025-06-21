<template>
  <div>
    <NuxtLayout>
      <NuxtPage page-key="static" />
    </NuxtLayout>

    <transition enter-active-class="animate__animated animate__fadeIn animate__fast" leave-active-class="animate__animated animate__fadeOut animate__fast">
      <modal-window
        v-if="$serviceStore.modal.show"
        :button-text="$serviceStore.modal.buttonText"
        :secondary-button-text="$serviceStore.modal.secondaryButtonText"
        :type="$serviceStore.modal.type"
        :row-data="$serviceStore.modal.rowData"
        :text="$serviceStore.modal.text"
        :header="$serviceStore.modal.header"
        @onClick="$serviceStore.modal.onClick"
        @onClickSecondaryButton="$serviceStore.modal.onClickSecondaryButton"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const serviceStore = useServiceStore();
const i18n = useI18n();
const handleSwipe = () => {
  if (serviceStore.navigation.returnBack) {
    serviceStore.navigation.onClick();
  }
};
onMounted(async () => {
  validateRouteNames();
});

const validateRouteNames = () => {
  const routeList = router.options.routes;
  const numeratedRouteNames: number[] = [];
  let invalidRoute = false;
  const uniqueRoutes: string[] = [];
  const duplicates = [];
  for (let i = 0; i < routeList.length; i++) {
    if (isNaN(Number(routeList[i].name))) {
      invalidRoute = true;
      console.error(`Route '${routeList[i].name as string}' is not a valid route name`);
    } else {
      numeratedRouteNames.push(Number(routeList[i].name));
    }

    if (uniqueRoutes.includes(routeList[i].name as string)) {
      duplicates.push(routeList[i].name);
    } else {
      uniqueRoutes.push(routeList[i].name as string);
    }
  }
  if (duplicates.length) {
    serviceStore.toast.error(`Duplicate route names found: ${duplicates.join(', ')}`);
  }
  numeratedRouteNames.sort((a, b) => {
    return a - b;
  });
  if (invalidRoute === false) return;
  for (let i = 0; i < numeratedRouteNames.length; i++) {
    const prevItem = numeratedRouteNames[i];
    const nextItem = numeratedRouteNames[i + 1];
    if (prevItem + 1 !== nextItem) {
      serviceStore.toast.success(`${prevItem + 1} is available`);
      break;
    }
  }
};
</script>
