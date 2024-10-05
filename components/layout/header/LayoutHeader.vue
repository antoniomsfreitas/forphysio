<template>
  <header ref="headerRef" class="header" :style="isDesktop ? headerFixedStyles : null">
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
import { useFixedHeader } from 'vue-use-fixed-header';

defineProps({
  data: {
    type: Object as PropType<HeaderMenu>,
    required: true,
  },
});

const headerRef = ref(null);

const { styles: headerFixedStyles } = useFixedHeader(headerRef);
</script>

<style scoped lang="scss">
.header {
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
    position: fixed;
    top: 0;
    left: 0;

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
