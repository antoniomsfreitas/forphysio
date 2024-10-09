<template>
  <div class="input-container">
    <div class="input-container__input">
      <input
        v-model="modelValue"
        :placeholder="placeholder"
        :class="{ error: hasError }"
        @keyup.enter="searchValue()"
      />

      <Icon name="icon:search" class="icon-search" />
      <Icon v-show="hasError" name="icon:error" class="icon-error" />
    </div>

    <Button type="outline" @click="searchValue()">{{ $t('search.label') }}</Button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  value: {
    type: String,
    required: false,
    default: '',
  },
});

const emit = defineEmits(['search']);

const modelValue = ref(props.value);
const hasError = ref(false);

watch(modelValue, () => {
  if (modelValue.value) {
    hasError.value = false;
  }
});

const searchValue = () => {
  if (modelValue.value?.length) {
    emit('search', modelValue.value);
    hasError.value = false;
  } else {
    hasError.value = true;
  }
};
</script>

<style scoped lang="scss">
.input-container {
  &__input {
    position: relative;

    input {
      width: 100%;
      padding: 8px 18px 8px 48px;
      font-size: 16px;
      font-weight: $font-weight-light;
      line-height: 28px;
      color: $deep-grey;
      border: 1px solid transparent;
      border-radius: 35px;
      outline: none;
      transition: 100ms ease-in-out (border-color, box-shadow);

      &:focus {
        border-color: rgb(24 168 187);
        box-shadow: 0 0 0 3px rgba(24 168 187 / 25%);
      }

      &.error {
        background: $error-bg;

        &:focus {
          border-color: $error-color;
        }
      }
    }

    .icon {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;

      &.icon-error {
        right: 16px;
      }

      &.icon-search {
        left: 16px;
      }
    }
  }

  .button {
    width: 100%;
    margin-top: 40px;
  }
}
</style>
