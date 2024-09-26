<template>
  <PictureImage
    class="image-fullwidth"
    :alt="data.image.alt"
    :src="data.image.mobile"
    :src-t="data.image.tablet"
    :src-d="data.image.desktop"
    cover
  />
</template>

<script setup lang="ts">
import type { ImageFullwidthBlock } from '~/models/blocks.model';

defineProps({
  data: {
    type: Object as PropType<ImageFullwidthBlock>,
    required: true,
  },
  heightMobile: {
    type: Number,
    required: true,
  },
  heightTablet: {
    type: Number,
    required: true,
  },
  heightDesktop: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.image-fullwidth {
  :deep(img) {
    @include mq-mobile {
      height: v-bind('`${heightMobile}px`');
    }

    @include mq-tablet {
      height: v-bind('`${heightTablet}px`');
    }

    @include mq-desktop {
      height: v-bind('`${heightDesktop}px`');
    }
  }
}
</style>
