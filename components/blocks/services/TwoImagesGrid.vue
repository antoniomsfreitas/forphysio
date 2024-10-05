<template>
  <div class="two-images-grid">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="6" d="6" class="two-images-grid__left">
          <CardUI>
            <PictureImage
              :alt="data.imageBig.alt"
              :src="data.imageBig.mobile"
              :src-t="data.imageBig.tablet"
              :src-d="data.imageBig.desktop"
              cover
            />
          </CardUI>
        </LayoutGridCol>
        <LayoutGridCol m="4" t="6" d="5" start-col-d="8" class="two-images-grid__right">
          <CardUI>
            <PictureImage
              class="image-fullwidth"
              :alt="data.imageSmall.alt"
              :src="data.imageSmall.mobile"
              :src-t="data.imageSmall.tablet"
              :src-d="data.imageSmall.desktop"
              cover
            />
          </CardUI>
          <div class="two-images-grid__right__content">
            <h2 v-if="data?.title" v-t="data.title" />
            <p v-if="data?.text" class="two-images-grid__right__content__text" v-html="data.text" />
            <ul v-if="data?.topics">
              <li v-for="topic in data.topics" :key="topic">
                <p v-html="topic"></p>
              </li>
            </ul>
          </div>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
import type { TwoImagesGridBlock } from '~/models/blocks.model';

defineProps({
  data: {
    type: Object as PropType<TwoImagesGridBlock>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.two-images-grid {
  @include mq-mobile {
    .layout-grid {
      padding: 0;
    }

    .layout-grid-row {
      grid-gap: 80px;
    }
  }

  &__left {
    .card {
      @include mq-mobile {
        border-radius: 0;
      }

      :deep(img) {
        @include mq-desktop {
          max-width: 767px;
        }

        @include mq-tablet {
          max-width: 596px;
        }

        @include mq-desktop {
          max-width: 708px;
        }
      }
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @include mq-mobile {
      gap: 80px;
      padding: 0 24px;
    }

    @include mq-tablet {
      gap: 94px;
    }

    @include mq-desktop {
      gap: 126px;
    }

    &__image {
      @include mq-tablet {
        height: 340px;
      }

      @include mq-desktop {
        height: 475px;
      }
    }

    &__content {
      &__text {
        padding-bottom: 24px;
      }

      h2 {
        margin-bottom: 40px;

        @include mq-mobile {
          font-size: 30px;
        }

        @include mq-tablet {
          font-size: 40px;
        }
      }

      p,
      ul li {
        font-weight: $font-weight-light;
        line-height: 1.2;
        color: $medium-grey;

        @include mq-mobile-tablet {
          font-size: 24px;
        }

        @include mq-desktop {
          font-size: 32px;
        }
      }

      p * {
        color: $white;
      }

      ul {
        li {
          display: flex;
          padding-bottom: 24px;

          &::before {
            content: '\2022';
            padding: 0 10px;
          }
        }
      }
    }
  }
}
</style>
