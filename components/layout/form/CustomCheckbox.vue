<template>
  <div
    class="custom-checkbox"
    :class="{
      'custom-checkbox--checked': modelValue,
      'custom-checkbox--error': hasError,
    }"
  >
    <label>
      <span>{{ label }} <span v-if="required" class="required">*</span></span>
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
    required: true,
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
  required: {
    type: Boolean,
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
      content: '';
      width: 22px;
      height: 22px;
      opacity: 0;
      background: url(/assets/icons/close.svg) no-repeat center center/22px;
      transition: 150ms ease-in-out all;
    }

    .required {
      color: $blue;
      margin-left: 4px;
    }
  }

  &--checked label::after {
    opacity: 1;
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
