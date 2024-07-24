<template>
  <div class="language-switcher" :class="'language-switcher--' + orientation">
    <span class="language-switcher__label" :title="getCurrentLang?.name">
      {{ getCurrentLang?.code }}
      <Icon name="icon:arrow-down" v-if="orientation === 'vertical'" />
    </span>
    <div class="language-switcher__select">
      <template v-for="lang in langs" :key="lang.code">
        <span
          v-if="!isCurrentLang(lang.code)"
          :title="lang.name"
          class="language-switcher__select__option"
          @click="changeLang(lang.code)"
        >
          {{ lang.code }}
        </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  orientation: {
    type: String as PropType<'vertical' | 'horizontal'>,
    required: false,
    default: 'horizontal',
  },
});

const { langs, getCurrentLang, isCurrentLang, changeLang } = useI18n();
</script>

<style scoped lang="scss">
.language-switcher {
  position: relative;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;

  &__label {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__label,
  &__select__option {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
  }

  &--vertical {
    height: 100%;

    .language-switcher__select {
      display: block;
      position: absolute;
      top: var(--header-height);
      left: -12px;
      background-color: $deep-grey;
      width: max-content;
      min-width: 100px;

      visibility: hidden;
      opacity: 0;
      transition: $transition-duration ease-in-out opacity;

      &__option {
        display: block;
        padding: 10px 26px;
        transition: $transition-duration ease-in-out color;

        &:hover {
          color: $blue;
        }

        &:first-child {
          padding-top: 20px;
        }

        &:last-child {
          padding-bottom: 20px;
        }
      }
    }

    &:hover {
      .language-switcher__select {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &--horizontal {
    gap: 20px;

    .language-switcher__label {
      color: $blue;
    }

    .language-switcher__select {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
}
</style>
