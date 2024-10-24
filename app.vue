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

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-48x48-white.png',
      sizes: '48x48',
      media: '(prefers-color-scheme: dark)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/favicon-48x48.png',
      sizes: '48x48',
      media: '(prefers-color-scheme: light)',
    },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon-white.ico', media: '(prefers-color-scheme: dark)' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico', media: '(prefers-color-scheme: light)' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon-white.svg', media: '(prefers-color-scheme: dark)' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg', media: '(prefers-color-scheme: light)' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
  ],
  meta: [{ name: 'apple-mobile-web-app-title', content: 'ForPhysio' }],
});

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
    animation: 250ms forwards fade-in;
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
