<template>
  <div class="container">
    <IntroBlock :page-title="page?.introBlock?.title || $t('pages.team')" class="intro-block">
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
        <p v-if="page?.introBlock?.text" class="intro-block__text">{{ page.introBlock.text }}</p>

        <IconLink :link="localePath(Routes.SERVICES)" :text="$t('general.book-evaluation')" />
      </template>
    </IntroBlock>

    <TeamList class="team-list-block"></TeamList>

    <RecruitmentBlock />
  </div>
</template>

<script setup lang="ts">
import { Routes } from '~/models/routes.model';

const localePath = useLocalePath();
const { getPage } = useTeam();
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

  &__text {
    color: $medium-grey;

    @include mq-mobile-tablet {
      margin-bottom: 40px;
    }

    @include mq-desktop {
      margin-bottom: 60px;
    }
  }
}

.team-list-block {
  @include mq-mobile {
    margin-bottom: 100px;
  }

  @include mq-tablet-desktop {
    margin-bottom: 160px;
  }
}
</style>
