<template>
  <div class="recruitment-block">
    <PictureImage
      :alt="$t('recruitment-block.title')"
      class="recruitment-block__image"
      src="/images/team/recruitment-block/image-mobile.jpg"
      src-t="/images/team/recruitment-block/image-tablet.jpg"
      src-d="/images/team/recruitment-block/image-desktop.jpg"
      cover
    />

    <div class="recruitment-block__gradient" />

    <div class="recruitment-block__content">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="8" d="6">
            <div class="recruitment-block__content__intro">
              <h2 class="recruitment-block__content__intro__title">
                {{ $t('recruitment-block.title') }}
              </h2>

              <p class="recruitment-block__content__intro__text">
                {{ $t('recruitment-block.subtitle') }}
              </p>

              <Button
                class="recruitment-block__content__intro__button"
                type="outline"
                @click="navigateTo(localePath(Routes.CONTACTS))"
              >
                {{ $t('recruitment-block.button') }}
              </Button>
            </div>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';
const localePath = useLocalePath();
</script>

<style scoped lang="scss">
.recruitment-block {
  position: relative;

  &__image {
    position: relative;
    z-index: 1;
  }

  &__gradient {
    @include mq-mobile {
      @include gradient-overlay('top-bottom', 92);
    }

    @include mq-tablet-desktop {
      @include gradient-overlay('left-right', 70);
    }
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;

    @include mq-mobile {
      top: 90px;
    }

    @include mq-tablet-desktop {
      height: 100%;
      display: flex;
      align-items: center;
    }

    &__intro {
      text-wrap: balance;

      @include mq-mobile {
        text-align: center;
      }

      &__title {
        line-height: 1.2;
        padding-bottom: 12px;

        @include mq-tablet {
          font-size: 48px;
        }
      }

      &__text {
        font-weight: $font-weight-light;
        line-height: 65px;
        line-height: 1.5;

        @include mq-mobile-tablet {
          font-size: 24px;
          padding-bottom: 24px;
        }

        @include mq-desktop {
          font-size: 32px;
          padding-bottom: 40px;
        }
      }

      &__button {
        min-width: 268px;
      }
    }
  }
}
</style>
