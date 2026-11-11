import { Test } from './test.ts';

import type { TestDecorator, TestLabel } from '../types/mod.ts';

/**
 * Decorator for marking a method with a "should" test description.
 *
 * @param label The label for the "should" test.
 * @returns A method decorator.
 */
export function Should(label: TestLabel): TestDecorator {
  return Test(`should ${label.toString()}`);
}
