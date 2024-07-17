<!-- components/LayoutHeader.vue -->
<template>
  <header class="header">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12" class="header__inner">
          <NuxtImg v-if="!isMobile" src="/logo/logo-white.png" sizes="92px"/>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </header>
</template>

<script setup lang="ts">
import { isMobile } from '~/utils/viewport.util';
</script>

<style scoped lang="scss">
header {
  width: 100%;
  background-color: $deep-grey;

  @include breakpoint-to('t') {
    position: fixed;
    bottom: 0;
    left: 0;
    min-height: 60px;
    padding: 14px 0;
  }

  @include breakpoint-between('t', 'd') {
    min-height: 75px;
    padding: 16px 0;
  }

  @include breakpoint-from('d') {
    min-height: 80px;
    padding: 19px 0;
  }
}
</style>
