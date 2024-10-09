<template>
  <div class="container">
    <LayoutGrid>
      <LayoutGridRow class="intro-block">
        <LayoutGridCol m="4" t="6" d="4" class="intro-block__content">
          <h1>{{ $t('blog.categories') }}</h1>

          <CustomInputSearch :placeholder="$t('search.label.category')" :value="searchQuery" @search="handleSearch" />
        </LayoutGridCol>
      </LayoutGridRow>

      <LayoutGridRow v-if="categories" class="categories-block">
        <LayoutGridCol v-for="category in categories" :key="category.id" m="2" t="4" d="3">
          <BlogCard
            type="category"
            :title="category.title"
            :src="category.imageList.image"
            :alt="category.imageList.alt"
            :slug="category.slug"
          />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>

    <NewsletterBlock v-if="newsletterBlock" :data="newsletterBlock" />
  </div>
</template>

<script setup lang="ts">
const { getCategoriesData } = useBlog();
const { getNewsletterBlockData } = useHomepageBlocks();
const route = useRoute();

const searchQuery = route.query.q?.toString();

const { data: categoriesData, status } = await getCategoriesData({ searchQuery: searchQuery });
const categories = computed(() => categoriesData.value);

const { data: newsletterBlockData } = await getNewsletterBlockData();
const newsletterBlock = computed(() => newsletterBlockData.value);

const handleSearch = async (value: string) => {
  const { data: searchCategoriesData } = await getCategoriesData({ searchQuery: value });
  categoriesData.value = searchCategoriesData.value;
};

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

.categories-block {
  @include mq-mobile-tablet {
    margin-bottom: 100px;
  }

  @include mq-desktop {
    margin-bottom: 160px;
  }
}
</style>
