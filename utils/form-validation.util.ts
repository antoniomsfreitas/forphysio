export function validateField(
  value: any,
  required: boolean,
  t: (key: string) => string,
  type?: string,
): string | undefined {
  if (required && (!value || !value?.length)) {
    return translation('form-field.validation.requiredField');
  }

  if (type === 'email') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
      return translation('form-field.validation.invalidEmail');
    }
  }
}
