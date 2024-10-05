/**
 * Locale message translation
 * @param string A target locale message key
 *
 * @returns translation message
 */
export function translation(key: string) {
  return useNuxtApp().$i18n.t(key);
}
