<template>
  <div class="partners-block">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12" d="12">
          <div class="partners-block__intro">
            <h3 v-t="'partnerships.partners.title'" />
            <p v-t="'partnerships.partners.subtitle'" />
          </div>

          <ul>
            <li v-for="partner in partners">
              <NuxtLink :to="partner.link" :title="partner.title" class="partner">
                <img :src="partner.image" :alt="partner.title" />
                <span>{{ partner.title }}</span>
              </NuxtLink>
            </li>
          </ul>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </div>
</template>

<script setup lang="ts">
import type { Partner } from '~/models/partnerships.model';

defineProps({
  partners: {
    type: Object as PropType<Partner[]>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.partners-block {
  padding: 116px 0;
  text-align: center;
  background-color: $deep-grey;

  &__intro {
    @include mq-mobile-tablet {
      margin-bottom: 32px;
    }

    @include mq-desktop {
      margin-bottom: 64px;
    }

    h3 {
      margin-bottom: 18px;
    }

    p {
      font-weight: $font-weight-light;
      line-height: 1.2;

      @include mq-mobile {
        font-size: 16px;
      }

      @include mq-tablet-desktop {
        font-size: 18px;
      }
    }
  }

  ul {
    display: grid;

    @include mq-mobile-tablet {
      row-gap: 40px;
    }

    @include mq-mobile {
      grid-template-columns: repeat(3, 1fr);
    }

    @include mq-tablet {
      grid-template-columns: repeat(4, 1fr);
    }

    @include mq-desktop {
      grid-template-columns: repeat(6, 1fr);
      row-gap: 60px;
    }

    li {
      .partner {
        display: flex;
        flex-direction: column;
        gap: 14px;
        align-items: center;

        img {
          width: 100px;
          height: 100px;
        }

        span {
          width: 100%;
          font-size: 18px;
          line-height: 1.2;
          font-weight: $font-weight-light;
          text-align: center;
        }
      }
    }
  }
}
</style>
