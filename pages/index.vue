<template>
  <div class="container">
    <HeroBannerBlock class="hero-banner-block" />
    <AboutUsBlock class="about-us-block" />
    <TwoImagesBlock class="two-images-block" />
    <ServicesBlock class="services-block" />
    <NewsletterBlock />
  </div>
</template>

<style scoped lang="scss">
.hero-banner-block {
  @include mq-mobile {
    margin-bottom: 100px;
  }

  @include mq-tablet-desktop {
    margin-bottom: 130px;
  }
}

.about-us-block {
  @include mq-mobile-tablet {
    margin-bottom: 80px;
  }

  @include mq-desktop {
    margin-bottom: 100px;
  }
}

.two-images-block {
  margin-bottom: 100px;
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
