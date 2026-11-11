import type { TestDecorator, TestLabel } from '../types/mod.ts';
import { Test } from '@kz/testing/suite';

/**
 * A type representing the extensions available for the "Take" decorator.
 */
export type TakeExtensions = {
  /**
   * Decorator for marking a method with a "should" test description.
   *
   * @param label The label for the "should" test.
   * @returns A method decorator.
   */
  Should(label: TestLabel): TestDecorator;

  /**
   * Decorator for marking a method with a "should be" test description.
   *
   * @param label The label for the "should be" test.
   * @returns A method decorator.
   */
  ShouldBe(label: TestLabel): TestDecorator;

  /**
   * Decorator for marking a method with a "take (...inputs),..." test description in reverse order.
   *
   * @returns `TakeExtension` for the reversed inputs.
   */
  reverse: TakeExtensions;
};

/**
 * Decorator for marking a method with a "take (...inputs),..." test description.
 *
 * @param label The label for the "take (...inputs),..." test.
 * @returns An object containing the {@linkcode ShouldBe} and {@linkcode Should} decorator.
 */
export function Take(...inputs: TestLabel[]): TakeExtensions {
  return {
    Should(label: TestLabel): TestDecorator {
      return Test(`take (${inputs.join(', ')}), ${label.toString()}`);
    },
    ShouldBe(label: TestLabel): TestDecorator {
      return Test(`take (${inputs.join(', ')}), should be ${label.toString()}`);
    },
    get reverse(): TakeExtensions {
      return Take(...inputs.reverse());
    },
  };
}
