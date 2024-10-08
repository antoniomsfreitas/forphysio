import type { DynamicObject } from '~/models/api.model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFormattedDataByLocale = (data: any, locale: string): any => {
  // @TODO: improve typescript
  // recursive function for processing objects and arrays
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const processNodeData = (node: any): any => {
    if (Array.isArray(node)) {
      // if it's an array, it iterates through the items and applies the translation
      return node.map((item) => processNodeData(item));
    } else if (typeof node === 'object' && node !== null) {
      // if it is an object, it creates a new processed object
      const result: DynamicObject = {};

      for (const key in node) {
        if (key === 'translations' && node[key][locale]) {
          // if the key is 'translations' and there is a translation in the language, use that translation
          return node[key][locale];
        } else {
          // otherwise, it processes recursively
          result[key] = processNodeData(node[key]);
        }
      }

      return result;
    }

    // if it is neither object nor array, it just returns the current value
    return node;
  };

  // starts processing the main object
  return processNodeData(data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDataOrderedByDate = (data: any) => {
  const parseData = (date: string): Date => {
    const [day, month, year] = date.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.sort((a: any, b: any) => {
    const dataA = parseData(a.date.date);
    const dataB = parseData(b.date.date);
    return dataB.getTime() - dataA.getTime(); // Compara os timestamps das duas datas
  });
};
