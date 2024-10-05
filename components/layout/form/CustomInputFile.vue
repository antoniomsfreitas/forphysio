<template>
  <div class="input-container">
    <div class="input-label">
      <span>{{ label }}</span>
      <span class="extensions">( .pdf )</span>
    </div>

    <div class="input-container__input" :class="{ 'input-container--error': hasError }">
      <label for="input-file" :class="{ 'input-filled': currentValue.length }">
        <span v-t="currentValue.length ? currentValue : $t('form-field.cv.default-label')" />
        <Icon name="icon:arrow-up" />
      </label>
      <input type="file" id="input-file" accept=".pdf" @change="uploadFile" />
    </div>

    <span v-if="hasError" class="error-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
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
const currentValue = ref<string>('');
const hasError = ref(false);

// Error handling
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
    currentValue.value = file.name;
    hasError.value = false;
  } else {
    currentValue.value = '';

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

    .extensions {
      font-size: 14px;
      margin-left: 8px;
      color: #a1a2a4;
    }
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
    color: $medium-grey;
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

    &.input-filled {
      color: $deep-grey;
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
    label {
      background: $error-bg;

      &:focus {
        border-color: $error-color;
      }
    }
  }
}
</style>
