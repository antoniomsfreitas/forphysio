<template>
  <ScrollbarSlideshow class="customers-reviews-slideshow-container" :title="$t('general.reviews')">
    <SwiperSlide v-for="item in data" :key="item.id" class="customers-reviews-slideshow-container__slide">
      <CardReview :author="item.author" :review="item.review" :photo="item.image" :alt="item.alt" :star="item.stars" />
    </SwiperSlide>
  </ScrollbarSlideshow>
</template>

<script setup lang="ts">
import type { CustomersReviewsBlock } from '~/models/blocks/customers-reviews-block.model';

defineProps({
  data: {
    type: Object as PropType<CustomersReviewsBlock[]>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.customers-reviews-slideshow-container {
  &__slide {
    width: 343px;
    max-width: 100%;
    height: auto;
  }
}
</style>
