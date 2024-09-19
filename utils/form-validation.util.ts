export const validateField = (value: any, required: boolean, type?: string): string | undefined => {
  if (required && (!value || !value?.length)) {
    return 'Campo de preenchimento obrigatório.';
  }

  if (type === 'email') {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
      return 'O e-mail inserido não é válido';
    }
  }
};
