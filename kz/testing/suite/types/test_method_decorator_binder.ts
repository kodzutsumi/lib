import type { TestDecorator } from './test_decorator.ts';

/**
 * Binds a test method to a specific test decorator.
 */
export type TestMethodDecoratorBinder = {
  /**
   * Returns the test decorator associated with this method binder.
   */
  use(): TestDecorator;
};
