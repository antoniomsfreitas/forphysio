<template>
  <div class="appointment-banner">
    <PictureImage
      :alt="$t('appointment-banner.title')"
      src="/images/services/detail/appointment-banner/fisioterapia-musculo-esqueletica/image-mobile.jpg"
      src-t="/images/services/detail/appointment-banner/fisioterapia-musculo-esqueletica/image-tablet.jpg"
      src-d="/images/services/detail/appointment-banner/fisioterapia-musculo-esqueletica/image-desktop.jpg"
      cover
    />

    <div class="appointment-banner__gradient" />

    <div class="appointment-banner__content">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="6" d="6" start-col-t="4" start-col-d="4">
            <div class="appointment-banner__content__top">
              <h2 v-t="'general.schedule-your-appointment'" />

              <Button
                type="secondary"
                @click="navigateTo(localePath(Routes.CONTACTS))"
                v-t="'general.book-appointment'"
              />
            </div>
          </LayoutGridCol>
        </LayoutGridRow>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="10" d="8" start-col-t="2" start-col-d="3">
            <div class="appointment-banner__content__bottom">
              <p v-t="'general.appointment-cancellation.legal-note'" />
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
.appointment-banner {
  position: relative;

  :deep(picture) img {
    @include mq-mobile-tablet {
      height: 650px;
    }

    @include mq-desktop {
      height: 850px;
    }
  }

  &__gradient {
    @include gradient-overlay('bottom-top', 75);
  }

  &__content {
    position: absolute;
    left: 0;
    z-index: 3;
    width: 100%;
    text-align: center;

    @include mq-mobile {
      bottom: 50px;
    }

    @include mq-tablet-desktop {
      bottom: 60px;
    }

    &__top {
      &,
      h2 {
        margin-bottom: 40px;
      }

      h2 {
        @include mq-mobile {
          font-size: 40px;
        }

        @include mq-tablet {
          font-size: 60px;
        }

        @include mq-desktop {
          font-size: 84px;
        }
      }

      button {
        min-width: 270px;
      }
    }

    &__bottom {
      p {
        font-size: 12px;
        line-height: 1.4;
        color: $medium-grey;
      }
    }
  }
}
</style>
