<template>
  <div class="custom-select">
    <div
      class="custom-select__selected-option"
      :class="{ 'custom-select__selected-option--opened': isOpen }"
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
  </div>
</template>

<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components';

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
    type: Number,
    default: null,
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
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedValue = ref(props.modelValue);

const closeDropdown = () => {
  isOpen.value = false;
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (id: number) => {
  selectedValue.value = id;
  isOpen.value = false;

  emit('update:modelValue', id);
};

const selectedLabel = computed(() => {
  const selectedOption = props.options.find((option) => option.id === selectedValue.value);
  return selectedOption ? selectedOption.title : props.defaultLabel;
});

watch(
  () => props.modelValue,
  (newValue) => {
    selectedValue.value = newValue;
  },
);
</script>

<style scoped lang="scss">
$border-radius: 22px;

.custom-select {
  position: relative;
  width: 100%;
  cursor: pointer;
  user-select: none;
  font-size: 16px;
  font-weight: $font-weight-light;
  line-height: 1.2;
  color: $black;
  cursor: pointer;

  &__selected-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 16px;
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
      padding: 12px 16px;
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
}
</style>
