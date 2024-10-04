<template>
  <ScrollbarSlideshow class="services-slideshow-container" title="Serviços">
    <SwiperSlide v-for="service in services" :key="service.id" class="services-slideshow-container__slide">
      <CardImage
        :title="service.title"
        :src="getImagePath(service.image)"
        :link="getDetailPage(service.slug)"
        :alt="$t('general.image') + ': ' + service.image"
        :link-title="$t('general.viewDetail')"
      />
    </SwiperSlide>
  </ScrollbarSlideshow>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';
import { useServices } from '~/composables/services.composable';

const localePath = useLocalePath();
const { services } = useServices();

const getImagePath = (image: string) => {
  return '/images/services/list/' + image;
};

const getDetailPage = (slug: string): string => {
  return `${localePath(Routes.SERVICES)}/${slug}`;
};
</script>

<style scoped lang="scss">
.services-slideshow-container {
  &__slide {
    width: 348px;
    max-width: 100%;
  }
}
</style>
