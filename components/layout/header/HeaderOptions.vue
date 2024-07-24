<template>
  <NuxtLink v-if="buttonOption" :to="buttonOption.link" class="button button--secondary">
    {{ buttonOption.name }}
  </NuxtLink>
  <NuxtLink v-if="searchOption" :to="searchOption.link" class="search" :title="searchOption.name">
    <Icon name="icon:search-white" />
  </NuxtLink>
</template>

<script setup lang="ts">
const { searchOption, buttonOption } = useHeader();
</script>
