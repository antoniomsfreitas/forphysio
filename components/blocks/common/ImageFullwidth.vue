<template>
  <PictureImage
    class="image-fullwidth"
    :alt="data.alt"
    :src="data.mobile"
    :src-t="data.tablet"
    :src-d="data.desktop"
    cover
  />
</template>

<script setup lang="ts">
import type { Image } from '~/models/blocks.model';

defineProps({
  data: {
    type: Object as PropType<Image>,
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
