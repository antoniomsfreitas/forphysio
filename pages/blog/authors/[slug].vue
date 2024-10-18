<template>
  <div class="container">
    <div v-if="member" class="author-detail">
      <IntroMember class="author-detail__intro" :member="member" :resume="true" />

      <LayoutGrid v-if="member?.articles" class="author-detail__articles">
        <LayoutGridRow>
          <LayoutGridCol v-for="article in member?.articles" :key="article.id" m="2" t="3" d="3">
            <BlogCard
              :title="article.title"
              :subtitle="article.subtitle"
              :src="article.imageList.image"
              :slug="article.slug"
              :alt="article.imageList.alt"
              :link-title="$t('general.view-all')"
            />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
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
const localePath = useLocalePath();
const { getAuthorsData } = useBlog();

const slug = route.params.slug as string;

const { data, status } = await getAuthorsData({ slug: slug });
const member = computed(() => data.value?.[0]);

const emit = defineEmits(['onDataLoaded']);
watch(
  status,
  (newStatus) => {
    if (newStatus !== 'success') {
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
.author-detail {
  &__intro {
    @include mq-mobile {
      margin-top: 190px;
    }

    @include mq-mobile-tablet {
      margin-bottom: 150px;
    }

    @include mq-tablet-desktop {
      margin-top: 150px;
    }

    @include mq-desktop {
      margin-bottom: 250px;
    }
  }

  &__articles {
    @include mq-mobile-tablet {
      margin-bottom: 100px;
    }

    @include mq-desktop {
      margin-bottom: 150px;
    }
  }
}
</style>
