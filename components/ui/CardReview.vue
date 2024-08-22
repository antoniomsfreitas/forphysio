<template>
  <CardUI class="card-customer-review">
    <div class="card-customer-review__info">
      <div class="card-customer-review__info__stars">
        <Icon v-for="index in stars" :key="index" name="icon:star" class="card-customer-review__info__stars__star" />
      </div>

      <p class="card-customer-review__info__review">{{ review }}</p>
    </div>

    <div class="card-customer-review__author">
      <img :src="photo" :alt="alt" class="card-customer-review__author__img" >
      <span class="card-customer-review__author__name">{{ author }}</span>
    </div>
  </CardUI>
</template>

<script setup lang="ts">
defineProps({
  author: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    default: 5,
  },
});
</script>

<style setup lang="scss">
.card-customer-review {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  min-height: 390px;
  padding: 14px 30px;
  background-color: $white;

  &__info {
    &__stars {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }

    &__review {
      font-size: 14px;
      font-weight: $font-weight-light;
      line-height: 16px;
      color: $deep-grey;
      white-space: pre-wrap;
    }
  }

  &__author {
    display: flex;
    gap: 24px;
    align-items: center;

    &__img {
      flex: 0 0 68px;
    }

    &__name {
      font-size: 20px;
      font-weight: $font-weight-semi-bold;
      line-height: 24px;
      color: $deep-grey;
      white-space: pre-wrap;
    }
  }
}
</style>
