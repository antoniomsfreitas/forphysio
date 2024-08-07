<template>
  <ScrollBarSlideshow class="services-slideshow-container" title="Serviços">
    <SwiperSlide v-for="item in items" :key="item.id" class="services-slideshow-container__slide">
      <CardImage :title="item.title" :src="item.src" :link="item.link" :alt="item.alt" />
    </SwiperSlide>
  </ScrollBarSlideshow>
</template>

<script setup lang="ts">
const items = [
  {
    id: 1,
    title: 'Fisioterapia músculo esquelética',
    src: '/images/homepage/services-block/service-1.jpg',
    alt: 'A definir',
    link: '#',
  },
  {
    id: 2,
    title: 'Fisioterapia aquática e hidroterapia',
    src: '/images/homepage/services-block/service-2.jpg',
    alt: 'A definir',
    link: '#',
  },
  {
    id: 3,
    title: 'Fisioterapia no envelhecimento',
    src: '/images/homepage/services-block/service-3.jpg',
    alt: 'A definir',
    link: '#',
  },
  {
    id: 4,
    title: 'Fisioterapia no desporto',
    src: '/images/homepage/services-block/service-4.jpg',
    alt: 'A definir',
    link: '#',
  },
  {
    id: 5,
    title: 'Fisioterapia na saúde da mulher',
    src: '/images/homepage/services-block/service-5.jpg',
    alt: 'A definir',
    link: '#',
  },
  {
    id: 6,
    title: 'Ver todos',
    src: '/images/homepage/services-block/service-6.jpg',
    alt: 'A definir',
    link: '#',
  },
];
</script>

<style scoped lang="scss">
.services-slideshow-container {
  &__slide {
    width: 348px;
    max-width: 100%;
    height: auto;
  }
}
</style>
