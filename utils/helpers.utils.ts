/**
 * Locale message translation
 * @param string A target locale message key
 *
 * @returns translation message
 */
export function translation(key: string) {
  return useNuxtApp().$i18n.t(key);
}

/**
 * Truncates a given text to the specified maximum length without cutting words in half.
 * If the text exceeds the maximum length, it is truncated at the last full word that fits
 * within the limit, and an ellipsis ("...") is appended to the end to indicate truncation.
 *
 * @param text - The original text string that needs to be truncated.
 * @param maxLength - The maximum allowed length for the truncated text, including the ellipsis.
 * @returns The truncated text with an ellipsis if it was shortened, or the original text if
 *          no truncation was necessary.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  // Truncate the text to the maxLength
  let truncated = text.slice(0, maxLength);

  // Find the last space within the truncated text to avoid cutting words
  if (truncated.lastIndexOf(' ') > 0) {
    truncated = truncated.slice(0, truncated.lastIndexOf(' '));
  }

  return truncated + ' (...)';
}
