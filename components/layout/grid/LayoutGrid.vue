<template>
  <div class="layout-grid">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.layout-grid {
  width: 100%;
  margin: 0 auto;

  @include breakpoint-to('t') {
    padding: 0 24px;
  }

  @include breakpoint-from('t') {
    max-width: 1504px;
    padding: 0 32px;
  }
}
</style>
