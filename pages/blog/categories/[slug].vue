<template>
  <div class="container">
    <LayoutGrid>
      <LayoutGridRow class="intro-block">
        <LayoutGridCol m="4" t="4" d="4" class="intro-block__content">
          <h1>{{ category?.title }}</h1>
        </LayoutGridCol>
      </LayoutGridRow>

      <LayoutGridRow v-if="category?.articles" class="articles-block">
        <LayoutGridCol v-for="article in category?.articles" :key="article.id" m="2" t="4" d="3">
          <BlogCard
            type="article"
            :title="article.title"
            :src="article.imageList.image"
            :alt="article.imageList.alt"
            :slug="article.slug"
          />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';

definePageMeta({
  validate: async (route) => {
    return typeof route.params.slug === 'string';
  },
});

const route = useRoute();
const { getCategoriesData } = useBlog();
const localePath = useLocalePath();

const slug = route.params.slug as string;
const { data, status } = await getCategoriesData({ slug: slug, includeArticles: true });

const category = computed(() => data.value?.[0]);

const emit = defineEmits(['onDataLoaded']);
watch(
  status,
  (newStatus) => {
    if (newStatus !== 'success' || !data.value?.length) {
      // error
      navigateTo(localePath(Routes.NOT_FOUND));
    } else {
      emit('onDataLoaded');
    }
  },
  { immediate: true },
);
</script>

<style scoped lang="scss">
.intro-block {
  @include mq-mobile-tablet {
    padding: 190px 0 80px;
  }

  @include mq-desktop {
    padding: 150px 0 100px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}

.articles-block {
  @include mq-mobile-tablet {
    margin-bottom: 100px;
  }

  @include mq-desktop {
    margin-bottom: 160px;
  }
}
</style>
