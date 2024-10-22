<template>
  <footer class="footer">
    <LayoutGrid>
      <LayoutGridRow class="footer__inner">
        <LayoutGridCol m="4" t="12" d="3" class="footer__inner__logo" start-col-d="2">
          <NuxtLink to="/">
            <NuxtImg src="/images/common/logo/logo-white.png" sizes="m:85px t:150px d:150px" />
          </NuxtLink>
        </LayoutGridCol>
        <LayoutGridCol m="4" t="12" d="7" class="footer__inner__nav">
          <ul v-if="mainMenuLeft.length" class="footer__inner__nav__main-menu footer__inner__nav__main-menu--left">
            <li v-for="menu in mainMenuLeft" :key="menu.name" class="footer__inner__nav__main-menu__item">
              <NuxtLink :to="localePath(menu.route.name)" :title="$t(menu.name)">
                {{ $t(menu.name) }}
              </NuxtLink>
            </li>
          </ul>

          <ul v-if="mainMenuRight.length" class="footer__inner__nav__main-menu footer__inner__nav__main-menu--right">
            <li v-for="menu in mainMenuRight" :key="menu.name" class="footer__inner__nav__main-menu__item">
              <NuxtLink :to="localePath(menu.route.name)" :title="$t(menu.name)">
                {{ $t(menu.name) }}
              </NuxtLink>
            </li>
          </ul>

          <ul v-if="contactsFooter" class="footer__inner__nav__social-menu">
            <li v-for="menu in contactsFooter" :key="menu.name" class="footer__inner__nav__social-menu__item">
              <NuxtLink :to="menu.link" :title="menu.name" target="__blank">
                <Icon :name="'icon:' + menu.icon" />
              </NuxtLink>
            </li>
          </ul>

          <ul v-if="data.logosMenu.length" class="footer__inner__nav__logos-menu">
            <li v-for="menu in data.logosMenu" :key="menu.name">
              <NuxtLink :to="menu.link" :title="menu.name" target="__blank">
                <NuxtImg :src="'/images/common/external-logos/' + menu.image" height="36px" />
              </NuxtLink>
            </li>
          </ul>
        </LayoutGridCol>
      </LayoutGridRow>
    </LayoutGrid>

    <p class="footer__copyright">
      {{ $t('general.forphysio-clinic') }} {{ currentYear }} &copy; {{ $t('general.copyright') }}
    </p>
  </footer>
</template>

<script setup lang="ts">
import type { FooterMenu } from '~/models/layout.model';

const props = defineProps({
  data: {
    type: Object as PropType<FooterMenu>,
    required: true,
  },
});

const localePath = useLocalePath();
const { getContactsData } = useContacts();

const { data: contactsData } = await getContactsData({ footer: true });
const contactsFooter = computed(() => contactsData.value);

const mainMenu = computed(() => props.data.mainMenu);
const [mainMenuLeft, mainMenuRight] = [
  mainMenu.value.slice(0, mainMenu.value.length >> 1),
  mainMenu.value.slice(mainMenu.value.length >> 1),
];

const currentYear = new Date().getFullYear();
</script>

<style scoped lang="scss">
.footer {
  background-color: $deep-grey;

  &__inner {
    @include mq-mobile {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    @include mq-mobile-tablet {
      row-gap: 32px;
    }

    @include mq-tablet-desktop {
      padding-top: 82px;
      padding-bottom: 90px;
    }

    &__logo a {
      display: block;

      img {
        @include mq-mobile {
          max-width: 85px;
        }

        @include mq-tablet-desktop {
          max-width: 150px;
        }
      }
    }

    &__nav {
      display: grid;
      width: max-content;

      @include mq-mobile {
        grid-template-areas:
          'social-menu social-menu'
          'main-menu-left main-menu-right'
          'logos-menu logos-menu';
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;
        column-gap: 24px;
        width: 100%;
      }

      @include mq-tablet {
        column-gap: 50px;
      }

      @include mq-tablet-desktop {
        grid-template-areas:
          'main-menu-left main-menu-right social-menu'
          'main-menu-left main-menu-right logos-menu';
      }

      @include mq-desktop {
        column-gap: 64px;
      }

      &__social-menu,
      &__logos-menu {
        display: flex;
        gap: 24px;

        a {
          display: block;
        }
      }

      &__main-menu {
        &--left {
          grid-area: main-menu-left;

          @include mq-mobile {
            grid-column-end: span 2;
          }
        }

        &--right {
          grid-area: main-menu-right;

          @include mq-mobile {
            grid-column: span 4;
            grid-column-start: span 3;
          }
        }

        &__item a {
          display: block;
          padding-bottom: 4px;
          font-size: 14px;
          font-weight: $font-weight-regular;
          line-height: 1.2;
          color: $white;
          text-decoration-color: transparent;
          transition: $transition-duration ease-in-out text-decoration-color;

          &:hover {
            text-decoration-color: $white;
          }
        }
      }

      &__social-menu {
        grid-area: social-menu;
        align-items: flex-start;
      }

      &__logos-menu {
        grid-area: logos-menu;
        align-items: flex-end;

        img {
          height: 36px;
          object-fit: contain;
        }
      }
    }
  }

  &__copyright {
    padding: 12px 32px;
    font-size: 14px;
    font-weight: $font-weight-regular;
    line-height: 1.2;
    text-align: center;
    background-color: $black;
  }
}
</style>
