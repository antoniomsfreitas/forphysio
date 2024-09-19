export type FormFieldValue = string | number | boolean;

export interface FormField {
  value?: FormFieldValue;
  required: boolean;
  type?: string;
  errorMessage?: string;
}

export interface FormData {
  [key: string]: FormField;
}
