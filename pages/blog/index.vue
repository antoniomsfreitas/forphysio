<template>
  <div class="container">
    <div class="intro-block">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="6" d="4" class="intro-block__content">
            <h1>{{ $t('pages.blog') }}</h1>

            <CustomInputSearch :placeholder="$t('search.label.category')" @search="handleSearch" />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <ArticleHighlight v-if="page?.highlightedArticle" :data="page?.highlightedArticle" class="article-highlight" />

    <ArticleSlideshow
      v-if="page?.articlesLandingPage"
      :data="page?.articlesLandingPage"
      :title="$t('blog.highlightedArticles')"
      class="langing-page-articles"
    />

    <ArticleSlideshow
      v-if="page?.categoriesLandingPage_1?.articles?.length"
      :data="page.categoriesLandingPage_1.articles"
      :title="page.categoriesLandingPage_1.title"
      :link-view-all="getCategoryLink(page.categoriesLandingPage_1.slug)"
      class="langing-page-categories"
    />

    <ArticleSlideshow
      v-if="page?.categoriesLandingPage_2?.articles?.length"
      :data="page.categoriesLandingPage_2.articles"
      :title="page?.categoriesLandingPage_2.title"
      :link-view-all="getCategoryLink(page.categoriesLandingPage_2.slug)"
      class="langing-page-categories"
    />
  </div>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';

const { buildBlogPage, getCategoryLink } = useBlog();
const page = await buildBlogPage();

const handleSearch = (value: string) => {
  const localePath = useLocalePath();
  const searchRoute = localePath({ name: Routes.BLOG_CATEGORIES, query: { q: value } });

  navigateTo(searchRoute);
};

const emit = defineEmits(['onDataLoaded']);
if (page != null) {
  emit('onDataLoaded');
}
</script>

<style scoped lang="scss">
.intro-block {
  @include mq-mobile-tablet {
    padding: 190px 0 80px;
  }

  @include mq-desktop {
    padding: 150px 0 160px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}

.article-highlight {
  @include mq-mobile-tablet {
    margin-bottom: 100px;
  }

  @include mq-desktop {
    margin-bottom: 210px;
  }
}

.langing-page-articles,
.langing-page-categories {
  margin-bottom: 100px;
}
</style>
