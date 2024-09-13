<template>
  <div class="container" :class="{ 'container--is-loaded': isLoaded }">
    <LayoutHeader :data="headerData" />
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const { data: layoutData, status } = await useAsyncData('page-layout', () => $fetch('/api/layout'));

const headerData = computed(() => layoutData.value?.header);
const isLoaded = computed(() => status.value === 'success');
</script>

<style scoped lang="scss">
.container {
  opacity: 0;
  transition: opacity 250ms ease-in;

  &--is-loaded {
    opacity: 1;
  }
}
</style>
