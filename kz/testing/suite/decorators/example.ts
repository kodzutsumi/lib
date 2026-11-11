import { Test } from './test.ts';

import type { TestDecorator, TestLabel } from '../types/mod.ts';

/**
 * Decorator for marking a method that references an example test.
 *
 * @param label The label for the example test.
 * @returns A method decorator.
 */
export function Example(label: TestLabel): TestDecorator {
  return Test(`Example: ${label.toString()}`);
}
