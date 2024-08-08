<template>
  <CardUI class="card-image">
    <NuxtLink :to="props.link" :target="linkTarget" class="card-image__link" :title="props.linkTitle">
      <PictureImage v-bind="{ ...imageSrcAttributes }" class="card-image__picture" />

      <div class="card-image__content">
        <span class="card-image__content__title">{{ title }}</span>
        <Icon name="icon:link-arrow" class="card-image__content__icon" />
      </div>

      <div class="card-image__gradient" />
    </NuxtLink>
  </CardUI>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  srcM: {
    type: String,
    default: '',
  },
  srcT: {
    type: String,
    default: '',
  },
  srcD: {
    type: String,
    default: '',
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
  external: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const linkTarget = computed(() => (props.external ? '_blank' : '_self'));

const imageSrcAttributes = {
  alt: props.alt,
  src: props.src,
  'src-m': props.srcM,
  'src-t': props.srcM,
  'src-d': props.srcD,
};
</script>

<style scoped lang="scss">
.card-image {
  position: relative;

  &__link {
    display: block;
    height: 100%;
  }

  &__picture {
    position: relative;
    z-index: 1;
    transition: transform 0.2s ease-in-out;
    transform: scale(1);
  }

  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 4;
    display: flex;
    gap: 24px;
    align-items: center;
    width: 100%;
    padding: 0 28px 51px;
    font-weight: $font-weight-semi-bold;
    line-height: 1.2;
    color: $white;
    text-decoration: none;

    &__title {
      font-size: 18px;
      text-transform: uppercase;
    }

    &__icon {
      flex: 0 0 44px;
      font-size: 44px;
      transition: box-shadow 0.2s ease-in-out;
    }
  }

  &__gradient {
    @include gradient-overlay('bottom-top', 50);
  }

  @include mq-desktop {
    &:hover & {
      &__picture {
        transform: scale(1.05);
      }
    }
  }
}
</style>
