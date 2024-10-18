<template>
  <div class="container">
    <LayoutGrid>
      <LayoutGridRow class="intro-block">
        <LayoutGridCol m="4" t="6" d="4" class="intro-block__content">
          <h1>{{ $t('blog.authors') }}</h1>
        </LayoutGridCol>
      </LayoutGridRow>

      <LayoutGridRow v-if="authors" class="team-block">
        <LayoutGridCol m="4" t="12" d="8" start-col-d="3">
          <LayoutGrid>
            <LayoutGridRow :col-number-tablet="12" :col-number-desktop="8">
              <LayoutGridCol v-for="author in authors" :key="author.id" m="2" t="3" d="2">
                <CardTeam
                  :title="author.name"
                  :subtitle="author.role"
                  :src="author.image"
                  :alt="author.name"
                  :link="localePath({ name: Routes.BLOG_AUTHORS_SLUG, params: { slug: author.slug } })"
                  class="member"
                />
              </LayoutGridCol>
            </LayoutGridRow>
          </LayoutGrid>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>

    <NewsletterBlock v-if="newsletterBlock" :data="newsletterBlock" />
  </div>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';

const localePath = useLocalePath();
const { getAuthorsData } = useBlog();
const { data: authorsData, status } = await getAuthorsData();
const authors = computed(() => authorsData.value);

const { getNewsletterBlockData } = useHomepageBlocks();
const { data: newsletterBlockData } = await getNewsletterBlockData();
const newsletterBlock = computed(() => newsletterBlockData.value);

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
    padding: 150px 0 100px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}

.team-block {
  .layout-grid {
    padding: 0;

    .layout-grid-row {
      @include mq-mobile {
        max-width: 360px;
        margin: 0 auto;
      }
    }
  }

  @include mq-mobile-tablet {
    margin-bottom: 100px;
  }

  @include mq-desktop {
    margin-bottom: 160px;
  }
}
</style>
