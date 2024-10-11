<template>
  <div v-if="data" class="container">
    <HeroBannerBlock v-if="heroBannerData" class="container__hero-banner-block" :data="heroBannerData" />
    <AboutUsBlock v-if="aboutUsBlockData" class="container__about-us-block" :data="aboutUsBlockData" />
    <TwoImagesBlock v-if="twoImagesBlockData" class="container__two-images-block" :data="twoImagesBlockData" />
    <ServicesBlock class="container__services-block" />
    <CustomersReviewsBlock
      v-if="customersReviewsBlockData"
      class="container__customers-reviews-block"
      :data="customersReviewsBlockData"
    />
    <NewsletterBlock v-if="newsletterBlockData" :data="newsletterBlockData" />
  </div>
</template>

<script setup lang="ts">
const { getHomepageBlocksData } = useHomepageBlocks();
const { data, status } = await getHomepageBlocksData();

const heroBannerData = computed(() => data.value?.heroBannerBlock);
const aboutUsBlockData = computed(() => data.value?.aboutUsBlock);
const twoImagesBlockData = computed(() => data.value?.twoImagesBlock);
const customersReviewsBlockData = computed(() => data.value?.customersReviewsBlock);
const newsletterBlockData = computed(() => data.value?.newsletterBlock);

const emit = defineEmits(['onDataLoaded']);
watch(
  status,
  (newStatus) => {
    if (newStatus === 'success') {
      emit('onDataLoaded');
    }
  },
  { immediate: true },
);
</script>

<style scoped lang="scss">
.container {
  &__hero-banner-block {
    @include mq-mobile {
      margin-bottom: 100px;
    }

    @include mq-tablet-desktop {
      margin-bottom: 130px;
    }
  }

  &__about-us-block {
    @include mq-mobile-tablet {
      margin-bottom: 80px;
    }

    @include mq-desktop {
      margin-bottom: 100px;
    }
  }

  &__two-images-block {
    margin-bottom: 100px;
  }

  &__services-block {
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

  &__customers-reviews-block {
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
}
</style>
