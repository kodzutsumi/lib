import { setTestIteration } from '../_internal/mod.ts';
import type { TestDecorator, TestMethod } from '../types/mod.ts';

/**
 * Decorator for setting the iteration count for a test method.
 *
 * @param count The number of iterations for the test.
 * @returns A method decorator.
 */
export function TestIteration<Args extends unknown[] = unknown[]>(
  count: number = 3,
): TestDecorator<Args> {
  return (target: TestMethod<Args>, context: DecoratorContext) => {
    if (context.kind !== 'method') {
      throw new Error(
        `@TestIteration can only be applied to methods, but was applied to ${context.kind}`,
      );
    }

    const name = context.name || target.name;

    setTestIteration(name, count, context);
  };
}
