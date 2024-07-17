import { useWindowSize } from '@vueuse/core';
import { Breakpoints } from '~/models/ui/ui.model';

const { width } = useWindowSize();

export const isMobile = computed(() => {
  return width.value < Breakpoints.TABLET;
});

export const isTablet = computed(() => {
  return width.value >= Breakpoints.TABLET && width.value < Breakpoints.DESKTOP;
});

export const isDesktop = computed(() => {
  return width.value >= Breakpoints.DESKTOP;
});
