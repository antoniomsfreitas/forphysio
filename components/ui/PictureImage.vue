<template>
  <picture :class="cover ? 'cover' : 'default'">
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

      return `(min-width: ${minTablet}px) and (max-width: ${maxTablet}px)`;
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
  cover: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
picture {
  overflow: hidden;

  img {
    display: block;
  }

  &.default {
    display: block;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &.cover {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
