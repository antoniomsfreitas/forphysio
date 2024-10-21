<template>
  <div class="icon-label" :class="{ 'icon-label--semi-bold': semiBold }">
    <span>{{ props.label }}</span>
    <Icon :name="props.icon" />
  </div>
</template>

<script setup lang="ts">
import { IconLinkColors } from '~/models/ui.model';

const props = defineProps({
  icon: {
    type: String,
    required: false,
    default: 'icon:link-arrow',
  },
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String as PropType<IconLinkColors>,
    default: IconLinkColors.WHITE,
    required: false,
  },
  semiBold: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>

<style scoped lang="scss">
.icon-label {
  $color: v-bind(color);

  display: flex;
  gap: 20px;
  align-items: center;
  line-height: 1;
  color: $color;
  text-decoration: none;

  &--semi-bold {
    font-weight: $font-weight-semi-bold;
  }

  @include breakpoint-to('d') {
    font-size: 24px;
  }

  @include breakpoint-from('d') {
    font-size: 36px;
  }

  svg {
    color: $color;

    @include breakpoint-to('d') {
      font-size: 40px;
    }

    @include breakpoint-from('d') {
      font-size: 50px;
    }
  }
}
</style>
