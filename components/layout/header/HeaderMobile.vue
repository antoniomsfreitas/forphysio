<!-- components/layout/header/LayoutHeader.vue -->
<template>
  <div class="header__inner">
    <div class="header__inner__bottom-bar">
      <Icon name="icon:hamburger-menu" size="29" @click="toggleMenuSidebar" />

      <HeaderOptions />
    </div>

    <div class="header__inner__sidebar" :class="{ 'header__inner__sidebar--opened': menuSidebarOpened }">
      <div class="header__inner__sidebar__top">
        <NuxtLink to="/">
          <NuxtImg src="/logo/logo-white.png" sizes="92px" />
        </NuxtLink>

        <Icon name="icon:close" @click="toggleMenuSidebar" />
      </div>

      <ul class="header__inner__sidebar__menu">
        <li v-for="(menu, index) in mainMenu" :key="index" class="header__inner__sidebar__menu__item">
          <NuxtLink :to="menu.submenu.length ? undefined : menu.link" @click.prevent="toggleSubmenu(index)">
            {{ menu.name }}
            <Icon v-if="menu.submenu.length" name="icon:arrow-right" />
          </NuxtLink>

          <div
            v-if="menu.submenu.length"
            class="header__inner__sidebar__menu__item__submenu"
            :class="{ 'header__inner__sidebar__menu__item__submenu--opened': isSubmenuOpened(index) }"
          >
            <div class="header__inner__sidebar__menu__item__submenu__top">
              <Icon name="icon:arrow-left" @click.prevent="toggleSubmenu(null)" />
              <Icon name="icon:close" @click="toggleMenuSidebar" />
            </div>

            <ul>
              <li>
                <span class="header__inner__sidebar__menu__item__submenu__parent">
                  {{ menu.name }}
                </span>
              </li>
              <li
                v-for="(submenu, subIndex) in menu.submenu"
                :key="subIndex"
                class="header__inner__sidebar__menu__item__submenu__item"
                :class="{
                  'header__inner__sidebar__menu__item__submenu__item--view-all': submenu.viewAll,
                }"
              >
                <NuxtLink :to="submenu.link">{{ submenu.name }}</NuxtLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <LanguageSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
const { mainMenu } = useHeader();

const menuSidebarOpened = ref<boolean>(false);
const submenuOpened = ref<number | null>(null);

const toggleMenuSidebar = () => {
  menuSidebarOpened.value = !menuSidebarOpened.value;
  submenuOpened.value = null;
};

const toggleSubmenu = (index: number | null) => {
  submenuOpened.value = index;
};

const isSubmenuOpened = (index: number) => {
  return submenuOpened.value == index;
};
</script>

<style scoped lang="scss">
.header__inner {
  height: var(--header-height);

  &__bottom-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__sidebar {
    &,
    &__menu__item__submenu {
      position: fixed;
      top: 0;
      left: -100vw;
      display: none;
      width: 100vw;
      height: 100vh;
      padding: 80px 44px;
      overflow-y: scroll;
      background-color: $deep-grey;
      transition: $transition-duration ease-in-out left;
      animation: sidebar-out 200ms;

      &--opened {
        left: 0;
        display: block;
        animation: sidebar-in 200ms;
      }

      &__top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      }
    }

    &__menu {
      margin-bottom: 40px;

      &__item {
        a,
        &__submenu__parent {
          font-size: 16px;
          line-height: 1.2;
          color: $white;
          text-decoration: none;
        }

        a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 8px;
          font-weight: $font-weight-light;
          border-bottom: 1px solid $border-grey;
        }

        &__submenu {
          z-index: 999;

          &__top {
            padding-bottom: 40px;
          }

          &__parent {
            display: block;
            padding: 0 8px 12px;
            font-weight: $font-weight-semi-bold;
          }

          &__item--view-all a {
            text-decoration: underline;
          }
        }
      }
    }

    .icon {
      cursor: pointer;
    }
  }
}

@keyframes sidebar-in {
  from {
    left: -100vw;
    display: none;
  }

  to {
    left: 0;
    display: block;
  }
}

@keyframes sidebar-out {
  from {
    left: 0;
    display: block;
  }

  to {
    left: -100vw;
    display: none;
  }
}
</style>
