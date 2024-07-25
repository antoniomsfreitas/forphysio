<template>
  <div class="content">
    <HeroBannerBlock />
    <AboutUsBlock class="home-block" />
    <TwoImagesBlock class="home-block" />
  </div>
</template>

<style scoped lang="scss">
.home-block {
  @include mq-mobile-tablet {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @include mq-desktop {
    margin-top: 100px;
    margin-bottom: 100px;
  }
}
</style>
