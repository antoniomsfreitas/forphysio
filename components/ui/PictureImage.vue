<template>
  <picture :class="cover ? 'cover' : 'default'">
    <source v-if="srcM" :media="getImageMediaQuery(Breakpoints.MOBILE)" :srcset="srcM" />
    <source v-if="srcT" :media="getImageMediaQuery(Breakpoints.TABLET)" :srcset="srcT" />
    <source v-if="srcD" :media="getImageMediaQuery(Breakpoints.DESKTOP)" :srcset="srcD" />
    <source v-if="srcD_2K" :media="getImageMediaQuery(Breakpoints.DESKTOP_2K)" :srcset="srcD_2K" />
    <source v-if="srcD_4K" :media="getImageMediaQuery(Breakpoints.DESKTOP_4K)" :srcset="srcD_4K" />

    <img :src="src" :alt="alt" />
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

    case Breakpoints.DESKTOP: {
      const minDesktop = Breakpoints.DESKTOP;

      if (props.srcD_2K) {
        const maxDesktop = Breakpoints.DESKTOP_FHD;
        return `(min-width: ${minDesktop}px) and (max-width: ${maxDesktop}px)`;
      }

      return `(min-width: ${minDesktop}px)`;
    }

    case Breakpoints.DESKTOP_2K: {
      const minDesktop_2K = Breakpoints.DESKTOP_FHD + 1;
      const maxDesktop_2K = Breakpoints.DESKTOP_2K;

      return `(min-width: ${minDesktop_2K}px) and (max-width: ${maxDesktop_2K}px)`;
    }

    case Breakpoints.DESKTOP_4K: {
      const minDesktop_4K = Breakpoints.DESKTOP_2K + 1;

      return `(min-width: ${minDesktop_4K}px)`;
    }
  }
};

const props = defineProps({
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
  srcD_2K: {
    type: String,
    default: '',
  },
  srcD_4K: {
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
