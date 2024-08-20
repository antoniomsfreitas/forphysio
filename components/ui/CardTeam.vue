<template>
  <CardUI class="card-team">
    <NuxtLink :to="props.link" class="card-team__link" :title="props.linkTitle">
      <PictureImage v-bind="{ ...imageSrcAttributes }" class="card-team__picture" cover />

      <div class="card-team__content">
        <span class="card-team__content__title">{{ title }}</span>
        <span class="card-team__content__subtitle">{{ subtitle }}</span>
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
    required: true,
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

const imageListPath = '/images/team/members/list/';

const imageSrcAttributes = {
  alt: props.alt,
  src: imageListPath + props.src,
};
</script>

<style scoped lang="scss">
.card-team {
  position: relative;
  background-color: $deep-grey;

  &__link {
    display: block;
    height: 100%;
  }

  &__picture {
    position: relative;
    z-index: 1;
  }

  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    padding: 14px;
    font-size: 16px;
    line-height: 1.2;
    text-align: center;
    color: $white;
    text-decoration: none;

    &__title {
      display: block;
      font-weight: $font-weight-semi-bold;
    }

    &__subtitle {
      display: block;
      font-weight: $font-weight-thin;
    }
  }

  &__gradient {
    @include gradient-overlay('bottom-top', 50);
  }
}
</style>
