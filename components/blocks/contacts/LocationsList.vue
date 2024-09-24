<template>
  <div class="locations-list">
    <h3>{{ $t('contacts.available-units') }}:</h3>
    <ul>
      <li v-for="location in locations">
        <p class="title">{{ location.name }}</p>
        <p class="address">{{ location.address }}</p>
        <p class="phone">
          <Icon name="icon:phone" />
          <span>{{ location.phone }}</span>
        </p>
        <p class="hours" v-html="location.hours"></p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { locations } = useContacts();
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
      font-size: 18px;
      line-height: 1.2;
      font-weight: $font-weight-light;
      display: flex;
      flex-direction: column;
      gap: 8px;

      .title {
        font-size: 20px;
        font-weight: $font-weight-semi-bold;
      }

      .phone {
        display: flex;
        align-items: center;
        gap: 4px;

        span {
          display: block;
        }
      }
    }
  }
}
</style>
