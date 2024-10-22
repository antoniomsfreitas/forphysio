<template>
  <div class="container">
    <IntroBlock :page-title="$t('pages.about')" class="intro-block">
      <template v-if="page?.introBlock?.image" #image>
        <PictureImage
          :alt="page.introBlock.image.alt"
          :src="page.introBlock.image.mobile"
          :src-t="page.introBlock.image.tablet"
          :src-d="page.introBlock.image.desktop"
          :cover="true"
        />
      </template>

      <template #content>
        <ul v-if="page?.introBlock?.topics" class="intro-block__topics">
          <li v-for="topic in page.introBlock.topics" :key="topic.title" class="intro-block__topics__item">
            <p class="intro-block__topics__item__title">
              {{ topic.title }}
            </p>
            <p class="intro-block__topics__item__description">
              {{ topic.text }}
            </p>
          </li>
        </ul>
        <IconLink :link="localePath(Routes.SERVICES)" :text="$t('general.book-evaluation')" />
      </template>
    </IntroBlock>

    <div v-if="page?.textBlock_1" class="container-block">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="12" d="12">
            <h2>{{ page.textBlock_1?.title }}</h2>
          </LayoutGridCol>
        </LayoutGridRow>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="6" d="6">
            <p>{{ page.textBlock_1?.textCol1 }}</p>
          </LayoutGridCol>
          <LayoutGridCol m="4" t="6" d="6">
            <p>{{ page.textBlock_1?.textCol2 }}</p>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <div v-if="page?.imageFullwidth" class="container-block">
      <ImageFullwidth :data="page.imageFullwidth" />
    </div>

    <div v-if="page?.textBlock_2" class="container-block">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="12" d="12">
            <h2>{{ page.textBlock_2.title }}</h2>
          </LayoutGridCol>
        </LayoutGridRow>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="6" d="6">
            <p>{{ page.textBlock_2?.textCol1 }}</p>
          </LayoutGridCol>
          <LayoutGridCol m="4" t="6" d="6">
            <p>{{ page.textBlock_2?.textCol2 }}</p>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <div v-if="page?.sideImage" class="container-block container-block--with-image">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="7" d="8" start-col-t="6" start-col-d="5">
            <PictureImage
              :alt="page.sideImage.alt"
              :src="page.sideImage.mobile"
              :src-t="page.sideImage.tablet"
              :src-d="page.sideImage.desktop"
            />
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>

    <div v-if="page?.textBlock_3" class="container-block">
      <LayoutGrid>
        <LayoutGridRow>
          <LayoutGridCol m="4" t="7" d="7">
            <p>{{ page.textBlock_3?.text }}</p>
          </LayoutGridCol>
        </LayoutGridRow>
      </LayoutGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';

const localePath = useLocalePath();
const { getPage } = useAboutPage();
const { data, status } = await getPage();

const page = computed(() => data.value);

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
.container {
  padding-bottom: 20px;
}

.intro-block {
  @include mq-mobile {
    margin-bottom: 100px;
  }

  @include mq-tablet {
    margin-bottom: 140px;
  }

  @include mq-desktop {
    margin-bottom: 160px;
  }

  &__topics {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @include mq-mobile-tablet {
      margin-bottom: 40px;
    }

    @include mq-desktop {
      margin-bottom: 60px;
    }

    &__item {
      &__title {
        padding-bottom: 4px;
        font-weight: $font-weight-semi-bold;
        text-transform: uppercase;
        color: $white;
      }
    }
  }
}

.container-block {
  margin-bottom: 80px;

  h2 {
    margin-bottom: 40px;
    line-height: 1.3;

    @include mq-desktop {
      font-size: 64px;
    }

    @include mq-tablet {
      font-size: 60px;
    }

    @include mq-mobile {
      font-size: 50px;
    }
  }

  p {
    font-weight: $font-weight-light;
    line-height: 1.5;
    color: $medium-grey;

    @include mq-desktop {
      font-size: 24px;
    }

    @include mq-tablet {
      font-size: 20px;
    }

    @include mq-mobile {
      font-size: 18px;
    }
  }

  &__image {
    &--right {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @include mq-mobile {
    &--with-image {
      .layout-grid {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
}
</style>
