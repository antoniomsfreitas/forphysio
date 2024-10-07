<template>
  <div class="appointment-banner">
    <PictureImage
      :alt="data.image.alt"
      :src="data.image.mobile"
      :src-t="data.image.tablet"
      :src-d="data.image.desktop"
      cover
    />

    <div class="appointment-banner__gradient" />

    <div class="appointment-banner__content">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="6" d="6" start-col-t="4" start-col-d="4">
            <div class="appointment-banner__content__top">
              <h2>{{ $t('general.schedule-your-appointment') }}</h2>

              <Button type="secondary" @click="navigateTo(localePath(Routes.CONTACTS))">
                {{ $t('general.book-appointment') }}
              </Button>
            </div>
          </LayoutGridCol>
        </LayoutGridRow>

        <LayoutGridRow>
          <LayoutGridCol m="4" t="10" d="8" start-col-t="2" start-col-d="3">
            <div class="appointment-banner__content__bottom">
              <p>{{ $t('general.appointment-cancellation.legal-note') }}</p>
            </div>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BannerBlock } from '~/models/blocks.model';
import { Routes } from '~/models/routes.model';
const localePath = useLocalePath();

defineProps({
  data: {
    type: Object as PropType<BannerBlock>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
BannerBlock,
.appointment-banner {
  position: relative;
  @include mq-mobile-tablet {
    min-height: 650px;
  }

  @include mq-desktop {
    min-height: 850px;
  }

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
