<template>
  <div v-if="article" class="container">
    <LayoutGrid>
      <LayoutGridRow class="intro">
        <LayoutGridCol m="4" t="12" d="12">
          <div class="intro__top">
            <h1>{{ article.title }}</h1>
            <h2>{{ article.subtitle }}</h2>
          </div>
          <div class="intro__bottom">
            <ul class="intro__bottom__categories">
              <li v-for="category in article.categories" :key="category.id">{{ category.title }}</li>
            </ul>

            <span class="intro__bottom__date">{{ article.date.name }}</span>
          </div>
        </LayoutGridCol>
      </LayoutGridRow>

      <LayoutGridRow v-if="article.blocks?.image_1" class="image">
        <LayoutGridCol m="4" t="12" d="12">
          <PictureImage
            :alt="article.blocks?.image_1.alt"
            :src="article.blocks?.image_1.mobile"
            :src-t="article.blocks?.image_1.tablet"
            :src-d="article.blocks?.image_1.desktop"
            cover
          />
        </LayoutGridCol>
      </LayoutGridRow>

      <LayoutGridRow v-if="article?.blocks?.text_1" class="text">
        <LayoutGridCol m="4" t="10" d="8" start-col-t="2" start-col-d="3">
          <p>{{ article.blocks.text_1 }}</p>
        </LayoutGridCol>
      </LayoutGridRow>

      <LayoutGridRow v-if="article?.blocks?.image_2" class="image">
        <LayoutGridCol m="4" t="12" d="12">
          <PictureImage
            :alt="article.blocks.image_2.alt"
            :src="article.blocks.image_2.mobile"
            :src-t="article.blocks.image_2.tablet"
            :src-d="article.blocks.image_2.desktop"
            cover
          />
        </LayoutGridCol>
      </LayoutGridRow>

      <LayoutGridRow v-if="article?.blocks?.text_2" class="text">
        <LayoutGridCol m="4" t="10" d="8" start-col-t="2" start-col-d="3">
          <p>{{ article.blocks.text_2 }}</p>
        </LayoutGridCol>
      </LayoutGridRow>

      <LayoutGridRow v-if="article.author" class="article-author">
        <LayoutGridCol m="4" t="10" d="8" start-col-t="2" start-col-d="3">
          <ArticleAuthor size="large" />
          <Button type="outline">Ver mais artigos deste autor</Button>
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
const { getArticlesData } = useBlog();

const slug = route.params.slug as string;
const localePath = useLocalePath();
const { data, status } = await getArticlesData({ slug: slug });

const article = computed(() => data.value?.[0]);

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
.intro {
  text-align: center;

  @include mq-mobile {
    padding-bottom: 80px;
  }

  @include mq-tablet {
    padding-bottom: 100px;
  }

  @include mq-mobile-tablet {
    padding-top: 190px;
  }

  @include mq-desktop {
    padding-top: 150px;
    padding-bottom: 85px;
  }

  &__top {
    @include mq-mobile {
      padding-bottom: 40px;
    }

    @include mq-tablet {
      padding-bottom: 32px;
    }

    @include mq-desktop {
      padding-bottom: 40px;
    }

    h1 {
      padding-bottom: 10px;
    }

    h2 {
      font-weight: $font-weight-light;
      line-height: 1.2;
      letter-spacing: 0.02em;

      @include mq-mobile-tablet {
        font-size: 32px;
      }

      @include mq-desktop {
        font-size: 48px;
      }
    }
  }

  &__bottom {
    font-weight: $font-weight-light;
    line-height: 1.2;

    @include mq-mobile-tablet {
      font-size: 18px;
    }

    @include mq-desktop {
      font-size: 20px;
    }

    &__categories {
      &,
      li {
        display: flex;
        gap: 6px;
        align-items: center;
        justify-content: center;
      }

      li {
        &:not(:last-child)::after {
          content: '\2022';
        }
      }
    }
  }
}

.image {
  picture {
    border-radius: 10px;

    :deep(img) {
      @include mq-mobile {
        height: 500px;
      }

      @include mq-tablet {
        height: 600px;
      }

      @include mq-desktop {
        height: 800px;
      }
    }
  }
}

.image,
.text {
  margin-bottom: 80px;
}

.text {
  p {
    font-weight: $font-weight-light;
    line-height: 1.5;
    color: $medium-grey;

    @include mq-mobile {
      font-size: 18px;
    }

    @include mq-tablet {
      font-size: 20px;
    }

    @include mq-desktop {
      font-size: 24px;
    }
  }
}

.article-author {
  margin-bottom: 350px;
  text-align: center;

  .author {
    justify-content: center;
    margin-bottom: 32px;
  }

  .button {
    @include mq-tablet-desktop {
      min-width: 340px;
    }
  }
}
</style>
