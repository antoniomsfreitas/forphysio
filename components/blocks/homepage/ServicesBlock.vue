<template>
  <ScrollbarSlideshow class="services-slideshow-container" title="Serviços">
    <SwiperSlide v-for="service in services" :key="service.id" class="services-slideshow-container__slide">
      <CardImage
        :title="service.title"
        :src="service.image"
        :link="getServicesPage(service.slug)"
        :alt="$t('general.image') + ': ' + service.image"
        :link-title="$t('general.viewDetail')"
      />
    </SwiperSlide>

    <SwiperSlide class="services-slideshow-container__slide">
      <CardImage
        :title="$t('general.view-all')"
        src="/images/services/list/view-all.jpg"
        :link="getServicesPage()"
        :alt="$t('general.view-all')"
        :link-title="$t('general.view-all')"
      />
    </SwiperSlide>
  </ScrollbarSlideshow>
</template>

<script setup lang="ts">
import { useServices } from '~/composables/services.composable';
import { Routes } from '~/models/routes.model';

const localePath = useLocalePath();
const { getServicesListData } = useServices();

const { data } = await getServicesListData(true);
const services = computed(() => data.value);

const getServicesPage = (slug?: string): string => {
  if (slug) {
    return `${localePath(Routes.SERVICES)}/${slug}`;
  }

  return `${localePath(Routes.SERVICES)}`;
};
</script>

<style scoped lang="scss">
.services-slideshow-container {
  &__slide {
    width: 348px;
    max-width: 97%;
  }
}
</style>
