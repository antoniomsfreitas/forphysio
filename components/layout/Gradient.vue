<template>
  <div class="gradient" :class="`${direction}`" />
</template>

<script setup lang="ts">
import { GradientDirections } from '~/models/layout/gradient.model';

defineProps({
  direction: {
    type: String as PropType<GradientDirections>,
    default: GradientDirections.BOTTOM_TOP,
  },
});
</script>

<style scoped lang="scss">
.gradient {
  &.top-bottom {
    background: linear-gradient(180deg, $black 0%, rgb(0 0 0 / 0%) 100%);
  }

  &.bottom-top {
    background: linear-gradient(0deg, $black 0%, rgb(0 0 0 / 0%) 100%);
  }

  &.left-right {
    background: linear-gradient(90deg, $black 0%, rgb(0 0 0 / 0%) 100%);
  }

  &.right-left {
    background: linear-gradient(270deg, $black 0%, rgb(0 0 0 / 0%) 100%);
  }
}
</style>
