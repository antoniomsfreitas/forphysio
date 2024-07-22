<template>
  <picture>
    <source v-if="srcM" :media="getImageMediaQuery(Breakpoints.MOBILE)" :srcset="srcM" >
    <source v-if="srcT" :media="getImageMediaQuery(Breakpoints.TABLET)" :srcset="srcT" >
    <source v-if="srcD" :media="getImageMediaQuery(Breakpoints.DESKTOP)" :srcset="srcD" >
    <img :src="src" :alt="alt" >
  </picture>
</template>

<script setup lang="ts">
import { Breakpoints } from '~/models/ui/ui.model';

const getImageMediaQuery = (breakpoint: Breakpoints) => {
  switch (breakpoint) {
    case Breakpoints.MOBILE: {
      const maxMobile = Breakpoints.TABLET - 1;

      return `(max-width: ${maxMobile}px)`;
    }

    case Breakpoints.TABLET: {
      const minTablet = Breakpoints.TABLET;
      const maxTablet = Breakpoints.DESKTOP - 1;

      return `(min-width: ${minTablet}px AND max-width: ${maxTablet}px)`;
    }

    default: {
      const minDesktop = Breakpoints.DESKTOP;

      return `(min-width: ${minDesktop}px)`;
    }
  }
};

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  srcM: {
    type: String,
    default: '',
  },
  srcT: {
    type: String,
    default: '',
  },
  srcD: {
    type: String,
    default: '',
  },
});
</script>

<style scoped lang="scss">
picture {
  display: block;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
