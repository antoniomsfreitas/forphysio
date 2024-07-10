<template>
  <div class="layout-grid">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout-grid {
  width: 100%;
  margin: 0 auto;

  // mobile
  @include breakpoint-to('lg') {
    padding: 0 24px;
  }

  // tablet or bigger
  @include breakpoint-from('lg') {
    padding: 0 32px;
    max-width: 1504px;
  }
}
</style>
