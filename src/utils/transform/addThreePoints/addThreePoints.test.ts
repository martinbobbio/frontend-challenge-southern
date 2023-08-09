import addThreePoints from './addThreePoints';
import { expect, test, describe } from 'vitest';

describe('addThreePoints', () => {
  test('Should handle correct value', () => {
    const result = addThreePoints('Lorem ipsum', 10);
    expect(result).toBe('Lorem ipsu...');
  });

  test('Should handle correct value', () => {
    const result = addThreePoints('Lorem ipsum', 10);
    expect(result).toBe('Lorem ipsu...');
  });

  test('Should handle correct value', () => {
    const result = addThreePoints(undefined, 10);
    expect(result).toBe('');
  });

  test('Should handle short value', () => {
    const result = addThreePoints('Lo', 10);
    expect(result).toBe('Lo');
  });

  test('Should handle long value', () => {
    const result = addThreePoints(
      'Lorem ipsum lorem lorem lorem lorem lorem',
      20
    );
    expect(result).toBe('Lorem ipsum lorem lo...');
  });
});
