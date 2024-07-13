<template>
  <div class="layout-grid-col" v-bind="{ ...attributes }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { GridColumns, GridColumnsMobile } from '../../../models/layout/ui.model';

const props = defineProps({
  m: {
    type: String as PropType<GridColumnsMobile | 'hide'>,
    default: undefined,
  },
  t: {
    type: String as PropType<GridColumns | 'hide'>,
    default: undefined,
  },
  d: {
    type: String as PropType<GridColumns | 'hide'>,
    default: undefined,
  },
  startColM: {
    type: String as PropType<GridColumnsMobile>,
    default: undefined,
  },
  startColT: {
    type: String as PropType<GridColumns>,
    default: undefined,
  },
  startColD: {
    type: String as PropType<GridColumns>,
    default: undefined,
  },
});

const attributes = computed(() => ({
  m: props.m,
  t: props.t,
  d: props.d,
  'start-col-m': props.startColM,
  'start-col-t': props.startColT,
  'start-col-d': props.startColD,
}));
</script>

<style scoped lang="scss">
@use 'sass:map';

@mixin apply-grid-styles($breakpoint, $grid-columns: 12) {
  &[#{$breakpoint}='hide'] {
    display: none;
  }

  @for $i from 1 through $grid-columns {
    &[start-col-#{$breakpoint}='#{$i}'] {
      grid-column-start: $i;
    }

    &[#{$breakpoint}='#{$i}'] {
      grid-column-end: span $i;
    }
  }
}

.layout-grid-col {
  @each $breakpoint in map.keys($breakpoints) {
    @if $breakpoint == 'm' {
      @include apply-grid-styles($breakpoint, 4);
    } @else {
      @include breakpoint-from($breakpoint) {
        @include apply-grid-styles($breakpoint);
      }
    }
  }
}
</style>
../../../models/layout/layout.model
