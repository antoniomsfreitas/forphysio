<template>
  <div class="container">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12" d="12">
          <h1>{{ $t('pages.privacy-policy') }}</h1>
        </LayoutGridCol>
      </LayoutGridRow>

      <LayoutGridRow v-if="page?.titleTextBlocks" class="faqs-list">
        <LayoutGridCol v-for="block in page?.titleTextBlocks" class="content" m="4" t="12" d="8">
          <p class="title">{{ block.title }}</p>
          <div class="text" v-html="block.text" />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
import { usePrivacyPolicy } from '~/composables/privacy-policy.composable';

const { getPage } = usePrivacyPolicy();
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
  margin-bottom: 100px;

  @include mq-mobile-tablet {
    padding-top: 190px;
  }

  @include mq-desktop {
    padding-top: 150px;
  }

  h1 {
    @include mq-mobile-tablet {
      padding-bottom: 50px;
    }

    @include mq-desktop {
      padding-bottom: 70px;
    }
  }

  .content {
    margin-bottom: 40px;

    .title {
      font-weight: $font-weight-semi-bold;
      margin-bottom: 20px;

      @include mq-mobile-tablet {
        font-size: 24px;
      }

      @include mq-desktop {
        font-size: 32px;
      }
    }

    .text {
      font-weight: 300;
      line-height: 1.5;
      color: $medium-grey;

      @include mq-mobile-tablet {
        font-size: 18px;
      }

      @include mq-desktop {
        font-size: 24px;
      }

      :deep(b),
      :deep(a) {
        display: inline-block;
        color: $white;
      }

      :deep(a) {
        text-decoration: none;
      }

      :deep(ul) {
        padding-top: 10px;

        li {
          display: flex;
          padding-bottom: 12px;

          &::before {
            content: '\2022';
            padding: 0 10px;
          }
        }
      }
    }
  }
}
</style>
