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
      <SwiperSlide class="hero-banner__slideshow__slide">
        <PictureImage
          alt="Imagem de um profissional de fisioterapia a ajudar o seu paciente no exercício supino com barra"
          class="hero-banner__slideshow__slide__image"
          src="/images/homepage/hero-banner-block/image-1/image-1-mobile.jpg"
          src-t="/images/homepage/hero-banner-block/image-1/image-1-tablet.jpg"
          src-d="/images/homepage/hero-banner-block/image-1/image-1-desktop.jpg"
          cover
        />
      </SwiperSlide>

      <SwiperSlide class="hero-banner__slideshow__slide">
        <PictureImage
          alt="Imagem de um profissional de fisioterapia a ajudar o seu paciente com um problema de joelho"
          class="hero-banner__slideshow__slide__image"
          src="/images/homepage/hero-banner-block/image-2/image-2-mobile.jpg"
          src-t="/images/homepage/hero-banner-block/image-2/image-2-tablet.jpg"
          src-d="/images/homepage/hero-banner-block/image-2/image-2-desktop.jpg"
          cover
        />
      </SwiperSlide>

      <SwiperSlide class="hero-banner__slideshow__slide">
        <PictureImage
          alt="Imagem de uma mulher a receber um tratamento de bem-estar por parte de uma profissional da fisioterapia"
          class="hero-banner__slideshow__slide__image"
          src="/images/homepage/hero-banner-block/image-3/image-3-mobile.jpg"
          src-t="/images/homepage/hero-banner-block/image-3/image-3-tablet.jpg"
          src-d="/images/homepage/hero-banner-block/image-3/image-3-desktop.jpg"
          cover
        />
      </SwiperSlide>
    </Swiper>

    <div class="hero-banner__content">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="12" class="hero-banner__content__info">
            <h2 class="hero-banner__content__info__title">Exercício • Fisioterapia • Bem-Estar</h2>
            <button class="hero-banner__content__info__button button button--tertiary">Marcar consulta</button>
            <div class="swiper-custom-scrollbar hero-banner__content__info__scrollbar" />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <div class="hero-banner__gradient" />
  </div>
</template>

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
