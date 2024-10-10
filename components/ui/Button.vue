<template>
  <button class="button" :button-type="props.type" :button-size="props.size" :button-disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<'primary' | 'secondary' | 'outline'>,
    required: false,
    default: 'primary',
  },
  size: {
    type: String as PropType<'large' | 'medium' | 'small'>,
    required: false,
    default: 'medium',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.button {
  display: inline-block;
  font-weight: $font-weight-regular;
  line-height: 1.2;
  text-decoration: none;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  border-radius: 35px;
  transition: $transition-duration ease-in-out all;
  padding-left: 18px;
  padding-right: 18px;
  line-height: 28px;
  text-align: center;
  min-height: 0;

  &[button-type='primary'] {
    color: $white;
    background-color: $blue;
    border-color: $blue;

    &:hover {
      background-color: $black;
      border-color: $white;
    }

    &:active {
      color: $black;
      background-color: $white;
      border-color: $white;
    }
  }

  &[button-type='secondary'] {
    color: $black;
    background-color: $white;
    border-color: $white;

    &:hover {
      color: $white;
      background-color: $black;
      border-color: $white;
    }

    &:active {
      color: $white;
      background-color: $blue;
      border-color: $blue;
    }
  }

  &[button-type='outline'] {
    color: $white;
    background-color: transparent;
    border-color: $white;

    &:hover {
      color: $black;
      background-color: $white;
      border-color: $white;
    }

    &:active {
      color: $white;
      background-color: $blue;
      border-color: $blue;
    }
  }

  &[button-disabled='true'] {
    pointer-events: none;
    color: $medium-grey;
    background-color: $light-grey;
    border-color: $light-grey;
  }

  &[button-size='large'] {
    padding-top: 13px;
    padding-bottom: 13px;
    font-size: 18px;
  }

  &[button-size='medium'] {
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 16px;
  }

  &[button-size='small'] {
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 14px;
  }
}
</style>
