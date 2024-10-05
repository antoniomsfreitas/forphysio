<template>
  <div class="location-map">
    <LayoutGrid v-if="title">
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12">
          <h3 class="location-map__title">{{ title }}</h3>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
    <iframe
      width="100%"
      :height="height"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      :src="googleMapsSrc"
    >
    </iframe>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
  },
  height: {
    type: Number,
    required: false,
    default: 470,
  },
  googleMapsSrc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.location-map {
  &__title {
    display: block;
    margin-bottom: 40px;
    color: $white;
    text-align: left;
  }
}
</style>
