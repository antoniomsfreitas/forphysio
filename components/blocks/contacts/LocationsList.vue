<template>
  <div class="locations-list">
    <h3>{{ $t('contacts.available-units') }}:</h3>
    <ul>
      <li v-for="location in locations" :key="location.id">
        <p class="title">{{ location.name }}</p>
        <p class="address">{{ location.address }}</p>
        <p class="phone">
          <Icon name="icon:phone" />
          <span>{{ location.phone }}</span>
        </p>
        <p class="hours" v-html="location.hours" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  locationsId: {
    type: Array as PropType<number[]>,
    required: false,
    default: null,
  },
});

const { getLocationsData } = useContacts();
const { data } = await getLocationsData({ idList: props.locationsId });

const locations = computed(() => data?.value);
</script>

<style scoped lang="scss">
.locations-list {
  h3 {
    @include mq-mobile-tablet {
      padding-bottom: 24px;
    }

    @include mq-desktop {
      padding-bottom: 60px;
    }
  }

  ul {
    display: grid;
    gap: 24px;

    @include mq-mobile {
      grid-template-columns: 1fr;
    }

    @include mq-tablet {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @include mq-desktop {
      grid-template-columns: 1fr 1fr;
    }

    li {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 18px;
      font-weight: $font-weight-light;
      line-height: 1.2;

      .title {
        font-size: 20px;
        font-weight: $font-weight-semi-bold;
      }

      .phone {
        display: flex;
        gap: 4px;
        align-items: center;

        span {
          display: block;
        }
      }
    }
  }
}
</style>
