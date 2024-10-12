<template>
  <div class="custom-checkbox" :class="{ 'custom-checkbox--checked': modelValue, 'custom-checkbox--error': hasError }">
    <label>
      <span>{{ label }}</span>
      <input type="checkbox" v-model="modelValue" @change="updateValue()" />
    </label>

    <span v-if="hasError" class="error-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { FormFieldValue } from '~/models/form.model';

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: '',
  },
  modelValue: {
    type: Boolean as PropType<FormFieldValue>,
    default: false,
  },
  errorMessage: {
    type: String,
    default: false,
    required: false,
  },
});

const emit = defineEmits(['update:modelValue']);
const modelValue = ref(props.modelValue);

const updateValue = () => {
  emit('update:modelValue', modelValue);

  hasError.value = !modelValue.value && props.errorMessage ? true : false;
};

// Error handling
const hasError = ref(false);
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
.custom-checkbox {
  label {
    position: relative;
    font-size: 18px;
    font-weight: $font-weight-light;
    line-height: 1.2;
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;

    &::before {
      content: '';
      width: 20px;
      height: 20px;
      border: 1.5px solid $white;
    }

    &::after {
      position: absolute;
      left: 4px;
      top: 1px;
      font-size: 19px;
    }
  }

  &--checked label::after {
    content: '\2715';
  }

  &--error label::before {
    border-color: $error-color;
    background-color: $error-bg;
  }

  input {
    display: none;
  }
}
</style>
