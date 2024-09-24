<template>
  <LayoutGrid class="two-images-block">
    <LayoutGridRow>
      <LayoutGridCol v-for="highlight in data.highlights" :key="highlight.id" m="4" t="6">
        <CardUI class="two-images-block__item">
          <NuxtLink :to="localePath(highlight.cta.link)">
            <div class="two-images-block__item__image">
              <PictureImage
                :alt="highlight.image.alt"
                :src="highlight.image.mobile"
                :src-t="highlight.image.tablet"
                :src-d="highlight.image.desktop"
              />
            </div>

            <div class="two-images-block__item__content">
              <h3 class="two-images-block__item__content__title">{{ highlight.title }}</h3>
              <p class="two-images-block__item__content__description">{{ highlight.description }}</p>
              <span class="button button--tertiary">{{ highlight.cta.label }}</span>
            </div>
          </NuxtLink>

          <div class="two-images-block__item__gradient" />
        </CardUI>
      </LayoutGridCol>
    </LayoutGridRow>
  </LayoutGrid>
</template>

<script setup lang="ts">
import type { TwoImagesBlock } from '~/models/blocks/two-images-block.model';
const localePath = useLocalePath();

defineProps({
  data: {
    type: Object as PropType<TwoImagesBlock>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.two-images-block {
  @include mq-mobile {
    padding: 0;

    & > .layout-grid-row {
      grid-gap: 24px;
    }
  }

  &__item {
    position: relative;

    @include mq-mobile {
      border-radius: 0;
    }

    &__content {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      color: $white;
      text-align: center;

      @include mq-mobile {
        padding: 56px 24px;
      }

      @include mq-mobile-tablet {
        gap: 16px;
      }

      @include mq-tablet {
        padding: 45px 16px;
      }

      @include mq-desktop {
        gap: 24px;
        padding: 40px 90px;
      }

      &__title {
        @include mq-mobile {
          font-size: 24px;
        }
      }

      &__description {
        font-weight: $font-weight-light;
        line-height: 1.2;

        @include mq-mobile-tablet {
          font-size: 16px;
        }

        @include mq-desktop {
          font-size: 18px;
        }
      }

      .button {
        min-height: 40px;
        font-size: 18px;
        line-height: 1.2;
      }
    }

    &__gradient {
      @include gradient-overlay('bottom-top', 65);
    }
  }
}
</style>
