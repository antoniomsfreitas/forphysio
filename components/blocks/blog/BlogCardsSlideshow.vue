<template>
  <Swiper
    v-if="swiperReadyToInitialize"
    class="slideshow-wrapper"
    grab-cursor
    :space-between="spaceBetween"
    slides-per-view="auto"
    free-mode
    :speed="400"
    :modules="[SwiperFreeMode]"
  >
    <SwiperSlide class="slideshow-wrapper__slide">
      <BlogCard
        title="Tornozelo"
        subtitle="Exercícios de mobilidade"
        src="/images/blog/blogSlideshow.jpg"
        slug="teste"
        alt="Alt Image"
        :link-title="$t('general.view-all')"
        size="big"
      />
    </SwiperSlide>

    <SwiperSlide class="slideshow-wrapper__slide">
      <BlogCard
        title="Tornozelo"
        subtitle="Exercícios de mobilidade"
        src="/images/blog/blogSlideshow.jpg"
        slug="teste"
        alt="Alt Image"
        :link-title="$t('general.view-all')"
      />
    </SwiperSlide>

    <SwiperSlide class="slideshow-wrapper__slide">
      <BlogCard
        title="Tornozelo"
        subtitle="Exercícios de mobilidade"
        src="/images/blog/blogSlideshow.jpg"
        slug="teste"
        alt="Alt Image"
        :link-title="$t('general.view-all')"
      />
    </SwiperSlide>

    <SwiperSlide class="slideshow-wrapper__slide">
      <BlogCard
        title="Tornozelo"
        subtitle="Exercícios de mobilidade"
        src="/images/blog/blogSlideshow.jpg"
        slug="teste"
        alt="Alt Image"
        :link-title="$t('general.view-all')"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
const swiperReadyToInitialize = ref(false);

onMounted(() => {
  swiperReadyToInitialize.value = true;
});

defineProps({
  spaceBetween: {
    type: Number,
    default: 16,
  },
});
</script>

<style scoped lang="scss">
.slideshow-wrapper {
  overflow: visible;

  &__slide {
    max-width: 97%;

    &:deep(.blog-card__content__titles) {
      .subtitle {
        letter-spacing: 1px;
        font-weight: $font-weight-semi-bold;
      }
    }

    &:deep(svg) {
      opacity: 0;
    }

    &:nth-child(odd) {
      @include mq-tablet-desktop {
        width: 471px;
      }

      @include mq-mobile {
        width: 280px;
      }

      &:deep(.blog-card__content__titles) {
        .title {
          @include mq-tablet-desktop {
            font-size: 18px;
          }

          @include mq-mobile {
            font-size: 20px;
          }
        }

        .subtitle {
          @include mq-tablet-desktop {
            font-size: 32px;
          }

          @include mq-mobile {
            font-size: 20px;
          }
        }
      }
    }

    &:nth-child(even) {
      @include mq-tablet-desktop {
        width: 400px;
      }

      @include mq-mobile {
        width: 180px;

        &:deep(svg) {
          display: none;
        }
      }

      &:deep(.blog-card__content__titles) {
        .title {
          @include mq-tablet-desktop {
            font-size: 18px;
          }

          @include mq-mobile {
            font-size: 16px;
          }
        }

        .subtitle {
          @include mq-tablet-desktop {
            font-size: 32px;
          }

          @include mq-mobile {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
