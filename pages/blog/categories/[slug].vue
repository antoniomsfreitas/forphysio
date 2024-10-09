<template>
  <div class="container">
    <div class="intro-block">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="4" d="4" class="intro-block__content">
            <h1>{{ $t('pages.blog') }}</h1>

            <CustomInputSearch :placeholder="$t('search.label.category')" @search="handleSearch" />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleSearch = (value: string) => {
  // @TODO
  console.log('Search: ' + value);
};

const { buildBlogPage } = useBlog();
const page = await buildBlogPage();

const emit = defineEmits(['onDataLoaded']);
if (page != null) {
  emit('onDataLoaded');
}
</script>

<style scoped lang="scss">
.intro-block {
  padding: 150px 0 160px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>
