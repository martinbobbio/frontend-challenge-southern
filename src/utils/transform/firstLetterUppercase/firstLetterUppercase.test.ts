import firstLetterUppercase from './firstLetterUppercase';
import { expect, test, describe } from 'vitest';

describe('firstLetterUppercase', () => {
  test('Should handle correct value', () => {
    const result = firstLetterUppercase('lorem ipsum');
    expect(result).toBe('Lorem ipsum');
  });
});
