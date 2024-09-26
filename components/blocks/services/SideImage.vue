<template>
  <LayoutGrid class="side-image">
    <LayoutGridRow>
      <LayoutGridCol m="4" t="6" d="6">
        <CardUI class="side-image__image">
          <PictureImage
            :alt="data.image.alt"
            :src="data.image.mobile"
            :src-t="data.image.tablet"
            :src-d="data.image.desktop"
            cover
          />
        </CardUI>
      </LayoutGridCol>

      <LayoutGridCol m="4" t="6" d="5" start-col-d="8">
        <div class="side-image__content">
          <h2 v-t="data.title" />

          <p v-html="data.text" />
        </div>
      </LayoutGridCol>
    </LayoutGridRow>
  </LayoutGrid>
</template>

<script setup lang="ts">
import type { SideImageBlock } from '~/models/blocks.model';

defineProps({
  data: {
    type: Object as PropType<SideImageBlock>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.side-image {
  @include mq-mobile {
    padding: 0;

    .layout-grid-row {
      grid-gap: 80px;
    }
  }

  &__image {
    @include mq-mobile {
      border-radius: 0;
    }

    picture img {
      width: 100%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    @include mq-mobile {
      padding: 0 24px;
    }

    @include mq-mobile-tablet {
      gap: 40px;
    }

    @include mq-desktop {
      gap: 46px;
    }

    h2 {
      line-height: 1.2;

      @include mq-mobile {
        font-size: 30px;
      }

      @include mq-tablet {
        font-size: 40px;
      }
    }

    p {
      font-weight: $font-weight-light;
      line-height: 1.2;
      color: $medium-grey;

      @include mq-mobile-tablet {
        font-size: 24px;
      }

      @include mq-desktop {
        font-size: 36px;
      }

      * {
        color: $white;
      }
    }
  }
}
</style>
