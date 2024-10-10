<template>
  <CardUI class="blog-card" :class="'blog-card--' + type">
    <NuxtLink :to="cardLink" class="blog-card__link" :title="$t('general.view-all')">
      <img :src="src" class="blog-card__img" />

      <div class="blog-card__content">
        <div class="blog-card__content__titles">
          <span class="title">{{ title }}</span>
          <span v-if="subtitle" class="subtitle">{{ subtitle }}</span>
        </div>

        <Icon name="icon:link-arrow" class="blog-card__content__icon" />
      </div>

      <div class="blog-card__gradient" />
    </NuxtLink>
  </CardUI>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<'article' | 'category'>,
    required: false,
    default: 'article',
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: '',
  },
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const { getArticleLink, getCategoryLink } = useBlog();

const cardLink = computed(() => (props.type == 'category' ? getCategoryLink(props.slug) : getArticleLink(props.slug)));
</script>

<style scoped lang="scss">
.blog-card {
  position: relative;

  &__link {
    display: block;
    height: 100%;
  }

  &__img {
    position: relative;
    z-index: 1;
    max-width: 100%;
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
    color: $white;
    text-decoration: none;

    @include mq-mobile {
      padding: 0 15px 30px;
    }

    @include mq-tablet {
      padding: 0 15px 38px;
    }

    @include mq-desktop {
      padding: 0 28px 51px;
    }

    &__titles {
      .subtitle {
        @include mq-mobile {
          font-size: 14px;
          letter-spacing: 0.4px;
        }

        @include mq-tablet {
          font-size: 16px;
          letter-spacing: 0.3px;
        }

        @include mq-desktop {
          font-size: 18px;
          letter-spacing: 0.4px;
        }
      }

      .title {
        display: block;
        padding-bottom: 5px;
        font-size: 16px;
        font-weight: $font-weight-light;
        text-transform: uppercase;
        letter-spacing: 0.3px;

        @include mq-mobile {
          font-size: 14px;
          letter-spacing: 0.4px;
        }
      }
    }

    &__icon {
      flex: 0 0 44px;
      font-size: 44px;
      transition: box-shadow 0.2s ease-in-out;

      @include mq-mobile {
        flex: 0 0 20px;
        font-size: 20px;
      }

      @include mq-tablet {
        flex: 0 0 34px;
        font-size: 34px;
      }

      @include mq-desktop {
        flex: 0 0 44px;
        font-size: 44px;
      }
    }
  }

  &--category & {
    &__content__titles {
      .subtitle {
        display: none;
      }

      .title {
        display: block;
        padding-bottom: 0;
        font-size: 32px;
        font-weight: $font-weight-semi-bold;
        text-transform: none;
        letter-spacing: 0.6px;

        @include mq-tablet {
          font-size: 20px;
          letter-spacing: 0.5px;
        }

        @include mq-mobile {
          font-size: 14px;
          letter-spacing: 0.4px;
        }
      }
    }
  }

  &__gradient {
    @include gradient-overlay('bottom-top', 50);
  }

  @include mq-desktop {
    &:hover & {
      &__img {
        transform: scale(1.05);
      }
    }
  }
}
</style>
