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
});
</script>

<style scoped lang="scss">
.image-fullwidth {
  :deep(img) {
    @include mq-mobile {
      max-width: 767px;
    }

    @include mq-tablet {
      max-width: 1279px;
    }

    @include mq-desktop {
      max-width: 1920px;
    }
  }
}
</style>
