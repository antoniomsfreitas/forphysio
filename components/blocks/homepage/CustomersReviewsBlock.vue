<template>
  <ScrollbarSlideshow class="customers-reviews-slideshow-container" title="Testemunhos">
    <SwiperSlide v-for="item in items" :key="item.id" class="customers-reviews-slideshow-container__slide">
      <CardReview :author="item.author" :review="item.review" :photo="item.image" :alt="item.alt" :star="item.stars" />
    </SwiperSlide>
  </ScrollbarSlideshow>
</template>

<script setup lang="ts">
const items = [
  {
    id: 1,
    stars: 5,
    author: 'Adriano\nSilva',
    review:
      'Equipa ForPhysio 5 estrelas! Profissionais capacitados! A minha experiência está a ser bastante satisfatória com resultados eficazes e duradouros. Super recomendo para si com a certeza de que os resultados serão positivos como estão a ser para mim.\nParabéns ForPhysio!',
    image: '/images/homepage/customers-reviews-block/adriano-silva.png',
    alt: 'Um senhor a sorrir vestido com uma camisola de desporto azul',
  },
  {
    id: 2,
    stars: 5,
    author: 'Marco\nLeal',
    review:
      'Clínica de fisioterapia altamente recomendável para qualquer tipo de lesão.\nBoas condições e fisioterapeutas muito informados e preparados.\nEstou a ser acompanhado pela fisioterapeuta Clara de uma pós cirurgia ao LCA e estou muito satisfeito com o processo.',
    image: '/images/homepage/customers-reviews-block/marco-leal.png',
    alt: 'Um jovem a sorrir vestido com uma camisola casual amarela',
  },
  {
    id: 3,
    stars: 5,
    author: 'Emanuel\nFigueiredo',
    review:
      'Agradeço à ForPhysio por todo o apoio, profissionalismo e cuidado que demonstraram na minha recuperação após cirurgia no menisco interno, logo desde o primeiro momento.A cada sessão realizada pude sentir evolução e uma melhoria constante, tudo isto graças ao excelente trabalho realizado pela Fisioterapeuta Ana Clara, sempre atenta aos meus sintomas, questionando constantemente como me sentia, apontando e pormenorizando todo e cada detalhe do trabalho desenvolvido.',
    image: '/images/homepage/customers-reviews-block/emanual-figueiredo.png',
    alt: 'Um senhor vestido com um casaco desportivo azul marinho',
  },
  {
    id: 4,
    stars: 5,
    author: 'David\nHawthorn',
    review:
      "Years ago now, I was diagnosed with arthritis in my neck and from which I've suffered pain and discomfort and immobility! Various treatments including physios and chiropractors, left my symptoms the same or worse to say nothing of the expense. Ana at Balance is an excellent physiotherapist who has unlocked my arthritic neck muscles and years of damage has begun to heal and the difference is so noticeable - and after years of being resigned to the pain, I am now much improved and am delighted I self-referred myself for physiotherapy with Balance Gym. A great service and good value for money too",
    image: '/images/homepage/customers-reviews-block/david-hawthorn.png',
    alt: 'Um senhor vestido com uma camisa cor de rosa aos quadrados',
  },
  {
    id: 5,
    stars: 5,
    author: 'Adriano\nSilva',
    review:
      'Equipa ForPhysio 5 estrelas! Profissionais capacitados! A minha experiência está a ser bastante satisfatória com resultados eficazes e duradouros. Super recomendo para si com a certeza de que os resultados serão positivos como estão a ser para mim.\nParabéns ForPhysio!',
    image: '/images/homepage/customers-reviews-block/adriano-silva.png',
    alt: 'Um senhor a sorrir vestido com uma camisola de desporto azul',
  },
];
</script>

<style scoped lang="scss">
.customers-reviews-slideshow-container {
  &__slide {
    width: 343px;
    max-width: 100%;
  }
}
</style>
