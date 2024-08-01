<template>
  <BalancerProvider>
    <NuxtLayout v-if="isViewportLoaded">
      <NuxtPage />
    </NuxtLayout>
  </BalancerProvider>
</template>
