<template>
  <div v-if="$serviceStore.pageLoading" class="flex items-center justify-center min-h-screen fixed w-full h-full top-0 left-0 z-[1001] bg-[#f7f7f7]">
    <v-progress-circular color="#2AA65C" indeterminate></v-progress-circular>
  </div>
  <transition leave-active-class="animate__animated animate__fadeOut animate__faster" enter-active-class="animate__animated animate__fadeIn animate__faster">
    <div v-if="$serviceStore.overlayLoading" class="min-h-screen fixed w-full h-full top-0 left-0 z-[1000] bg-[#fdfdfd69]">
      <v-progress-linear :active="true" :indeterminate="true" color="#2AA65C" :striped="true" absolute bottom></v-progress-linear>
    </div>
  </transition>
  <slot></slot>
</template>
