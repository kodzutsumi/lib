import type { TestCtor } from './test_ctor.ts';

/**
 * Represents a decorator for a test fixture.
 *
 * @param target - The test fixture class.
 * @param context - The decorator context.
 */
export type TestFixtureDecorator = (
  target: TestCtor,
  context: DecoratorContext,
) => void;
