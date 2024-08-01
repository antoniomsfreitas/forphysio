<template>
  <div class="content">
    <HeroBannerBlock />
    <AboutUsBlock class="about-us-block" />
    <TwoImagesBlock class="two-images-block" />
    <NewsletterBlock />
  </div>
</template>

<style scoped lang="scss">
.about-us-block {
  @include mq-mobile {
    margin-top: 100px;
    margin-bottom: 50px;
  }

  @include mq-tablet {
    margin-top: 120px;
    margin-bottom: 80px;
  }

  @include mq-desktop {
    margin-top: 130px;
    margin-bottom: 100px;
  }
}

.two-images-block {
  margin-bottom: 100px;

  @include mq-mobile-tablet {
    margin-top: 80px;
  }

  @include mq-desktop {
    margin-top: 100px;
  }
}
</style>
