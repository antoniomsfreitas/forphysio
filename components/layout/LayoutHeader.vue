<!-- components/LayoutHeader.vue -->
<template>
  <header class="header">
    <LayoutGrid>
      <LayoutGridRow>
        <LayoutGridCol v-if="!isMobile" m="4" t="12" class="header__inner">
          <div class="header__inner__left">
            <NuxtLink to="/">
              <NuxtImg src="/logo/logo-white.png" sizes="92px" />
            </NuxtLink>
          </div>
          <div class="header__inner__right">
            <ul class="header__inner__right__menu">
              <li class="header__inner__right__menu__item">
                <NuxtLink to="/sobre-nos">Sobre</NuxtLink>
              </li>
              <li class="header__inner__right__menu__item">
                <NuxtLink to="/equipa">Equipa</NuxtLink>
              </li>
              <li class="header__inner__right__menu__item">
                <NuxtLink to="/servicos">Serviços</NuxtLink>
              </li>
              <li class="header__inner__right__menu__item">
                <NuxtLink to="/acordos">Acordos</NuxtLink>
              </li>
              <li class="header__inner__right__menu__item">
                <NuxtLink to="/blog">Blog</NuxtLink>
              </li>
              <li class="header__inner__right__menu__item">
                <NuxtLink to="/contactos">Contactos</NuxtLink>
                <ul class="header__inner__right__menu__item__submenu">
                  <li class="header__inner__right__menu__item__submenu__item">
                    <NuxtLink to="/acordos">Acordos</NuxtLink>
                  </li>
                  <li class="header__inner__right__menu__item__submenu__item">
                    <NuxtLink to="/blog">Blog</NuxtLink>
                  </li>
                  <li class="header__inner__right__menu__item__submenu__item">
                    <NuxtLink to="/contactos">Contactos</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="header__inner__right__options">
              <NuxtLink to="/pesquisa">
                <Icon name="icon:search-white" />
              </NuxtLink>
              <NuxtLink to="/contactos" class="button button--secondary">Marcar consulta</NuxtLink>
            </div>
          </div>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>
  </header>
</template>

<script setup lang="ts">
import { isMobile } from '~/utils/viewport.util';
</script>

<style scoped lang="scss">
.header {
  --header-height: 60px;

  display: flex;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: $deep-grey;
  border-bottom: 1px solid $deep-grey;

  @include breakpoint-to('t') {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  @include breakpoint-between('t', 'd') {
    --header-height: 75px;
  }

  @include breakpoint-from('d') {
    --header-height: 80px;
  }

  .layout-grid,
  .layout-grid-row {
    height: 100%;
  }

  &__inner {
    justify-content: space-between;

    &,
    &__right,
    &__right__menu,
    &__right__menu__item {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &__right {
      gap: 80px;

      &__menu {
        gap: 24px;

        &__item {
          position: relative;

          & > a {
            font-size: 18px;
            font-weight: $font-weight-light;
            line-height: 1.2;
            color: $white;
            text-decoration: none;
          }

          &__submenu {
            position: absolute;
            top: var(--header-height);
            left: -12px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            min-width: 416px;
            padding: 16px 40px 104px 48px;
            background-color: $deep-grey;

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
              }

              &--underline a {
                text-decoration: underline;
              }
            }
          }
        }
      }

      &__options {
        display: flex;
        gap: 24px;
        align-items: center;

        .button {
          min-height: 0;
          padding: 8px 36px;
          font-size: 12px;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
