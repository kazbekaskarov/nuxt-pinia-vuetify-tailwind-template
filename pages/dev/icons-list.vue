<template>
  <div class="max-w-[500px] mx-auto w-100 min-h-screen p-5 grid grid-cols-3 gap-4">
    <div
      v-for="iconName in formattedIconNames"
      :key="iconName"
      class="p-2 flex items-center justify-center min-h-[70px] max-h-[70px] flex-col icon-list bg-[#ededed] rounded-[12px] hover:scale-[1.1] border-solid border-[1px] border-[#ededed] hover:border-[#2AA65C] duration-500 cursor-pointer"
      @click="copyIconName(iconName)"
    >
      <div class="flex-[1_1_auto] mb-1 flex items-center justify-center">
        <nuxt-icon :name="iconName" filled />
      </div>
      <span class="text-[14px]">{{ iconName }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: '001',
});
const serviceStore = useServiceStore();

const formattedIconNames = computed(() => {
  const folderCount: number = 1;
  const maxIconAmount: number = 2;
  const iconsNameList = [];
  for (let folder = 0; folder < folderCount; folder++) {
    for (let icon = 0; icon < maxIconAmount; icon++) {
      let folderName = folder + 1 < 10 ? `00${folder + 1}` : `0${folder + 1}`;
      let iconName = icon + 1 < 10 ? `00${icon + 1}` : `0${icon + 1}`;
      iconsNameList.push(`${folderName}/${iconName}`);
    }
  }
  return iconsNameList;
});

const copyIconName = (iconName: string) => {
  navigator.clipboard.writeText(iconName);
  serviceStore.toast.success(`Copied`);
};
</script>
<style>
.icon-list .nuxt-icon svg {
  max-width: 40px !important;
  max-height: 40px !important;
  min-height: 30px !important;
  min-width: 30px !important;
}
</style>
