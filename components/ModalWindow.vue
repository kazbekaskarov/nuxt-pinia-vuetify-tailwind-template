<template>
  <div
    class="flex fixed items-center justify-center z-[100] bg-[#00000069] left-0 top-0 w-full h-full"
  >
    <transition
      enter-active-class="animate__animated animate__zoomIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      appear
    >
      <div
        class="max-w-[290px] min-w-[290px] max-h-max rounded-[12px] bg-white px-4 pt-[40px] pb-4"
      >
        <div class="flex justify-center">
          <nuxt-icon filled :name="iconName" class="max-h-[100px]" />
        </div>
        <h1
          class="mt-4 mb-2 text-[#566681] leading-[20px] text-[16px] font-semibold text-center"
        >
          {{ header }}
        </h1>
        <p
          class="text-[#566681] text-[14px] font-medium mb-4 text-center"
          v-html="text"
        ></p>
        <div v-if="rowData && rowData.length" class="mb-5 w-full">
          <div
            v-for="row in rowData"
            class="flex items-center justify-between mb-2"
          >
            <p
              class="text-[#99A3B3] leading-[16px] text-[13px] font-medium text-start"
            >
              {{ row.text }}
            </p>
            <p
              class="text-[#071222] leading-[16px] text-[13px] font-medium text-end"
            >
              {{ row.value }}
            </p>
          </div>
        </div>
        <v-btn
          @click="$emit('onClick')"
          elevation="0"
          height="auto"
          class="!bg-[#EAF6EF] !rounded-[12px] px-2 mb-2 text-center py-4 font-semibold text-none w-full !text-[#2AA65C]"
          >{{ buttonText }}</v-btn
        >
        <v-btn
          v-if="secondaryButtonText"
          @click="$emit('onClickSecondaryButton')"
          elevation="0"
          height="auto"
          class="!rounded-[12px] px-2 text-center py-4 text-none w-full !text-[#2AA65C] font-bold"
          >{{ secondaryButtonText }}</v-btn
        >
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export type ModalTypes = "success" | "danger" | "warning";
export default defineComponent({
  props: {
    type: {
      type: String as PropType<ModalTypes>,
      required: false,
      default: "success",
    },
    header: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
    buttonText: {
      type: String,
      required: true,
    },
    secondaryButtonText: {
      type: String,
      required: false,
    },
    rowData: {
      type: Array as PropType<{ text: string; value: string }[]>,
      required: false,
    },
  },
  setup(props) {
    const iconName = computed(() => {
      const icons = {
        danger: "001/002",
        success: "001/001",
        warning: "001/002",
      };
      return icons[props.type];
    });

    return {
      iconName,
    };
  },
});
</script>
