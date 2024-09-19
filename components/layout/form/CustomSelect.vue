<template>
  <div class="custom-select" :class="{ 'custom-select--error': hasError }">
    <label v-if="topLabel?.length">{{ topLabel }}</label>

    <div
      class="custom-select__selected-option"
      :class="{
        'custom-select__selected-option--opened': isOpen,
        'custom-select__selected-option--default': defaultOption,
      }"
      @click="toggleDropdown"
      v-on-click-outside="closeDropdown"
    >
      <span>{{ selectedLabel }}</span>
      <Icon name="icon:arrow-down" />
    </div>
    <div v-if="isOpen" class="custom-select__dropdown">
      <div
        v-for="option in options"
        :key="option.id"
        class="custom-select__dropdown__item"
        :class="{ 'custom-select__dropdown__item--selected': selectedValue === option.id }"
        @click="selectOption(option.id)"
      >
        {{ option.title }}
      </div>
      <div
        v-if="viewAll"
        class="custom-select__dropdown__item"
        :class="{ 'custom-select__dropdown__item--selected': selectedValue === 0 }"
        @click="selectOption(0)"
      >
        {{ props.viewAllLabel }}
      </div>
    </div>

    <span v-if="hasError" class="custom-select__error-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';
import type { FormFieldValue } from '~/models/form.model';

interface Option {
  id: number;
  title: string;
}

const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  modelValue: {
    type: [String, Number] as PropType<FormFieldValue>,
    default: null,
  },
  topLabel: {
    type: String,
    required: false,
  },
  defaultLabel: {
    type: String,
    required: true,
  },
  viewAll: {
    type: Boolean,
    required: false,
    default: false,
  },
  viewAllLabel: {
    type: String,
    required: false,
    default: 'Ver todos',
  },
  errorMessage: {
    type: String,
    default: false,
    required: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const defaultOption = ref(false);
const selectedValue = ref(props.modelValue);

const closeDropdown = () => {
  isOpen.value = false;
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;

  // clean errors
  hasError.value = !isOpen.value && props.errorMessage.length && !selectedValue.value ? true : false;
};

const selectOption = (id: number) => {
  selectedValue.value = id;
  isOpen.value = false;

  emit('update:modelValue', id);
};

const selectedLabel = computed(() => {
  const selectedOption = props.options.find((option) => option.id === selectedValue.value);

  if (selectedOption) {
    defaultOption.value = false;
    return selectedOption.title;
  }

  defaultOption.value = true;
  return props.defaultLabel;
});

watch(
  () => props.modelValue,
  (newValue) => {
    selectedValue.value = newValue;
  },
);

// Error handling
const hasError = ref<Boolean>(false);
watch(
  () => props.errorMessage,
  (errorMessage) => {
    if (errorMessage) {
      hasError.value = true;
    }
  },
);
</script>

<style scoped lang="scss">
$border-radius: 28px;

.custom-select {
  position: relative;
  width: 100%;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  font-weight: $font-weight-light;
  line-height: 1.2;
  color: $black;
  cursor: pointer;

  label {
    display: block;
    font-size: 18px;
    font-weight: $font-weight-light;
    line-height: 1.2;
    padding-bottom: 10px;
    color: $white;
  }

  &__selected-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 32px;
    background-color: $white;
    border-radius: $border-radius;

    .icon {
      transition: $transition-duration ease-in-out transform;
    }

    &--opened {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      .icon {
        transform: rotate(180deg);
      }
    }

    &--default {
      color: $medium-grey;
    }
  }

  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    z-index: 1000;
    overflow: hidden;

    &__item {
      padding: 15px 32px;
      transition: $transition-duration ease-in-out background-color;
      border-top: 1px solid $light-grey;

      &:hover:not(&--selected) {
        background-color: $light-grey;
      }

      &--selected {
        background-color: $blue;
        color: $white;
      }
    }
  }

  &--error {
    .custom-select__selected-option {
      background-color: $error-bg;
      border-color: $error-color;
    }
  }
}
</style>
