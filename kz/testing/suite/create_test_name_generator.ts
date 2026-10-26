import { nameGenerator } from './_internal/mod.ts';

import type { TestNameGenerator, TestNameOptions } from './types/mod.ts';

/**
 * Creates a test name generator based on the provided options.
 *
 * @param options The options for generating test names.
 */
export function createTestNameGenerator(
  options: TestNameOptions = {},
): TestNameGenerator {
  const generator = nameGenerator(options);

  return {
    /**
     * The next generated test name.
     */
    get new() {
      return generator.next().value;
    },
  };
}
