<template>
  <div class="container">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12" d="12">
          <h1 v-t="'faqs.title'" />
        </LayoutGridCol>
      </LayoutGridRow>

      <LayoutGridRow v-if="faqs" class="faqs-list">
        <LayoutGridCol m="4" t="6" d="5">
          <ul>
            <li v-for="faq in faqs.slice(0, 6)" :key="faq.answer">
              <h3>{{ faq.question }}</h3>
              <p>{{ faq.answer }}</p>
            </li>
          </ul>
        </LayoutGridCol>
        <LayoutGridCol m="4" t="6" d="5" start-col-d="7">
          <ul>
            <li v-for="faq in faqs.slice(6)" :key="faq.answer">
              <h3>{{ faq.question }}</h3>
              <p>{{ faq.answer }}</p>
            </li>
          </ul>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
const { getFAQs } = useFAQs();
const { data, status } = await getFAQs();

const faqs = computed(() => data.value);

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
    line-height: 1.2;

    @include mq-mobile {
      font-size: 52px;
      letter-spacing: 0.8px;
    }

    @include mq-mobile-tablet {
      padding-bottom: 50px;
    }

    @include mq-desktop {
      padding-bottom: 70px;
    }
  }

  .faqs-list {
    ul {
      @include mq-mobile {
        &:first-child {
          margin-bottom: 48px;
        }
      }

      li {
        margin-bottom: 60px;

        &:last-child {
          margin-bottom: 0;
        }

        h3 {
          padding-bottom: 20px;
          line-height: 1.1;
        }

        p {
          font-weight: $font-weight-light;
          line-height: 1.3;
          color: $medium-grey;

          @include mq-mobile-tablet {
            font-size: 16px;
          }

          @include mq-desktop {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
