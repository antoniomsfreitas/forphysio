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

  <NuxtLink v-if="!isDesktop" to="/" class="logo-mobile">
    <NuxtImg src="/images/common/logo/logo-mini-white.png" sizes="56px" />
  </NuxtLink>
</template>

<style scoped lang="scss">
.header {
  --header-height: 60px;

  position: relative;
  z-index: 9999;
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

.logo-mobile {
  position: absolute;
  top: 28px;
  left: 24px;
  z-index: 999;
}
</style>
