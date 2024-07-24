<!-- components/layout/header/LayoutHeader.vue -->
<template>
  <div class="header__inner">
    <div class="header__inner__left">
      <NuxtLink to="/">
        <NuxtImg src="/logo/logo-white.png" sizes="92px" />
      </NuxtLink>
      <LanguageSwitcher orientation="vertical" />
    </div>
    <div class="header__inner__right">
      <ul class="header__inner__right__menu">
        <li v-for="(menu, index) in mainMenu" :key="index" class="header__inner__right__menu__item">
          <NuxtLink :to="menu.link">
            {{ menu.name }}
            <Icon v-if="menu.submenu.length" name="icon:arrow-down" />
          </NuxtLink>

          <ul v-if="menu.submenu.length" class="header__inner__right__menu__item__submenu">
            <li
              v-for="(submenu, subIndex) in menu.submenu"
              :key="subIndex"
              class="header__inner__right__menu__item__submenu__item"
              :class="{
                'header__inner__right__menu__item__submenu__item--view-all': submenu.viewAll,
              }"
            >
              <NuxtLink :to="submenu.link">{{ submenu.name }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
      <div class="header__inner__right__options">
        <HeaderOptions />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { mainMenu } = useHeader();
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

              &--view-all {
                order: 1;
                border: none;

                a {
                  text-decoration: underline;
                }
              }

              a {
                display: block;
                padding: 20px 0;
                font-size: 16px;
                font-weight: $font-weight-light;
                color: $white;
                text-decoration: none;
                transition: $transition-duration ease-in-out color;

                &:hover {
                  color: $blue;
                }
              }
            }
          }

          &:hover {
            ul {
              visibility: visible;
              opacity: 1;
            }
          }
        }
      }

      &__options {
        display: flex;
        gap: 24px;
        align-items: center;
        height: 100%;

        :deep(.button) {
          order: 1;
        }
      }
    }
  }
}
</style>
