<template>
  <div class="container" :class="{ 'container--is-loaded': isLoaded }">
    <LayoutHeader v-if="headerData" :data="headerData" />
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { useLayout } from '~/composables/layouts.composable';

const { getLayoutData } = useLayout();
const { status, data } = await getLayoutData();

const isLoaded = computed(() => status.value === 'success');
const headerData = computed(() => data.value?.header);
</script>
