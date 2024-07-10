<template>
  <div class="layout-grid-col" v-bind="attributes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { type GridColumns } from '../../../models/layout/grid.model';

const props = defineProps({
  sm: {
    type: [Number, String] as PropType<GridColumns | 'hide'>,
  },
  md: {
    type: [Number, String] as PropType<GridColumns | 'hide'>,
  },
  lg: {
    type: [Number, String] as PropType<GridColumns | 'hide'>,
  },
  xl: {
    type: [Number, String] as PropType<GridColumns | 'hide'>,
  },
  startColSm: {
    type: [Number, String] as PropType<GridColumns | 'hide'>,
  },
  startColMd: {
    type: [Number, String] as PropType<GridColumns | 'hide'>,
  },
  startColLg: {
    type: [Number, String] as PropType<GridColumns | 'hide'>,
  },
  startColXl: {
    type: [Number, String] as PropType<GridColumns | 'hide'>,
  },
});

const attributes = computed(() => ({
  sm: props.sm,
  md: props.md,
  lg: props.lg,
  xl: props.xl,
  'start-col-sm': props.startColSm,
  'start-col-md': props.startColMd,
  'start-col-lg': props.startColLg,
  'start-col-xl': props.startColXl,
}));
</script>

<style lang="scss" scoped>
@each $mq in map-keys($breakpoints) {
  @include breakpoint-from($mq) {
    .layout-grid-col[#{$mq}='hide'] {
      display: none;
    }

    @for $i from 1 through 12 {
      .layout-grid-col[start-col-#{$mq}='#{$i}'] {
        grid-column-start: $i;
      }

      .layout-grid-col[#{$mq}='#{$i}'] {
        grid-column-end: span $i;
      }
    }
  }
}
</style>
