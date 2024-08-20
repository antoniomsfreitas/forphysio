<template>
  <div class="layout-grid-row">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  colNumberDesktop: {
    title: String,
    required: false,
    default: 12,
  },
  colNumberMobile: {
    title: String,
    required: false,
    default: 4,
  },
});
</script>

<style lang="scss" scoped>
$colNumberDesktop: v-bind(colNumberDesktop);
$colNumberMobile: v-bind(colNumberMobile);

.layout-grid-row {
  display: grid;

  @include breakpoint-to('t') {
    grid-template-columns: repeat($colNumberMobile, 1fr);
    grid-gap: 16px;
  }

  @include breakpoint-from('t') {
    grid-template-columns: repeat($colNumberDesktop, 1fr);
    grid-gap: 24px;
  }
}
</style>
