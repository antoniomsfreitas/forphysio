<template>
  <div class="container">
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
const { data, status } = await getLayoutData();

const headerData = computed(() => data.value?.header);

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
