import { Should } from './should.ts';

import type { TestDecorator, TestLabel } from '../types/mod.ts';

/**
 * Decorator for marking a method with a "should be" test description.
 *
 * @param label The label for the "should be" test.
 * @returns A method decorator.
 */
export function ShouldBe(label: TestLabel): TestDecorator {
  return Should(`be ${label.toString()}`);
}
