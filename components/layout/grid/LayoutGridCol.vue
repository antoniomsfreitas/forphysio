<template>
  <div class="layout-grid-col" v-bind="attributes">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { type GridColumns, type GridColumnsMobile } from '../../../models/layout/grid.model';

const props = defineProps({
  m: {
    type: [Number, String] as PropType<GridColumnsMobile | 'hide'>,
  },
  t: {
    type: [Number, String] as PropType<GridColumns | 'hide'>,
  },
  d: {
    type: [Number, String] as PropType<GridColumns | 'hide'>,
  },
  startColM: {
    type: String as PropType<GridColumnsMobile>,
  },
  startColT: {
    type: String as PropType<GridColumns>,
  },
  startColD: {
    type: String as PropType<GridColumns>,
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

<style lang="scss" scoped>
@mixin apply-grid-styles($breakpoint) {
  $grid-columns: 4;

  @include breakpoint-from('m') {
    $grid-columns: 12;
  }

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
  @each $breakpoint in map-keys($breakpoints) {
    @if $breakpoint == 'm' {
      @include apply-grid-styles($breakpoint);
    } @else {
      @include breakpoint-from($breakpoint) {
        @include apply-grid-styles($breakpoint);
      }
    }
  }
}
</style>
