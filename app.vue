<template>
  <div class="app" :class="{ 'app--is-loaded': isAppReady }">
    <NuxtLayout @on-data-loaded="handleLayoutDataLoaded">
      <NuxtPage @on-data-loaded="handlePageDataLoaded" />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const isLayoutDataLoaded = ref(false);
const isPageDataLoaded = ref(false);
const isAppReady = computed(() => isLayoutDataLoaded.value && isPageDataLoaded.value);

const handleLayoutDataLoaded = () => {
  isLayoutDataLoaded.value = true;
};

const handlePageDataLoaded = () => {
  isPageDataLoaded.value = true;
};
</script>

<style scoped lang="scss">
.app {
  opacity: 0;

  &--is-loaded {
    animation: 250ms forwards fadeIn;
  }
}
</style>

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
