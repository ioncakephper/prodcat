// Mock the deepMerge function from loadConfig to test it directly
// In a real scenario, deepMerge would be exported from its own file.
// For testing, we'll import loadConfig and access the internal deepMerge if not exported.
// Since it's a private function in loadConfig.js, we'll mock its parent context or extract it.
// For this test, I will assume deepMerge is directly available for import,
// or I will manually copy-paste it here for isolated testing.
// Given the prompt asks to create tests *for* the code, I will copy-paste it for isolation.

/**
 * Recursively merges properties of two objects.
 * Properties in `source` will overwrite properties in `target`.
 * If a property is an object in both, it will be merged recursively.
 * If a property is an array, it will be replaced by the source array.
 * @param {object} target - The object to merge into.
 * @param {object} source - The object providing properties to merge.
 * @returns {object} The merged object.
 */
function deepMerge(target, source) {
  const output = { ...target };

  if (
    target &&
    typeof target === 'object' &&
    source &&
    typeof source === 'object'
  ) {
    Object.keys(source).forEach((key) => {
      if (
        source[key] &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key]) &&
        output[key] && // Use output[key] here to reflect state after previous merges
        typeof output[key] === 'object' &&
        !Array.isArray(output[key])
      ) {
        output[key] = deepMerge(output[key], source[key]);
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

describe('deepMerge', () => {
  it('should merge two simple objects', () => {
    const target = { a: 1, b: 2 };
    const source = { c: 3, d: 4 };
    const expected = { a: 1, b: 2, c: 3, d: 4 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should overwrite existing properties in target with source properties', () => {
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const expected = { a: 1, b: 3, c: 4 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should deep merge nested objects', () => {
    const target = { a: 1, b: { c: 2, d: 3 } };
    const source = { b: { e: 4, c: 5 } };
    const expected = { a: 1, b: { c: 5, d: 3, e: 4 } };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should deep merge multiple levels of nested objects', () => {
    const target = { a: { b: { c: 1 } } };
    const source = { a: { b: { d: 2 }, e: 3 } };
    const expected = { a: { b: { c: 1, d: 2 }, e: 3 } };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should merge objects where properties exist only in one source', () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { d: 3, b: { e: 4 } };
    const expected = { a: 1, b: { c: 2, e: 4 }, d: 3 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should handle merging with empty objects', () => {
    const target = { a: 1 };
    const source = {};
    expect(deepMerge(target, source)).toEqual({ a: 1 });
    expect(deepMerge({}, target)).toEqual({ a: 1 });
    expect(deepMerge({}, {})).toEqual({});
  });

  it('should handle null and undefined values correctly', () => {
    const target = { a: 1, b: null };
    const source = { b: undefined, c: null };
    const expected = { a: 1, b: undefined, c: null };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should replace arrays, not merge them', () => {
    const target = { a: [1, 2], b: 3 };
    const source = { a: [3, 4], c: 5 };
    const expected = { a: [3, 4], b: 3, c: 5 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should overwrite object with non-object source property', () => {
    const target = { a: { b: 1 } };
    const source = { a: 2 };
    const expected = { a: 2 };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should not mutate the original target object', () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { b: { d: 3 } };
    deepMerge(target, source);
    expect(target).toEqual({ a: 1, b: { c: 2 } });
  });

  it('should merge non-object properties correctly', () => {
    const target = { a: 1, b: 'hello' };
    const source = { b: 'world', c: true };
    const expected = { a: 1, b: 'world', c: true };
    expect(deepMerge(target, source)).toEqual(expected);
  });

  it('should handle complex nested structures with arrays and nulls', () => {
    const target = {
      user: {
        id: 1,
        name: 'Alice',
        settings: { theme: 'dark', notifications: { email: true, sms: false } },
        roles: ['admin', 'editor'],
        profile: null,
      },
      app: { version: '1.0' },
    };
    const source = {
      user: {
        name: 'Alicia',
        settings: { notifications: { sms: true } },
        roles: ['viewer'],
        profile: { avatar: 'url' },
        email: 'alicia@example.com',
      },
      app: { env: 'production' },
      newFeature: true,
    };
    const expected = {
      user: {
        id: 1,
        name: 'Alicia',
        settings: { theme: 'dark', notifications: { email: true, sms: true } },
        roles: ['viewer'], // Array replaced
        profile: { avatar: 'url' }, // Null overwritten by object
        email: 'alicia@example.com',
      },
      app: { version: '1.0', env: 'production' },
      newFeature: true,
    };
    expect(deepMerge(target, source)).toEqual(expected);
  });
});
