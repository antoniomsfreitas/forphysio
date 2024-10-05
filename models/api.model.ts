export interface DynamicObject {
  [key: string]: DynamicObject | DynamicObject[] | string | number | boolean;
}
