<template>
  <div v-if="data.highlight.image" class="article-highlight">
    <div class="article-highlight__image">
      <ImageFullwidth :data="data.highlight.image" />

      <div class="article-highlight__image__gradient" />
    </div>

    <LayoutGrid class="article-highlight__content">
      <LayoutGridRow>
        <LayoutGridCol m="4" t="7" d="5">
          <ul class="article-categories">
            <li v-for="category in data.categories" :key="category.id">{{ category.title }}</li>
          </ul>

          <div class="article-titles">
            <span class="title">{{ data.title }}</span>
            <span class="subtitle">{{ data.subtitle }}</span>
          </div>

          <p class="article-intro">{{ data.highlight.intro }}</p>

          <ArticleAuthor size="small" />

          <NuxtLink :to="getArticleLink(data.slug)" :title="$t('general.readMore')">
            <Button type="secondary">{{ $t('general.readMore') }}</Button>
          </NuxtLink>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~/models/blog.model';

defineProps({
  data: {
    type: Object as PropType<Article>,
    required: true,
  },
});

const { getArticleLink } = useBlog();
</script>

<style scoped lang="scss">
.article-highlight {
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;

  @include mq-mobile {
    height: 720px;
  }

  @include mq-tablet {
    height: 650px;
  }

  @include mq-desktop {
    height: 850px;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;

    &__gradient {
      @include mq-mobile {
        @include gradient-overlay('bottom-top', 100);
      }

      @include mq-tablet {
        @include gradient-overlay('left-right', 90);
      }

      @include mq-desktop {
        @include gradient-overlay('left-right', 70);
      }
    }
  }

  &__content {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: flex-end;
    height: 100%;

    .layout-grid-col {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;

      .article-categories {
        &,
        li {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        li {
          font-size: 20px;
          font-weight: $font-weight-semi-bold;
          letter-spacing: 0.4px;

          &:not(:last-child)::after {
            font-size: 14px;
            color: $white;
            content: '\2022';
          }
        }
      }

      .article-titles {
        .title {
          display: block;
          font-weight: $font-weight-semi-bold;
          line-height: 1.2;

          @include mq-mobile-tablet {
            margin-bottom: 20px;
            font-size: 64px;
          }

          @include mq-desktop {
            font-size: 86px;
          }
        }

        .subtitle {
          display: block;
          font-weight: $font-weight-semi-bold;
          line-height: 1.2;
          letter-spacing: 0.4px;

          @include mq-mobile-tablet {
            font-size: 20px;
          }

          @include mq-desktop {
            font-size: 24px;
          }
        }
      }

      .article-intro {
        font-size: 24px;
        font-weight: $font-weight-light;
        line-height: 1.4;
      }

      .button {
        min-width: 270px;
      }
    }
  }
}
</style>
