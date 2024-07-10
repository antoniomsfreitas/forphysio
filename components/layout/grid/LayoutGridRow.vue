<template>
  <div class="layout-grid-row">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout-grid-row {
  display: grid;

  // mobile
  @include breakpoint-to('lg') {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
  }

  // tablet or bigger
  @include breakpoint-from('lg') {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
  }
}
</style>
