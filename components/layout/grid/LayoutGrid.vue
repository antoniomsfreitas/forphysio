<template>
  <div class="layout-grid">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout-grid {
  width: 100%;
  margin: 0 auto;

  @include breakpoint-to('t') {
    padding: 0 24px;
  }

  @include breakpoint-from('t') {
    padding: 0 32px;
    max-width: 1504px;
  }
}
</style>
