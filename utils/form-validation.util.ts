export function validateField(value: any, required: boolean, type?: string): string | undefined {
  if (required && (!value || value == null)) {
    return translation('form-field.validation.requiredField');
  }

  if (type == 'file' && value !== 'application/pdf') {
    return translation('form-field.validation.invalidFormat');
  }

  if (type === 'email') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
      return translation('form-field.validation.invalidEmail');
    }
  }
}
