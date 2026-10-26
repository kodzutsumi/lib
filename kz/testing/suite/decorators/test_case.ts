import { addTestCase } from '../_internal/mod.ts';
import type { TestDecorator, TestMethod } from '../types/mod.ts';

/**
 * Decorator for setting the iteration count for a test method.
 *
 * @param count The number of iterations for the test.
 * @returns A method decorator.
 */
export function TestCase<Args extends unknown[] = unknown[]>(
  ...args: Args
): TestDecorator<Args> {
  return (target: TestMethod<Args>, context: DecoratorContext) => {
    if (context.kind !== 'method') {
      throw new Error(
        `@TestCase can only be applied to methods, but was applied to ${context.kind}`,
      );
    }

    const name = context.name || target.name;

    addTestCase(name, args, context);
  };
}
