<template>
  <div>Start point</div>
</template>

<script setup lang="ts">
definePageMeta({
  name: '003',
});
const serviceStore = useServiceStore();

onMounted(() => {
  serviceStore.toast.success('Start point');
  serviceStore.modal.type = 'danger';
  serviceStore.modal.header = 'Тест';
  serviceStore.modal.text = 'Тест';
  serviceStore.modal.buttonText = 'Тест';
  serviceStore.modal.onClick = () => {
    serviceStore.toast.success('Кнопка нажата');
    serviceStore.modal.show = false;
  };
  serviceStore.modal.show = true;
});
</script>
