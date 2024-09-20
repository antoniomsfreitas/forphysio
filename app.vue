<template>
  <NuxtLayout v-if="isViewportLoaded">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 250ms;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
