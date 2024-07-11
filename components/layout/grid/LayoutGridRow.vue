<template>
  <div class="layout-grid-row">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout-grid-row {
  display: grid;

  @include breakpoint-to('t') {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
  }

  @include breakpoint-from('t') {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
  }
}
</style>
