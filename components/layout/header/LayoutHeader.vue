<!-- components/layout/header/LayoutHeader.vue -->
<template>
  <header class="header">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12">
          <HeaderDesktop v-if="isDesktop" />
          <HeaderMobile v-else />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </header>
</template>

<style scoped lang="scss">
.header {
  --header-height: 60px;

  display: flex;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: $deep-grey;

  @include mq-mobile-tablet {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  @include mq-desktop {
    --header-height: 80px;
  }

  :deep(.button) {
    min-height: 0;
    padding: 8px 36px;
    font-size: 12px;
    line-height: 1.5;
  }
}
</style>
