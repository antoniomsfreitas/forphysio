<template>
  <CardUI class="card-team">
    <NuxtLink :to="props.link" class="card-team__link" :title="props.linkTitle">
      <img :src="imagePath" :alt="alt" />

      <div class="card-team__content">
        <span class="card-team__content__title">{{ title }}</span>
        <span v-if="subtitle" class="card-team__content__subtitle">{{ subtitle }}</span>
      </div>

      <div class="card-team__gradient" />
    </NuxtLink>
  </CardUI>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    title: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  linkTitle: {
    type: String,
    required: true,
  },
});

const imagePath = '/images/team/members/list/' + props.src;
</script>

<style scoped lang="scss">
.card-team {
  position: relative;
  background-color: $deep-grey;

  @include mq-tablet {
    height: 165px;
  }

  @include mq-desktop {
    height: 260px;
  }

  &__link {
    display: block;
    height: 100%;
  }

  img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 4;
    width: 100%;

    line-height: 1.2;
    text-align: center;
    color: $white;
    text-decoration: none;

    @include mq-mobile-tablet {
      font-size: 14px;
      padding: 12px;
    }

    @include mq-desktop {
      font-size: 16px;
      padding: 14px;
    }

    &__title {
      display: block;
      font-weight: $font-weight-semi-bold;
      padding-bottom: 2px;
    }

    &__subtitle {
      display: block;
      font-weight: $font-weight-thin;
    }
  }

  &__gradient {
    @include mq-mobile-tablet {
      @include gradient-overlay('bottom-top', 70);
    }

    @include mq-desktop {
      @include gradient-overlay('bottom-top', 50);
    }
  }
}
</style>
