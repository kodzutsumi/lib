import { _getTestMetadata } from '../_internal/_get_test_metadata.ts';
import { setTestLabel } from '../_internal/mod.ts';
import type { TestDecorator, TestLabel, TestMethod } from '../types/mod.ts';

/**
 * Decorator for marking a method as a test.
 *
 * @param label The label for the test.
 * @returns A method decorator.
 */
export function Test<Args extends unknown[] = unknown[]>(
  label?: TestLabel,
): TestDecorator<Args> {
  return (target: TestMethod<Args>, context: DecoratorContext) => {
    if (context.kind !== 'method') {
      throw new Error(
        `@Test can only be applied to methods, but was applied to ${context.kind}`,
      );
    }

    const name = context.name || target.name;

    _getTestMetadata(name, context);

    if (label) {
      setTestLabel(name, label, context);
    }
  };
}
