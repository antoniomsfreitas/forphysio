<template>
  <div class="input-container">
    <label>{{ label }}</label>

    <div class="input-container__input" :class="{ 'input-container--error': hasError }">
      <component
        :is="component"
        :value="props.modelValue"
        :placeholder="placeholder"
        @input="updateValue($event.target.value)"
      />
      <Icon v-if="hasError" name="icon:error" />
    </div>

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
  placeholder: {
    type: String,
    required: false,
  },
  type: {
    type: String as PropType<'text' | 'email' | 'textarea'>,
    default: 'text',
    required: false,
  },
  modelValue: {
    type: [String, Number] as PropType<FormFieldValue>,
    default: false,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
    required: false,
  },
  errorMessage: {
    type: String,
    default: false,
    required: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const component = computed(() => {
  return props.type == 'textarea' ? 'textarea' : 'input';
});

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

// Update field
const updateValue = (value: String | Number | Boolean) => {
  emit('update:modelValue', value);

  hasError.value = !value && props.errorMessage;
};
</script>

<style scoped lang="scss">
.input-container {
  label {
    display: block;
    font-size: 18px;
    font-weight: $font-weight-light;
    line-height: 1.2;
    padding-bottom: 10px;
  }

  input,
  textarea {
    width: 100%;
    padding: 18px 32px;
    font-size: 14px;
    font-weight: $font-weight-light;
    line-height: 1.2;
    color: $deep-grey;
    border: 1px solid transparent;
    border-radius: 35px;
    outline: none;
    transition: 100ms ease-in-out (border-color, box-shadow);

    &:focus {
      border-color: rgb(24 168 187);
      box-shadow: 0 0 0 3px rgba(24 168 187 / 25%);
    }
  }

  textarea {
    min-width: 100%;
    max-width: 100%;
    min-height: 128px;
    height: 128px;
  }

  &__input {
    position: relative;

    .icon {
      position: absolute;
      position: absolute;
      right: 32px;
      top: 15px;
    }
  }

  &--error {
    input,
    textarea {
      background: $error-bg;

      &:focus {
        border-color: $error-color;
      }
    }
  }
}
</style>
