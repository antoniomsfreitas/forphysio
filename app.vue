<template>
  <BalancerProvider>
    <NuxtLayout v-if="isViewportLoaded">
      <NuxtPage />
    </NuxtLayout>
  </BalancerProvider>
</template>

<script setup>
import { BalancerProvider } from 'vue-wrap-balancer';
</script>
