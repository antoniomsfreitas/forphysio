<template>
  <div class="test">
    <Gradient class="test__gradient" :direction="GradientDirections.BOTTOM_TOP" />
  </div>
</template>

<script setup lang="ts">
import { GradientDirections } from '~/models/layout/gradient.model';
</script>

<style scoped lang="scss">
.test {
  position: relative;
  width: 500px;
  height: 500px;
  background-color: $white;

  &__gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
  }
}
</style>
