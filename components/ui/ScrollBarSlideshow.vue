<script setup lang="ts"></script>

<template>
  <div class="scrollbar-slideshow">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12">
          <h3 class="scrollbar-slideshow__title">{{ title }}</h3>

          <Swiper
            class="scrollbar-slideshow__swiper-container"
            slides-per-view="auto"
            :modules="[SwiperPagination]"
            :pagination="{ clickable: true, type: 'progressbar', el: '.scrollbar-slideshow__pagination' }"
            :space-between="16"
          >
            <slot />
          </Swiper>

          <div class="scrollbar-slideshow__pagination" />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
$scroll-bar-height: 4px;

.scrollbar-slideshow {
  position: relative;
  padding-bottom: calc(40px + $scroll-bar-height);
  overflow: hidden;

  &__title {
    display: block;
    margin-bottom: 40px;
    color: $white;
    text-align: center;

    @include mq-desktop {
      font-size: 32px;
    }
  }

  &__swiper-container {
    overflow: visible;
  }

  &__pagination {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 50%;
    width: 250px;
    height: calc($scroll-bar-height - 1px);
    background-color: $deep-grey;
    border-radius: 4px;
    transform: translateX(-50%);

    & > * {
      height: $scroll-bar-height;
      background-color: $white;
      border-radius: 4px;
    }
  }
}
</style>
