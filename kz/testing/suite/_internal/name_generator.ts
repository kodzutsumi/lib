import type { TestNameOptions } from '../types/mod.ts';

/**
 * Generates unique test names based on the provided options.
 *
 * @param options The options for generating test names.
 * @returns A generator that yields unique test names.
 */
export function* nameGenerator(
  options: TestNameOptions = {},
): Generator<string, string, string> {
  const {
    prefix = 'test',
    offset = 0,
    delimiter = '#',
  } = options;

  let index = offset;

  while (true) {
    const testName = `${prefix}${delimiter}${index}`;

    index++;

    const reset = yield testName;

    if (reset !== undefined) {
      index = parseInt(reset, 10);
    }
  }
}
