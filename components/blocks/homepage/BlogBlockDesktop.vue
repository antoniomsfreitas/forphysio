<template>
  <div ref="blogContainerRefEl" class="container" :class="{ 'container--is-fullscreen': isFullscreenMode }">
    <div class="highlighted-article">
      <ArticleHighlightHomepage />
    </div>

    <div class="slideshow">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol d="12">
            <div class="slideshow__overlay" @click="handleSwiperOverlayClick" />

            <div class="slideshow__container">
              <BlogCardsSlideshow @swiper="handleSetSwiperRef" />
            </div>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <div class="fullscreen-cta">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol d="12">
            <div class="fullscreen-cta__container">
              <IconLabel
                class="fullscreen-cta__icon"
                label="Ver todos"
                semi-bold
                :icon="fullscreenButtonIcon"
                @click="handleToggleFullscreen"
              />
            </div>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Swiper as SwiperType } from 'swiper';

// Layout
const { setHeaderVisibility } = useLayout();

// Window Scroll
const { y: windowCurrentOffsetY } = useWindowScroll({
  behavior: 'smooth',
});

const blogContainerRefEl = ref<HTMLElement | null>(null);
const isBlogContainerVisible = useElementVisibility(blogContainerRefEl);

// Fullscreen Mode
const isFullscreenMode = ref(false);
const fullscreenButtonIcon = computed(() => `icon:${isFullscreenMode.value ? 'close-circle' : 'link-arrow'}`);

// Swiper Slideshow
const swiperRefEl = ref<SwiperType | null>(null);

const handleSetSwiperRef = (swiper: SwiperType) => {
  swiperRefEl.value = swiper;
};

const handleSwiperOverlayClick = () => {
  isFullscreenMode.value = true;
};

const handleToggleFullscreen = () => {
  isFullscreenMode.value = !isFullscreenMode.value;
};

watch(isFullscreenMode, (newIsFullscreenMode) => {
  if (newIsFullscreenMode) {
    // gets the element current distance to top
    const { y: containerDistanceToTop } = useElementBounding(blogContainerRefEl);

    // scrolls the element to the top of the window
    if (containerDistanceToTop.value != 0) {
      windowCurrentOffsetY.value += containerDistanceToTop.value;
    }

    setHeaderVisibility(false);
  } else if (swiperRefEl.value) {
    setHeaderVisibility(true);
    swiperRefEl.value.slideTo(0);
  }
});

watch(isBlogContainerVisible, (newIsVisible) => {
  if (!newIsVisible) {
    setHeaderVisibility(true);
  }
});

onBeforeUnmount(() => {
  setHeaderVisibility(true);
});
</script>

<style scoped lang="scss">
.container {
  position: relative;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  justify-content: flex-start;

  .highlighted-article {
    position: relative;
    width: 100%;

    &:deep(.content__col) {
      opacity: 0;
      animation: slide-in-from-left 800ms ease 1 normal forwards running 600ms;
    }
  }

  .fullscreen-cta {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 4;
    width: 100%;

    &__container {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      padding-bottom: 20px;
    }

    &__icon {
      cursor: pointer;

      &:deep(span) {
        opacity: 0;
        animation: slide-in-from-left 800ms ease 1 normal forwards running;
      }

      &:deep(svg) {
        transition: transform 700ms ease;
      }
    }
  }

  .slideshow {
    position: absolute;
    top: 152px;
    right: 0;
    left: calc(55vw - 100px - $grid-desktop-offset);
    z-index: 3;
    height: 628px;
    transition:
      left 700ms ease 400ms,
      right 700ms ease 400ms;

    &__container {
      position: relative;
      left: 0;
      transition: left 900ms ease;
    }

    &__overlay {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 4;
      width: 100%;
      height: 100%;
      cursor: pointer;

      &:hover + .slideshow__container {
        left: -25px;
      }
    }
  }

  // Fullscreen Version
  &--is-fullscreen {
    .highlighted-article {
      &:deep(.image) {
        left: -12%;
      }

      &:deep(.content__col) {
        animation: slide-out-to-left 400ms ease 1 normal forwards running 0ms;
      }
    }

    .slideshow {
      right: 0;
      left: 0;
      transition-delay: 400ms;

      &__overlay {
        pointer-events: none;
      }
    }

    .fullscreen-cta__icon {
      &:deep(span) {
        animation: slide-out-to-left 600ms ease 1 normal forwards running 0ms;
      }

      &:deep(svg) {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
