import type { TestMethod } from './test_method.ts';

/**
 * Represents a decorator for a test method.
 *
 * @param target - The test method.
 * @param context - The decorator context.
 */
export type TestDecorator<Args extends unknown[] = unknown[]> = (
  target: TestMethod<Args>,
  context: ClassMethodDecoratorContext,
) => void;
