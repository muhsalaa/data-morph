import { describe, it, expect } from 'vitest';
import { propsGrouping, type PropsGroupingInput } from './propsGrouping.js';

describe('propsGrouping', () => {
  it('should transform an array of objects into an object with arrays', () => {
    const input = [
      { name: 'John', age: 20 },
      { name: 'Jane', age: 22 },
      { name: 'Bob', age: 30 },
    ];

    const expected = {
      name: ['John', 'Jane', 'Bob'],
      age: [20, 22, 30],
    };

    expect(propsGrouping(input)).toEqual(expected);
  });

  it('should handle empty array input', () => {
    const input: PropsGroupingInput[] = [];
    const expected = {};

    expect(propsGrouping(input)).toEqual(expected);
  });

  it('should handle objects with different keys', () => {
    const input = [
      { name: 'John', age: 20 },
      { name: 'Jane', city: 'New York' },
      { hobby: 'reading', age: 30 },
    ];

    const expected = {
      name: ['John', 'Jane'],
      age: [20, 30],
      city: ['New York'],
      hobby: ['reading'],
    };

    expect(propsGrouping(input)).toEqual(expected);
  });

  it('should handle objects with array values', () => {
    const input = [
      { tags: ['js', 'ts'], count: 1 },
      { tags: ['python'], count: 2 },
    ];

    const expected = {
      tags: [['js', 'ts'], ['python']],
      count: [1, 2],
    };

    expect(propsGrouping(input)).toEqual(expected);
  });

  it('should handle objects with mixed data types', () => {
    const input = [
      { id: 1, active: true, name: 'Item 1' },
      { id: 2, active: false, name: 'Item 2' },
    ];

    const expected = {
      id: [1, 2],
      active: [true, false],
      name: ['Item 1', 'Item 2'],
    };

    expect(propsGrouping(input)).toEqual(expected);
  });
});
