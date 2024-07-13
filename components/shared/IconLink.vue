<template>
  <a :href="props.link" :title="props.text" class="icon-link" :target="external ? '_blank' : '_self'">
    <span>{{ props.text }}</span>
    <Icon name="icon:link-arrow" />
  </a>
</template>

<script setup lang="ts">
import { IconLinkColors } from '~/models/layout/ui.model';

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  external: {
    type: Boolean,
    default: false,
    required: false,
  },
  color: {
    type: String as PropType<IconLinkColors>,
    default: IconLinkColors.BLUE,
    required: false,
  },
});
</script>

<style scoped lang="scss">
.icon-link {
  $color: v-bind(color);

  display: flex;
  gap: 40px;
  align-items: center;
  font-weight: 300;
  line-height: 1;
  color: $color;
  text-decoration: none;

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
