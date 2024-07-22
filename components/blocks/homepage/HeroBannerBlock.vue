<template>
  <Swiper
    class="hero-banner"
    :modules="[SwiperAutoplay, SwiperScrollbar]"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true,
    }"
    :slides-per-view="1"
    :scrollbar="{ draggable: true }"
  >
    <SwiperSlide> Teste {{ windowHeight }} </SwiperSlide>
    <SwiperSlide> Teste 2 </SwiperSlide>
    <SwiperSlide> Teste 3 </SwiperSlide>
    <SwiperSlide> Teste 4 </SwiperSlide>
  </Swiper>
</template>

<style scoped lang="scss">
.hero-banner {
  height: 485px;
}
</style>
