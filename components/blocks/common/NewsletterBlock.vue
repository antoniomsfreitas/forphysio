<template>
  <div class="newsletter-block">
    <PictureImage
      class="newsletter-block__image"
      :alt="data.image.alt"
      :src="data.image.mobile"
      :src-t="data.image.tablet"
      :src-d="data.image.desktop"
      cover
    />

    <div class="newsletter-block__gradient" />

    <div class="newsletter-block__content">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" d="10" t="12" start-col-d="2">
            <div class="newsletter-block__content__intro">
              <h3 class="newsletter-block__content__intro__title">{{ data.title }}</h3>
              <p class="newsletter-block__content__intro__text">{{ data.intro }}</p>
            </div>

            <div class="newsletter-block__content__form form">
              <div class="input-container">
                <input type="text" placeholder="exemplo@email.com" >
              </div>

              <button v-t="'general.subscribe'" type="submit" class="button button--primary" />
            </div>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NewsletterBlock } from '~/models/blocks/newsletter-block';

defineProps({
  data: {
    type: Object as PropType<NewsletterBlock>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.newsletter-block {
  position: relative;

  &__image {
    position: relative;
    z-index: 1;
  }

  &__gradient {
    @include mq-mobile {
      @include gradient-overlay('left-right', 92);
    }

    @include mq-tablet-desktop {
      @include gradient-overlay('left-right', 70);
    }
  }

  &__content {
    position: absolute;
    left: 0;
    z-index: 3;
    width: 100%;

    @include mq-mobile {
      top: 125px;
    }

    @include mq-tablet {
      top: 90px;
    }

    @include mq-desktop {
      top: 100px;
    }

    .layout-grid-col {
      display: flex;

      @include mq-mobile {
        flex-direction: column;
        gap: 70px;
        align-items: center;
        text-align: center;
      }

      @include mq-tablet-desktop {
        justify-content: space-between;
      }
    }

    &__intro {
      @include mq-tablet {
        padding-right: 40px;
      }

      &__title {
        line-height: 1.2;

        @include mq-mobile {
          margin-bottom: 20px;
        }

        @include mq-tablet-desktop {
          margin-bottom: 40px;
        }
      }

      &__text {
        font-size: 18px;
        font-weight: $font-weight-light;
        line-height: 1.5;
      }
    }

    &__form {
      width: 100%;
      max-width: 390px;
    }
  }
}
</style>
