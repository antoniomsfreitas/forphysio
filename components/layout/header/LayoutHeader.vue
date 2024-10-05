<template>
  <header class="header">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol m="4" t="12">
          <HeaderDesktop
            :main-menu="data.mainMenu"
            :search-option="data.searchOption"
            :button-option="data.buttonOption"
          />

          <HeaderMobile
            :main-menu="data.mainMenu"
            :search-option="data.searchOption"
            :button-option="data.buttonOption"
          />
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </header>

  <NuxtLink to="/" class="header__logo-mobile">
    <NuxtImg src="/images/common/logo/logo-mini-white.png" sizes="56px" />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { HeaderMenu } from '~/models/layout.model';

defineProps({
  data: {
    type: Object as PropType<HeaderMenu>,
    required: true,
  },
});
</script>

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

    &__logo-mobile {
      display: block;
    }
  }

  @include mq-desktop {
    --header-height: 80px;

    &__logo-mobile {
      display: none;
    }
  }

  &__logo-mobile {
    position: absolute;
    top: 28px;
    left: 24px;
    z-index: 999;
    opacity: 0;
    animation: 250ms forwards fade-in;

    img {
      width: 56px;
      object-fit: contain;
    }
  }

  :deep(.button) {
    min-height: 0;
    padding: 8px 36px;
    font-size: 12px;
    line-height: 1.5;
  }
}
</style>
