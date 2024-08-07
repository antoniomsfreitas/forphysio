<template>
  <div class="scrollbar-slideshow">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12">
          <h3 class="scrollbar-slideshow__title">{{ title }}</h3>

          <Swiper
            class="scrollbar-slideshow__swiper-container"
            slides-per-view="auto"
            :speed="400"
            :modules="[SwiperScrollbar]"
            :space-between="16"
            :scrollbar="{ draggable: true, el: '.scrollbar-slideshow__swiper-container__scrollbar' }"
          >
            <slot />
          </Swiper>

          <div class="scrollbar-slideshow__swiper-container__scrollbar" />
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
.scrollbar-slideshow {
  position: relative;
  overflow: hidden;

  &__title {
    display: block;
    margin-bottom: 40px;
    color: $white;
    text-align: center;
  }

  &__swiper-container {
    overflow: visible;

    &__scrollbar {
      width: 250px;
      height: 3px;
      margin: 40px auto 0;
      background-color: $deep-grey;
      border-radius: 4px;

      & > * {
        position: relative;
        top: -1px;
        height: 4px;
        cursor: pointer;
        background-color: $white;
        border-radius: 4px;
      }
    }
  }
}
</style>
