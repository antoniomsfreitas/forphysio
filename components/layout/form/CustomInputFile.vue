<template>
  <div class="input-container">
    <p class="input-label">{{ label }}</p>

    <div class="input-container__input" :class="{ 'input-container--error': hasError }">
      <label for="input-file">
        <span>{{ currentLabel }}</span>
        <Icon name="icon:arrow-up" />
      </label>
      <input type="file" id="input-file" @change="uploadFile" />
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

const emit = defineEmits(['uploadFile']);

const defaultLabel = 'Anexar ficheiro';
const currentLabel = ref(defaultLabel);

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

// Upload File
const uploadFile = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file) {
    emit('uploadFile', file);
    currentLabel.value = file.name;
  } else {
    currentLabel.value = defaultLabel;

    if (props.errorMessage) {
      hasError.value = true;
    }
  }
};
</script>

<style scoped lang="scss">
.input-container {
  .input-label {
    display: block;
    font-size: 18px;
    font-weight: $font-weight-light;
    line-height: 1.2;
    padding-bottom: 10px;
  }

  input {
    display: none;
  }

  label {
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
    background-color: $white;
    cursor: pointer;

    &:focus {
      border-color: rgb(24 168 187);
      box-shadow: 0 0 0 3px rgba(24 168 187 / 25%);
    }
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
