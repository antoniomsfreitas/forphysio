<!-- components/layout/header/LayoutHeader.vue -->
<template>
  <div class="header__inner">
    <div class="header__inner__left">
      <NuxtLink :to="localePath('/')" title="ForPhysio">
        <NuxtImg
          class="header__inner__left__logo"
          src="/images/common/logo/logo-white.png"
          sizes="92px"
          alt="ForPhysio"
        />
      </NuxtLink>

      <LanguageSwitcher orientation="vertical" />
    </div>

    <div class="header__inner__right">
      <ul class="header__inner__right__menu">
        <li v-for="menu in mainMenu" :key="menu.name" class="header__inner__right__menu__item">
          <NuxtLink :to="localePath(menu.route)">
            <span>{{ $t(menu.name) }}</span>
            <Icon v-if="menu.submenu?.length" name="icon:arrow-down" />
          </NuxtLink>

          <ul v-if="menu.submenu?.length" class="header__inner__right__menu__item__submenu">
            <li
              v-for="submenu in menu.submenu"
              :key="submenu.name"
              class="header__inner__right__menu__item__submenu__item"
              :class="{
                'header__inner__right__menu__item__submenu__item--view-all': submenu.viewAll,
              }"
            >
              <NuxtLink :to="localePath(submenu.route)">{{ $t(submenu.name) }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>

      <div class="header__inner__right__options">
        <NuxtLink :to="searchOption.route" :title="$t(searchOption.name)">
          <Icon name="icon:search-white" />
        </NuxtLink>

        <NuxtLink :to="buttonOption.route" class="button button--secondary">
          {{ $t(buttonOption.name) }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HeaderMenuOption } from '~/models/layout.model';
const localePath = useLocalePath();

defineProps({
  mainMenu: {
    type: Object as PropType<HeaderMenuOption[]>,
    required: true,
  },
  searchOption: {
    type: Object as PropType<HeaderMenuOption>,
    required: true,
  },
  buttonOption: {
    type: Object as PropType<HeaderMenuOption>,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.header {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    height: var(--header-height);

    &__left {
      display: flex;
      gap: 24px;
      align-items: center;
      height: 100%;

      &__logo {
        width: 92px;
        object-fit: contain;
      }
    }

    &__right {
      gap: 80px;

      &,
      &__menu,
      &__menu__item,
      &__menu__item > a {
        display: flex;
        align-items: center;
        height: 100%;
      }

      &__menu {
        gap: 24px;

        &__item {
          position: relative;

          & > a {
            height: 100%;
            font-size: 18px;
            font-weight: $font-weight-light;
            line-height: 1.2;
            color: $white;
            text-decoration: none;
            transition: $transition-duration ease-in-out color;

            &.router-link-active {
              color: $blue;
            }

            .icon {
              margin-left: 4px;
            }
          }

          &__submenu {
            position: absolute;
            top: var(--header-height);
            left: -12px;
            display: flex;
            flex-direction: column;
            min-width: 430px;
            padding: 16px 40px 84px 48px;
            visibility: hidden;
            background-color: $deep-grey;
            opacity: 0;
            transition: $transition-duration ease-in-out opacity;

            &__item {
              position: relative;
              z-index: 2;
              border-bottom: 1px solid $border-grey;

              a {
                display: block;
                padding: 20px 0;
                font-size: 16px;
                font-weight: $font-weight-light;
                color: $white;
                text-decoration: none;
                transition: $transition-duration ease-in-out color;
              }

              &--view-all {
                order: 1;
                border: none;

                a {
                  text-decoration: underline;
                }
              }

              &:hover > a {
                color: $blue;
              }
            }
          }

          &:hover {
            ul {
              visibility: visible;
              opacity: 1;
            }

            & > a {
              color: $blue;
            }
          }
        }
      }

      &__options {
        display: flex;
        gap: 24px;
        align-items: center;
        height: 100%;
      }
    }
  }
}
</style>
