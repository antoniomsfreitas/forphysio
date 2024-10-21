<template>
  <div class="blog-slideshow">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12" d="12">
          <h3 class="blog-slideshow__title">
            {{ title }}
          </h3>

          <NuxtLink v-if="linkViewAll" :to="linkViewAll" class="blog-slideshow__view-all">
            <Button type="secondary">
              {{ $t('general.viewAll') }}
            </Button>
          </NuxtLink>

          <Swiper
            v-if="swiperInitialized"
            :init="false"
            class="blog-slideshow__swiper-container"
            :slides-per-view="slidesPerView"
            :speed="400"
            :modules="[SwiperScrollbar, SwiperFreeMode]"
            :space-between="spaceBetween"
            :free-mode="true"
            :scrollbar="{ draggable: true, el: scrollbarRef }"
          >
            <SwiperSlide v-for="item in data" :key="item.id" class="blog-slideshow__swiper-container__slide">
              <BlogCard
                :title="item.title"
                :subtitle="item.subtitle"
                :src="item.imageList.image"
                :slug="item.slug"
                :alt="item.imageList.alt"
                :link-title="$t('general.view-all')"
                :type="type"
              />
            </SwiperSlide>
          </Swiper>
          <div ref="scrollbarRef" class="blog-slideshow__swiper-container__scrollbar swiper-custom-scrollbar" />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
import type { Article, ArticleCategory } from '~/models/blog.model';

defineProps({
  title: {
    type: String,
    required: true,
  },
  data: {
    type: Object as PropType<Article[] | ArticleCategory[]>,
    required: true,
  },
  linkViewAll: {
    type: String,
    required: false,
    default: '',
  },
  type: {
    type: String as PropType<'article' | 'category'>,
    required: false,
    default: 'article',
  },
});

const swiperInitialized = ref(false);
const scrollbarRef = ref<HTMLElement>();

const slidesPerView = computed(() => {
  if (isDesktop.value) {
    return 4;
  } else if (isTablet.value) {
    return 3;
  } else {
    return 2;
  }
});

const spaceBetween = computed(() => (isMobile ? 16 : 24));
onMounted(() => {
  swiperInitialized.value = true;
});
</script>

<style scoped lang="scss">
.blog-slideshow {
  position: relative;
  overflow: hidden;

  &__title {
    margin-bottom: 40px;
  }

  &__swiper-container {
    &__slide {
      max-width: 100%;
    }

    &__scrollbar {
      margin: 40px auto 0;
    }
  }

  &__view-all {
    display: inline-block;
    margin-bottom: 40px;

    .button {
      min-width: 270px;
    }
  }
}
</style>
