export type PropsGroupingResult = {
  [key: string]: any[];
};

export type PropsGroupingInput = {
  [key: string]: any;
};

/**
 * Transforms an array of objects into an object with arrays
 * @example
 * const input = [
 *  { name: 'John', age: 20 },
 *  { name: 'Jane', age: 22 },
 *  { name: 'Bob', age: 30 },
 * ];
 *
 * const output = {
 *  name: ['John', 'Jane', 'Bob'],
 *  age: [20, 22, 30],
 * };
 *
 * @param {Array<{[key: string]: any}>} input - an array of objects
 * @returns { {[key: string]: any[] } } - an object with arrays
 */
export const propsGrouping = (
  input: PropsGroupingInput[],
): PropsGroupingResult => {
  const result: PropsGroupingResult = {};

  for (const obj of input) {
    for (const key in obj) {
      // check if key has been initialized then append value
      (result[key] ??= []).push(obj[key]);
    }
  }

  return result;
};
