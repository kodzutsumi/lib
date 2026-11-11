import { Should } from './should.ts';

import type { TestDecorator, TestLabel } from '../types/mod.ts';

/**
 * Decorator for marking a method as being covered by other tests.
 *
 * @param labels The labels of the tests that cover this method.
 * @returns A method decorator.
 */
export function CoveredBy(...labels: TestLabel[]): TestDecorator {
  return Should(
    `be covered by ${labels.map((label) => label.toString()).join(', ')}`,
  );
}
