<template>
  <div class="language-switcher" :class="'language-switcher--' + orientation" @mouseleave="toggleShowOptions(false)">
    <span class="language-switcher__label" @mouseover="toggleShowOptions(true)">
      {{ locale }}
      <Icon v-if="orientation === 'vertical'" name="icon:arrow-down" />
    </span>

    <div class="language-switcher__select" :class="{ 'language-switcher__select--show': showOptions }">
      <NuxtLink
        v-for="option in locales"
        :key="option.code"
        :to="switchLocalePath(option.code)"
        :title="option.name"
        class="language-switcher__select__option"
        :class="{ 'language-switcher__select__option--current': option.code === locale }"
        @click="handleLanguageChange()"
      >
        {{ option.code }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const emit = defineEmits(['languageChanged']);

defineProps({
  orientation: {
    type: String as PropType<'vertical' | 'horizontal'>,
    required: false,
    default: 'horizontal',
  },
});

const showOptions = ref(false);
const toggleShowOptions = (status: boolean) => (showOptions.value = status);

const handleLanguageChange = () => {
  emit('languageChanged');
};
</script>

<style scoped lang="scss">
.language-switcher {
  position: relative;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  &__label {
    display: flex;
    gap: 4px;
    align-items: center;
    height: 100%;
    cursor: pointer;
    transition: $transition-duration ease-in-out color;
  }

  &__label,
  &__select__option {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
  }

  &--horizontal {
    gap: 20px;

    .language-switcher {
      &__label {
        display: none;
      }

      &__select {
        display: flex;
        gap: 20px;
        align-items: center;

        &__option {
          color: $white;
          text-decoration: none;

          &--current {
            color: $blue;
            cursor: default;
          }
        }
      }
    }
  }

  &--vertical {
    height: 100%;

    .language-switcher {
      &__select {
        position: absolute;
        top: var(--header-height);
        left: -12px;
        display: block;
        width: max-content;
        min-width: 100px;
        padding: 10px 0;
        visibility: hidden;
        background-color: $deep-grey;
        opacity: 0;
        transition: $transition-duration ease-in-out all;

        &--show {
          visibility: visible;
          opacity: 1;
        }

        &__option {
          display: block;
          padding: 10px 26px;
          color: $white;
          text-decoration: none;
          cursor: pointer;
          transition: $transition-duration ease-in-out color;

          &--current {
            display: none;
          }

          &:hover {
            color: $blue;
          }
        }
      }
    }

    &:hover {
      .language-switcher {
        &__label {
          color: $blue;
        }
      }
    }
  }
}
</style>
