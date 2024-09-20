<template>
  <div class="intro-block">
    <div class="intro-block__content">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="7" :d="props.contentColDesktop">
            <h1>{{ pageTitle }}</h1>
            <slot name="content" />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <div class="intro-block__image">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" start-col-t="4" t="9" start-col-d="5" d="8">
            <slot name="image" />
            <div class="intro-block__image__gradient-left" />
            <div class="intro-block__image__gradient-right" />
            <div class="intro-block__image__gradient-bottom" />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GridColumns } from '~/models/ui.model';

const props = defineProps({
  pageTitle: {
    type: String,
    required: true,
  },
  contentColDesktop: {
    type: String as PropType<GridColumns>,
    required: false,
    default: '5',
  },
});
</script>

<style scoped lang="scss">
.intro-block {
  position: relative;

  @include mq-mobile-tablet {
    padding-top: 190px;
  }

  @include mq-tablet {
    min-height: 650px;
  }

  @include mq-desktop {
    padding-top: 150px;
    min-height: 800px;
  }

  &__content {
    position: relative;
    z-index: 3;
    font-weight: $font-weight-light;
    line-height: 1.3;
    text-wrap: balance;

    @include mq-mobile {
      font-size: 18px;
    }

    @include mq-tablet {
      font-size: 20px;
    }

    @include mq-desktop {
      font-size: 24px;
    }

    h1 {
      margin-bottom: 40px;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .layout-grid {
      padding-right: 0;

      .layout-grid-col {
        position: relative;

        @include mq-mobile {
          height: 360px;
          overflow: hidden;
        }
      }
    }

    @include mq-mobile {
      &__gradient-left {
        @include gradient-overlay('left-right', 75);
      }

      &__gradient-bottom {
        @include gradient-overlay('bottom-top', 75);
      }
    }

    @include mq-tablet-desktop {
      &__gradient-left {
        @include gradient-overlay('left-right', 60);
      }

      &__gradient-bottom {
        @include gradient-overlay('bottom-top', 60);
      }
    }

    @include mq-desktop {
      &__gradient-right {
        @include gradient-overlay('right-left', 1);
      }
    }
  }
}
</style>
