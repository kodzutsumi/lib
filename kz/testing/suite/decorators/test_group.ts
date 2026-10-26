import { setTestGroup } from '../_internal/mod.ts';
import type { TestDecorator, TestLabel, TestMethod } from '../types/mod.ts';

/**
 * Decorator for marking a method as part of a test group.
 *
 * @param group The group label for the test.
 * @returns A method decorator.
 */
export function TestGroup<Args extends unknown[] = unknown[]>(
  group: TestLabel,
): TestDecorator<Args> {
  return (target: TestMethod<Args>, context: DecoratorContext) => {
    if (context.kind !== 'method') {
      throw new Error(
        `@TestGroup can only be applied to methods, but was applied to ${context.kind}`,
      );
    }

    const name = context.name || target.name;

    setTestGroup(name, group, context);
  };
}
