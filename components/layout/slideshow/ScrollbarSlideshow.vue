<template>
  <div class="scrollbar-slideshow">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12">
          <h3 class="scrollbar-slideshow__title" :class="'scrollbar-slideshow__title--align-' + titleAlignment">
            {{ title }}
          </h3>

          <Swiper
            v-if="swiperInitialized"
            class="scrollbar-slideshow__swiper-container"
            slides-per-view="auto"
            :speed="400"
            :modules="[SwiperScrollbar, SwiperFreeMode]"
            :space-between="spaceBetween"
            :free-mode="freeMode"
            :scrollbar="{ draggable: true, el: scrollbarRef }"
          >
            <slot />
          </Swiper>

          <div ref="scrollbarRef" class="scrollbar-slideshow__swiper-container__scrollbar swiper-custom-scrollbar" />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
const scrollbarRef = ref<HTMLElement>();
const swiperInitialized = ref(false);

defineProps({
  title: {
    type: String,
    required: true,
  },
  titleAlignment: {
    type: String as PropType<'left' | 'center' | 'right'>,
    required: false,
    default: 'center',
  },
  spaceBetween: {
    type: Number,
    required: false,
    default: 16,
  },
  freeMode: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  swiperInitialized.value = true;
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

    &--align {
      &-left {
        text-align: left;
      }

      &-right {
        text-align: right;
      }

      &-center {
        text-align: center;
      }
    }
  }

  &__swiper-container {
    overflow: visible;

    &__scrollbar {
      margin: 40px auto 0;
    }
  }
}
</style>
