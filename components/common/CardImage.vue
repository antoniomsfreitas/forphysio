<template>
  <div class="card">
    <slot />
    <div v-if="showGradient" class="gradient" :style="{ height: `${gradientHeightPercent}%` }" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  showGradient: {
    type: Boolean,
    default: false,
  },
  gradientHeightPercent: {
    type: Number,
    default: 100,
    validator: (value: number) => value >= 1 && value <= 100, // Validador para valores entre 1 e 100,
  },
});
</script>

<style scoped lang="scss">
.card {
  position: relative;
  overflow: hidden;
  border-radius: 15px;

  :deep(img) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, #000 100%);
  }
}
</style>
