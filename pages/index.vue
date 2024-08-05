<template>
  <div class="container">
    <HeroBannerBlock />
    <AboutUsBlock class="about-us-block" />
    <TwoImagesBlock class="two-images-block" />
    <ServicesBlock class="services-block" />
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

.services-block {
  @include mq-mobile {
    margin-bottom: 130px;
  }

  @include mq-mobile-tablet {
    margin-bottom: 175px;
  }

  @include mq-desktop {
    margin-bottom: 160px;
  }
}
</style>
