<template>
  <div class="container">
    <HeroBannerBlock v-if="heroBannerData" class="hero-banner-block" :data="heroBannerData" />
    <AboutUsBlock v-if="aboutUsBlockData" class="about-us-block" :data="aboutUsBlockData" />
    <TwoImagesBlock class="two-images-block" />
    <ServicesBlock class="services-block" />
    <CustomersReviewsBlock class="customers-reviews-block" />
    <NewsletterBlock />
  </div>
</template>

<script setup lang="ts">
import { useBlocks } from '~/composables/blocks.composable';
import type { AboutUsBlock } from '~/models/blocks/about-us-block.model';
import type { HeroBanner } from '~/models/blocks/hero-banner.model';

const { getHomepageBlocksData } = useBlocks();
const { data } = await getHomepageBlocksData();

const heroBannerData = computed<HeroBanner | undefined>(() => data.value?.['hero-banner']);
const aboutUsBlockData = computed<AboutUsBlock | undefined>(() => data.value?.['about-us-block']);
</script>

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

.customers-reviews-block {
  @include mq-mobile {
    margin-bottom: 130px;
  }

  @include mq-mobile-tablet {
    margin-bottom: 100px;
  }

  @include mq-desktop {
    margin-bottom: 110px;
  }
}
</style>
