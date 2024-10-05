<template>
  <LayoutGrid class="about-us-block">
    <LayoutGridRow>
      <LayoutGridCol m="4" t="6" d="5" start-col-d="2">
        <div class="about-us-block__content">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <h2 class="about-us-block__content__title" v-html="title" />

          <div class="about-us-block__content__description">
            <p>{{ data.description }}</p>
          </div>

          <IconLink :link="localePath(button.link)" :text="button.label" />
        </div>
      </LayoutGridCol>

      <LayoutGridCol m="4" t="6">
        <PictureImage
          class="about-us-block__image"
          :alt="image.alt"
          :src="image.mobile"
          :src-t="image.tablet"
          :src-d="image.desktop"
        />
      </LayoutGridCol>
    </LayoutGridRow>
  </LayoutGrid>
</template>

<script setup lang="ts">
import type { AboutUsBlock } from '~/models/blocks/about-us-block.model';
const localePath = useLocalePath();

const props = defineProps({
  data: {
    type: Object as PropType<AboutUsBlock>,
    required: true,
  },
});

const title = computed(() =>
  // replaces the regular title highlighted key with the highlighted title value
  props.data.title.regular.replaceAll('{{ highlighted }}', `<span>${props.data.title.highlighted}</span>`),
);

const image = computed(() => props.data.image);
const button = computed(() => props.data.cta);
</script>

<style scoped lang="scss">
.about-us-block {
  @include mq-mobile {
    & > .layout-grid-row {
      grid-row-gap: 50px;
    }
  }

  @include mq-mobile-tablet {
    padding: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;

    @include mq-mobile {
      padding: 0 24px;
    }

    @include mq-tablet-desktop {
      padding-bottom: 55px;
    }

    @include mq-mobile-tablet {
      gap: 40px;
      padding-left: 32px;
    }

    @include mq-desktop {
      gap: 60px;
    }

    &__title {
      color: $medium-grey;

      * {
        color: $white;
      }

      @include mq-mobile {
        font-size: 48px;
      }

      @include mq-tablet {
        font-size: 64px;
      }

      @include mq-desktop {
        font-size: 86px;
      }
    }

    &__description {
      white-space: pre-wrap;

      @include mq-tablet {
        padding-right: 30px;
      }

      @include mq-desktop {
        padding-right: 85px;
      }

      p {
        font-weight: $font-weight-light;
        line-height: 1.5;

        @include mq-mobile {
          font-size: 16px;
        }

        @include mq-tablet-desktop {
          font-size: 18px;
        }
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;

    :deep(img) {
      width: 100%;

      @include mq-tablet-desktop {
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 15px;
      }

      @include mq-desktop {
        border-top-right-radius: 15px;
      }
    }
  }
}
</style>
