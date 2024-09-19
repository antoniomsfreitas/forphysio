<template>
  <div class="hero-banner">
    <Swiper
      class="hero-banner__slideshow"
      :speed="600"
      :space-between="1"
      :slides-per-view="1"
      :modules="[SwiperAutoplay, SwiperScrollbar]"
      :autoplay="{ delay: 4000, disableOnInteraction: true }"
      :scrollbar="{ draggable: true, el: '.hero-banner__content__info__scrollbar' }"
    >
      <SwiperSlide v-for="slide in heroBannerSliders" :key="slide.id" class="hero-banner__slideshow__slide">
        <PictureImage
          class="hero-banner__slideshow__slide__image"
          :alt="slide.alt"
          :src="slide.imageMobile"
          :src-t="slide.imageTablet"
          :src-d="slide.imageDesktop"
          cover
        />
      </SwiperSlide>
    </Swiper>

    <div class="hero-banner__content">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="12" class="hero-banner__content__info">
            <h2 class="hero-banner__content__info__title">{{ heroBannerInfo?.title }}</h2>
            <button
              class="hero-banner__content__info__button button button--tertiary"
              @click.prevent="handleClickButton"
            >
              {{ heroBannerInfo?.btn.label }}
            </button>
            <div class="swiper-custom-scrollbar hero-banner__content__info__scrollbar" />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <div class="hero-banner__gradient" />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { getHeroBannerData } = useBlocks();
const { data } = await getHeroBannerData();

const heroBannerSliders = computed(() => data.value?.sliders);
const heroBannerInfo = computed(() => data.value?.info);

const handleClickButton = () => {
  navigateTo(localePath(heroBannerInfo.value?.btn.link));
};
</script>

<style scoped lang="scss">
.hero-banner {
  position: relative;

  @include mq-mobile {
    height: 485px;
  }

  @include mq-tablet {
    height: 524px;
  }

  @include mq-desktop {
    height: 780px;
  }

  &__gradient {
    @include gradient-overlay('bottom-top', 70);
  }

  &__slideshow {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;

    &__slide {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      height: 100%;

      &__image {
        position: relative;
        height: 100%;
      }
    }
  }

  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: auto;
    text-align: center;
    pointer-events: none;

    @include mq-mobile {
      padding-bottom: 34px;
    }

    @include mq-tablet {
      padding-bottom: 56px;
    }

    @include mq-desktop {
      padding-bottom: 62px;
    }

    &__info {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: $font-weight-semi-bold;

      &__title {
        @include mq-mobile {
          margin-bottom: 50px;
          font-size: 24px;
          line-height: 28px;
          letter-spacing: 1px;
        }

        @include mq-tablet {
          margin-bottom: 40px;
          font-size: 40px;
          line-height: 47px;
        }

        @include mq-desktop {
          margin-bottom: 55px;
          font-size: 52px;
          line-height: 62px;
        }
      }

      &__button {
        min-height: 32px;
        pointer-events: all;

        @include mq-mobile {
          padding: 7px 48px;
          margin-bottom: 40px;
          font-size: 12px;
          line-height: 18px;
        }

        @include mq-tablet {
          margin-bottom: 60px;
        }

        @include mq-tablet-desktop {
          padding: 13px 61px;
          font-size: 20px;
          line-height: 24px;
        }

        @include mq-desktop {
          margin-bottom: 64px;
        }
      }

      &__scrollbar {
        pointer-events: all;
      }
    }
  }
}
</style>
