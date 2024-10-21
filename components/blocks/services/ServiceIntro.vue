<template>
  <div class="service-intro__wrapper">
    <div class="service-intro">
      <div class="service-intro__image">
        <PictureImage
          :alt="data.image.alt"
          :src="data.image.mobile"
          :src-t="data.image.tablet"
          :src-d="data.image.desktop"
          cover
        />

        <div class="service-intro__gradient" />
      </div>

      <div class="service-intro__content">
        <LayoutGrid>
          <LayoutGridRow>
            <LayoutGridCol m="4" t="8" d="10" start-col-t="3" start-col-d="2">
              <h1 v-text="data.title" />

              <NuxtLink :to="localePath(Routes.CONTACTS)">
                <Button type="outline">{{ $t('general.book-evaluation') }}</Button>
              </NuxtLink>
            </LayoutGridCol>
          </LayoutGridRow>
        </LayoutGrid>
      </div>
    </div>

    <LayoutGrid>
      <LayoutGridRow class="intro-text">
        <LayoutGridCol m="4" t="8" d="8" start-col-t="3" start-col-d="3">
          <p v-text="data.text" />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
import type { IntroBlock } from '~/models/blocks.model';
import { Routes } from '~/models/routes.model';

defineProps({
  data: {
    type: Object as PropType<IntroBlock>,
    required: true,
  },
});

const localePath = useLocalePath();
</script>

<style scoped lang="scss">
.service-intro {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @include mq-mobile-tablet {
    min-height: 650px;
  }

  @include mq-desktop {
    padding-top: 150px;
    min-height: 800px;
  }

  &__content {
    position: relative;
    z-index: 3;
    text-align: center;

    h1 {
      margin-bottom: 40px;

      @include mq-mobile {
        font-size: 40px;
      }
    }

    button {
      margin-bottom: 40px;
      width: 100%;
      max-width: 350px;

      @include mq-tablet-desktop {
        margin-bottom: 50px;
      }
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    :deep(img) {
      @include mq-mobile-tablet {
        height: 650px;
      }

      @include mq-desktop {
        height: 800px;
      }
    }
  }

  &__gradient {
    @include mq-mobile {
      @include gradient-overlay('bottom-top', 90);
    }

    @include mq-tablet {
      @include gradient-overlay('bottom-top', 73);
    }

    @include mq-desktop {
      @include gradient-overlay('bottom-top', 80);
    }
  }
}

.intro-text p {
  font-weight: $font-weight-light;
  line-height: 1.4;
  text-align: center;
  margin-top: 60px;

  @include mq-mobile-tablet {
    font-size: 18px;
    margin-top: 40px;
  }

  @include mq-desktop {
    font-size: 28px;
  }
}
</style>
