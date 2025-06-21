<template>
  <div class="p-4 max-w-[500px] mx-auto w-100 min-h-screen">
    <div class="p-4 border-[1px] border-dashed border-[black] rounded-[12px]">
      <form-input v-model="searchTerm" label="Search" />
      <p>Found: {{ routeList.length }}</p>
      <div v-for="(route, index) in routeList" :key="route.name">
        <div class="pt-5">
          <div class="border-solid border-[1px] border-[#2AA65C] text-[black] p-3 rounded-[12px]">
            <h2 class="font-semibold">Route path</h2>
            <p class="mb-2 break-words font-medium text-[14px]">{{ route.path }}</p>
          </div>
          <div
            class="flex justify-between items-center duration-700 transition-all overflow-hidden h-[0px] w-full opacity-0 scale-50"
            :class="{ '!h-[51px] opacity-100 !scale-100 mt-4 mb-5': showBlock }"
          >
            <p>
              Route name: <span class="font-bold text-[#2AA65C]">{{ route.name }}</span>
            </p>
            <form-button class="border-none outline-none rounded-[5px] text-[white]" text="Copy route name" @onClick="copyRouteName(route.name as string)"></form-button>
          </div>
        </div>
        <div v-if="routeList.length !== index + 1" class="h-[1px] bg-[#2AA65C] w-[0px] duration-700 transition-all" :class="{ '!w-full': showBlock }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: '002',
});
const searchTerm = ref<string>('');
const serviceStore = useServiceStore();
const router = useRouter();
const showBlock = ref(false);

onMounted(() => {
  setTimeout(() => {
    showBlock.value = true;
  }, 1000);
});

const copyRouteName = (routeName: string) => {
  navigator.clipboard.writeText(routeName);
  serviceStore.toast.success(`Copied ✅`);
};
const routeList = computed(() =>
  router.options.routes.filter(route => {
    return String(route.path).toLowerCase().match(searchTerm.value.toLowerCase()) || String(route.name).toLowerCase().includes(searchTerm.value.toLowerCase());
  }),
);
</script>
