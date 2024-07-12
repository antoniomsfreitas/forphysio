<template>
  <a :href="props.link" :title="props.text" class="icon-link">
    <span>{{ props.text }}</span>
    <Icon name="icon:link-arrow" size="50px" mode="svg" />
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.icon-link {
  font-size: 36px;
  font-weight: 300; // alterar para a variavel quando estiver disponível

  svg path {
    fill: #fff;
  }
}
</style>
