<template>
  <div class="container">
    <LayoutHeader v-if="headerData" :data="headerData" />

    <main>
      <slot />
    </main>

    <LayoutFooter v-if="footerData" :data="footerData" />
  </div>
</template>

<script setup lang="ts">
import { useLayout } from '~/composables/layouts.composable';

useHead({
  title: 'ForPhysio Clinic',
});

const { getLayoutData } = useLayout();
const { data, status } = await getLayoutData();

const headerData = computed(() => data.value?.header);
const footerData = computed(() => data.value?.footer);

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
@include mq-desktop {
  main {
    padding-top: var(--header-height);
  }
}
</style>
